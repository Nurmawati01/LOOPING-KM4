<h1>Penjelasan Program</h1>

<h2>Soal 1</h2>
<p>Pertama-tama, kita membuat sebuah for loop yang akan berjalan dari 1 sampai dengan 100.<br>
Setiap kali loop berjalan, kita membuat sebuah variabel userText yang berisi teks 'User ke - i', dimana i adalah nilai dari variabel loop saat ini.<br>
Selanjutnya, kita membuat sebuah elemen list (li) dan sebuah text node yang berisi teks dari variabel userText.
Kita menyisipkan text node ke dalam li element menggunakan metode appendChild.<br>
Terakhir, kita menyisipkan li element ke dalam ul element dengan id 'user-list' di dalam body HTML.</p>

<h2>Soal 2</h2>
<p>Pertama-tama, kita membuat sebuah variabel nilai yang bernilai 0 sebagai nilai awal.<br>
Selanjutnya, kita membuat sebuah for loop yang akan berjalan sebanyak 10 kali.<br>
Setiap kali loop berjalan, kita menambahkan nilai variabel nilai sebesar 2 menggunakan operator +=.<br>
Kita membuat sebuah variabel nilaiText yang berisi teks 'Nilai setelah pengulangan ke-i: nilai', dimana i adalah nilai dari variabel loop saat ini dan nilai adalah nilai saat ini dari variabel nilai.<br>
Selanjutnya, kita membuat sebuah elemen list (li) dan sebuah text node yang berisi teks dari variabel nilaiText.<br>
Kita menyisipkan text node ke dalam li element menggunakan metode appendChild.<br>
Terakhir, kita menyisipkan li element ke dalam ul element dengan id 'nilai-list' di dalam body HTML.</p>

<h2>Soal 3<h2>
<p>Pertama-tama, kita membuat sebuah for loop yang akan berjalan dari 0 sampai dengan 20.<br>
Setiap kali loop berjalan, kita membuat sebuah variabel nilaiText yang berisi teks nilai saat ini ditambah dengan teks 'adalah '.<br>
Selanjutnya, kita melakukan pengecekan apakah nilai saat ini ganjil atau genap menggunakan operator %. Jika nilai saat ini dapat dibagi dua tanpa sisa, maka nilai tersebut genap, dan kita menambahkan teks 'genap' ke dalam variabel nilaiText. Jika tidak, maka nilai tersebut ganjil, dan kita menambahkan teks 'ganjil' ke dalam variabel nilaiText.<br>
Kita membuat sebuah elemen list (li) dan sebuah text node yang berisi teks dari variabel nilaiText.<br>
Kita menyisipkan text node ke dalam li element menggunakan metode appendChild.<br>
Terakhir, kita menyisipkan li element ke dalam ul element dengan id 'nilai-list' di dalam body HTML.</p>

<h2>Soal 4</h2>
<p>Pertama-tama, kita membuat sebuah variabel counter yang akan digunakan untuk menghitung jumlah kali user menekan tombol OK pada pop up konfirmasi.<br>
Selanjutnya, kita membuat sebuah variabel userConfirm dengan nilai awal true, yang akan kita gunakan sebagai kondisi untuk melakukan perulangan.<br>
Di dalam perulangan, kita menggunakan confirm() untuk menampilkan pop up konfirmasi kepada user dengan teks 'Apakah Anda mau mengulang?'.<br>
Jika user memilih OK, maka kita akan menambahkan 1 pada nilai variabel counter.<br>
Jika user memilih Cancel, maka kondisi perulangan akan menjadi false dan kita keluar dari perulangan.<br>
Setelah keluar dari perulangan, kita menggunakan alert() untuk menampilkan teks 'Perulangan sudah dilakukan sebanyak (jumlah klik OK yang dilakukan user)' dengan menggunakan nilai dari variabel counter.</p>

<h2>Soal 5</h2>
<p>Pertama-tama, kita membuat sebuah variabel correctAnswer yang berisi jawaban yang benar dari kuis.<br>
Selanjutnya, kita menggunakan prompt() untuk menampilkan pop up inputan kepada user dengan teks 'Sebutkan kepanjangan dari nama IB (Impact Byte)?'. Inputan dari user disimpan pada variabel userAnswer.<br>
Di dalam perulangan, kita menggunakan kondisi while untuk mengecek apakah userAnswer sama dengan correctAnswer.<br>
Jika userAnswer tidak sama dengan correctAnswer, kita akan menampilkan kembali pop up inputan dengan teks 'Jawabanmu salah. Coba lagi: Sebutkan kepanjangan dari nama IB (Impact Byte)?' dan mengambil inputan dari user kembali dengan prompt().<br>
Jika userAnswer sama dengan correctAnswer, kita keluar dari perulangan dan menampilkan pop up alert dengan teks 'Selamat jawabanmu benar!'.</p>