var currentQuestionIndex = 0, score = 0, timeLeft = TIME_LIMIT, timerInterval;
var namaPeserta, golonganPeserta, tokenPeserta, detailJawaban = [];
var startScreen = document.getElementById('start-screen'), countdownScreen = document.getElementById('countdown-screen'), quizScreen = document.getElementById('quiz-screen'), resultScreen = document.getElementById('result-screen');
var btnStart = document.getElementById('btn-start'), btnNext = document.getElementById('btn-next'), timerDisplay = document.getElementById('timer-display');
var bgmAudio = document.getElementById('bgm');
var videoIbadah = document.getElementById('video-ibadah');
var audioCtx = null;

document.getElementById('btn-music').onclick = function() {
    if (bgmAudio) {
        bgmAudio.volume = 0.5;
        bgmAudio.play().then(() => {
            this.innerHTML = "🎵 Musik Menyala";
            this.style.background = "rgba(212, 175, 55, 0.3)";
        }).catch(e => console.log("Lagu gagal diputar:", e));
    }
};

btnStart.onclick = function() {
    namaPeserta = document.getElementById('input-nama').value.trim();
    golonganPeserta = document.getElementById('input-golongan').value.trim();
    tokenPeserta = document.getElementById('input-token').value.trim().toUpperCase(); 

    if (!namaPeserta || !golonganPeserta || !tokenPeserta) { alert("Isi semua data!"); return; }
    if (!DAFTAR_TOKEN.includes(tokenPeserta)) { alert("Token tidak valid atau sudah digunakan! Silakan hubungi panitia."); return; }

    if (videoIbadah) { videoIbadah.play().catch(function(e) { console.log("Video gagal"); }); }
    if (bgmAudio && bgmAudio.paused) { bgmAudio.volume = 0.5; bgmAudio.play().catch(function(e) { console.log("Lagu gagal"); }); }
    try { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}

    startScreen.classList.remove('active'); countdownScreen.classList.add('active');
    document.getElementById('peserta-info').textContent = namaPeserta;
    currentQuestionIndex = 0; score = 0; detailJawaban = []; timeLeft = TIME_LIMIT; 
    
    var count = 5;
    var countdownElement = document.getElementById('countdown-number');
    countdownElement.textContent = count;

    var countdownInterval = setInterval(function() {
        count--;
        if (count > 0) {
            countdownElement.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownScreen.classList.remove('active'); quizScreen.classList.add('active');
            startTimer(); loadQuestion();
        }
    }, 1000);
};

function startTimer() {
    timerDisplay.textContent = "15:00";
    timerInterval = setInterval(function() {
        timeLeft--; var m = Math.floor(timeLeft / 60), s = timeLeft % 60;
        m = m < 10 ? '0' + m : m; s = s < 10 ? '0' + s : s;
        timerDisplay.textContent = m + ":" + s;
        if (timeLeft <= 0) { clearInterval(timerInterval); alert("Waktu habis!"); showResult(); }
    }, 1000);
}

function playTone(f, t, d, s) {
    if (!audioCtx) return;
    var o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = t; o.frequency.value = f; o.connect(g); g.connect(audioCtx.destination);
    g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(0.3, s + 0.05); g.gain.exponentialRampToValueAtTime(0.01, s + d);
    o.start(s); o.stop(s + d);
}
function sfxBenar() { if (audioCtx) { var n = audioCtx.currentTime; playTone(659.25, 'sine', 0.15, n); playTone(880.00, 'sine', 0.3, n + 0.15); } }
function sfxSalah() { if (audioCtx) { var n = audioCtx.currentTime; playTone(200, 'sawtooth', 0.2, n); playTone(150, 'sawtooth', 0.3, n + 0.15); } }
function sfxSelesai() { if (audioCtx) { var n = audioCtx.currentTime; playTone(523.25, 'sine', 0.15, n); playTone(659.25, 'sine', 0.15, n + 0.15); playTone(783.99, 'sine', 0.15, n + 0.3); playTone(1046.50, 'sine', 0.5, n + 0.45); } }

function loadQuestion() {
    btnNext.style.display = 'none';
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('progress-fill').style.width = ((currentQuestionIndex / questions.length) * 100) + "%";
    var q = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = q.q;
    for (var i = 0; i < q.o.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'option-btn'; btn.textContent = q.o[i];
        btn.setAttribute("onclick", "checkAnswer(" + i + ", this)");
        document.getElementById('options-container').appendChild(btn);
    }
}

function checkAnswer(selectedIndex, btnElement) {
    if (!btnElement) return;
    var allBtns = document.querySelectorAll('.option-btn');
    for (var j = 0; j < allBtns.length; j++) allBtns[j].disabled = true;
    var q = questions[currentQuestionIndex];
    var jawabanBenar = q.o[q.a], jawabanUser = q.o[selectedIndex];

    if (selectedIndex === q.a) {
        btnElement.classList.add('correct'); score++;
        detailJawaban.push("Soal " + (currentQuestionIndex + 1) + ": Benar");
        sfxBenar(); confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    } else {
        btnElement.classList.add('wrong'); allBtns[q.a].classList.add('correct');
        detailJawaban.push("Soal " + (currentQuestionIndex + 1) + ": Salah");
        sfxSalah(); 
    }
    btnNext.style.display = 'block';
    btnNext.textContent = (currentQuestionIndex === questions.length - 1) ? "Selesai & Kumpulkan" : "Soal Berikutnya";
}

btnNext.onclick = function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) loadQuestion(); else showResult();
};

function showResult() {
    clearInterval(timerInterval); 
    if (bgmAudio) bgmAudio.pause();
    quizScreen.classList.remove('active'); resultScreen.classList.add('active');
    var nilai = Math.round((score / questions.length) * 100);
    document.getElementById('res-nama').textContent = namaPeserta;
    document.getElementById('res-golongan').textContent = golonganPeserta;
    document.getElementById('res-benar').textContent = score;
    document.getElementById('res-salah').textContent = questions.length - score;
    document.getElementById('res-nilai').textContent = nilai;
    sfxSelesai();
    if (nilai >= 80) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    
    var formData = new URLSearchParams();
    formData.append(ENTRY_NAMA, namaPeserta); formData.append(ENTRY_GOLONGAN, golonganPeserta);
    formData.append(ENTRY_TOKEN, tokenPeserta); formData.append(ENTRY_NILAI, nilai);
    formData.append(ENTRY_BENAR, score); formData.append(ENTRY_SALAH, questions.length - score);
    formData.append(ENTRY_DETAIL, detailJawaban.join("\n"));
    
    fetch("https://docs.google.com/forms/d/e/" + FORM_ID + "/formResponse", { 
        method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: formData.toString() 
    }).catch(function(err) { console.log("Gagal mengirim data: ", err); });
}