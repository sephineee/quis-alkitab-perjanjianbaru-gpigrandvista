var FORM_ID = "1FAIpQLSfKdipJOh-xHDt1ot9FxodhRTYsa1dCfwRY-maDQsoYnLQfwg";
var ENTRY_NAMA = "entry.1460657046"; var ENTRY_GOLONGAN = "entry.93282975";
var ENTRY_TOKEN = "entry.70878547"; var ENTRY_NILAI = "entry.1471329933";
var ENTRY_BENAR = "entry.644547778"; var ENTRY_SALAH = "entry.289739470";
var ENTRY_DETAIL = "entry.1172364146";

var DAFTAR_TOKEN = ["YERUSALEM", "BETLEHEM", "NAZARET", "KAPERNAUM", "YERIKHO", "BABEL", "NINIWE", "TARSIS", "GOLGOTA", "EFESUS", "FILIPI", "KORINTUS", "ROMA", "ANTIOKHIA", "TROAS", "SINAI", "KANAAN", "YORDAN", "SAMARIA", "GALILEA", "YUDEA", "SIDON", "TIRUS", "DAMASKUS", "ARAM", "UR", "HARAN", "SODOM", "GOMORA", "BETEL", "GILGAL", "HEBRON", "SILO", "MIZPA", "GIBEON", "LAKHIS", "GAT", "ASDOD", "EKRON", "ZIKLAG", "PATMOS", "LAODIKIA", "SMIRNA", "PERGAMUS", "TIATIRA", "SARDI", "FILADELFIA", "MILETUS", "KRETA", "SALAMIS"];
var TIME_LIMIT = 15 * 60; 

var questions = [
    { q: "Berdasarkan Ibrani 8:7-9, mengapa Allah menyatakan perlunya mengadakan Perjanjian Baru?", o: ["A. Karena Perjanjian Lama sudah terlalu tua", "B. Karena kaum Israel dan Yehuda melanggar Perjanjian Lama", "C. Karena Allah ingin mengubah hukum Taurat", "D. Karena Perjanjian Lama untuk bangsa Yunani"], a: 1 },
    { q: "Menurut Yohanes 1:12-13, siapakah yang diberi kuasa untuk menjadi anak-anak Allah?", o: ["A. Hanya keturunan asli bangsa Israel", "B. Orang yang taat melaksanakan hukum Taurat", "C. Semua orang yang menerima dan percaya dalam nama Yesus", "D. Semua orang yang memiliki jabatan tinggi"], a: 2 },
    { q: "Berdasarkan Galatia 3:26-29, bagaimana status orang percaya yang menjadi milik Kristus?", o: ["A. Keturunan Abraham secara rohani", "B. Orang asing yang tidak berhak", "C. Wajib mengikuti adat Yahudi", "D. Keturunan bangsa luar"], a: 0 },
    { q: "Siapakah pihak-pihak yang terlibat dalam pengikatan Perjanjian Baru?", o: ["A. Antara Musa dan bangsa Israel jasmani", "B. Antara Yesus dan Israel Rohani (orang percaya)", "C. Antara para rasul dan pemerintah Roma", "D. Antara nabi Yeremia dan kaum Yehuda"], a: 1 },
    { q: "Kapan Perjanjian Baru secara resmi diberikan oleh Yesus Kristus?", o: ["A. Saat Yesus dibaptis", "B. Pada waktu malam Paskah sebelum Yesus disalibkan", "C. Saat Yesus naik ke sorga", "D. Pada hari Pentakosta"], a: 1 },
    { q: "Kitab Perjanjian Lama manakah yang menubuatkan bahwa Allah akan membuat Perjanjian Baru?", o: ["A. Kejadian 12:1-3", "B. Yesaya 53:1-5", "C. Yeremia 31:31-32", "D. Maleakhi 4:5"], a: 2 },
    { q: "Menurut Lukas 22:20 dan Matius 26:28, dengan apakah Perjanjian Baru disahkan?", o: ["A. Dengan darah domba Paskah", "B. Dengan air baptisan", "C. Dengan darah Yesus yang dicurahkan", "D. Dengan korban bakaran"], a: 2 },
    { q: "Apa janji Yesus terkait Perjamuan Paskah (Lukas 22:15-18)?", o: ["A. Tidak akan makan Paskah lagi sampai kegenapannya di Kerajaan Allah", "B. Mengadakan perjamuan setiap minggu", "C. Menghapus tradisi Paskah", "D. Makan Paskah di Yerusalem saja"], a: 0 },
    { q: "Kedatangan Yesus yang kedua kali identik dengan peristiwa apa?", o: ["A. Pembangunan Bait Allah ketiga", "B. Kedatangan Kerajaan Allah", "C. Peperangan fisik", "D. Pemulihan Israel politik"], a: 1 },
    { q: "Mengapa orang Kristen dituntut untuk mengerti nubuatan?", o: ["A. Untuk meramal masa depan", "B. Supaya tidak melanggar perjanjian dan mengenali Yesus saat datang kembali", "C. Agar mendapat pujian", "D. Karena itu sejarah"], a: 1 },
    { q: "Peristiwa alam kiasan apa yang digambarkan dalam Matius 24:29?", o: ["A. Gempa bumi", "B. Matahari gelap, bulan tidak bercahaya, bintang berjatuhan", "C. Hujan es dan api", "D. Gunung meletus"], a: 1 },
    { q: "Menurut Matius 24:31, apa yang dilakukan malaikat dengan sangkakala?", o: ["A. Menghukum bumi", "B. Mengumpulkan orang pilihan dari empat penjuru angin", "C. Membangun Yerusalem baru", "D. Menghancurkan musuh Israel"], a: 1 },
    { q: "Bagaimana ciri fisik binatang dari laut (Wahyu 13:1-2)?", o: ["A. Tiga kepala empat sayap", "B. Tujuh kepala sepuluh tanduk", "C. Sepuluh kepala tujuh tanduk", "D. Satu kepala dua tanduk"], a: 1 },
    { q: "Binatang dari laut digambarkan menyerupai binatang apa?", o: ["A. Serigala, elang, ular", "B. Macan tutul, beruang, singa", "C. Naga, naga laut", "D. Lembu, kuda"], a: 1 },
    { q: "Mengapa Alkitab tidak boleh diartikan secara harfiah semata?", o: ["A. Banyak salah ketik", "B. Ditulis dengan bahasa kiasan yang jika diartikan harfiah tampak mustahil", "C. Sudah tidak berlaku", "D. Hanya cerita fiksi"], a: 1 },
    { q: "Bagaimana kedatangan Yesus kedua kali digambarkan (2 Petrus 3:10)?", o: ["A. Pawai megah", "B. Rahasia dan mendadak seperti pencuri", "C. Kelahiran bayi", "D. Diberitahukan tanggalnya"], a: 1 },
    { q: "Zaman apa yang dipakai Yesus sebagai perbandingan akhir zaman (Lukas 17:24-30)?", o: ["A. Musa dan Yosua", "B. Nuh dan Lot", "C. Daud dan Salomo", "D. Pembuangan Babel"], a: 1 },
    { q: "Apakah dengan mengaku Kristen otomatis menepati Perjanjian Baru?", o: ["A. Ya, otomatis selamat", "B. Belum tentu; harus memahami dan mematuhi isi nubuatan", "C. Ya, label cukup", "D. Tidak terikat perjanjian"], a: 1 },
    { q: "Di kitab manakah kedatangan Yesus kedua kali dinubuatkan?", o: ["A. Hanya Wahyu", "B. Tersebar di seluruh Perjanjian Baru", "C. Hanya Injil", "D. Hanya surat Paulus"], a: 1 },
    { q: "Tanda utama sebelum Anak Manusia muncul (Matius 24)?", o: ["A. Kesusahan dahsyat, matahari dan bulan gelap", "B. Kedamaian dunia", "C. Semua bertobat", "D. Kemiskinan berakhir"], a: 0 },
    { q: "Mengapa Israel jasmani melanggar perjanjian di Gunung Sinai?", o: ["A. Hukum sulit dibaca", "B. Berpaling menyembah berhala dan tidak setia", "C. Allah tidak menyertai", "D. Dipaksa bangsa lain"], a: 1 },
    { q: "Apa yang menjadikan seseorang diakui sebagai anak Allah?", o: ["A. Keturunan", "B. Kelahiran rohani melalui iman dan penerimaan firman Yesus", "C. Kekayaan", "D. Tinggal di Kanaan"], a: 1 },
    { q: "Simbol apa yang dipakai Yesus untuk Perjanjian Baru saat perjamuan?", o: ["A. Roti saja", "B. Cawan anggur yang melambangkan darah-Nya", "C. Minyak urapan", "D. Air pembasuhan"], a: 1 },
    { q: "Apa bahaya jika Kristen tidak mengerti nubuatan?", o: ["A. Tidak bisa jadi pendeta", "B. Berpotensi melanggar perjanjian dan tidak mengenali Yesus saat kedatangan-Nya", "C. Denda materi", "D. Tidak punya pengaruh"], a: 1 },
    { q: "Perbedaan utama pengesahan Perjanjian Lama dan Baru?", o: ["A. Lama dengan darah hewan, Baru dengan darah Kristus", "B. Lama di kertas, Baru di batu", "C. Lama untuk Kristen, Baru untuk Yahudi", "D. Lama tanpa darah"], a: 0 },
    { q: "Mengapa kedatangan Anak Manusia disamakan dengan hari Nuh?", o: ["A. Banjir di Yerusalem", "B. Orang sibuk makan, minum, kawin tanpa sadar hingga kebinasaan tiba", "C. Yesus pakai kapal besar", "D. Hanya 8 orang selamat"], a: 1 },
    { q: "Siapakah 'Keturunan Abraham secara rohani'?", o: ["A. Lahir di Ur-Kasdim", "B. Semua orang beriman dan milik Kristus", "C. Para rabi", "D. Berbahasa Ibrani"], a: 1 },
    { q: "Sikap apa yang harus dimiliki dalam menantikan Tuhan (Wahyu 3:3)?", o: ["A. Menjual harta", "B. Merekam alam", "C. Mengingat firman, menuruti-Nya, bertobat, berjaga-jaga", "D. Memprediksi tanggal"], a: 2 },
    { q: "Akibat menafsirkan binatang 7 kepala 10 tanduk secara harfiah fisik?", o: ["A. Mudah paham", "B. Menganggap firman mustahil karena tidak paham makna kiasannya", "C. Menemukannya di kebun binatang", "D. Dapat wahyu baru"], a: 1 },
    { q: "Kewajiban utama orang Kristen terhadap Perjanjian Baru?", o: ["A. Cukup hafal kitab", "B. Mengerti isi dan nubuatan serta menepatinya hingga Tuhan datang", "C. Simpan sebagai jimat", "D. Mengubah sesuai zaman"], a: 1 }
];