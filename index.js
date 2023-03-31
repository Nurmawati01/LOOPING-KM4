// soal no 1

for (let i = 1; i <= 100; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(`User ke - ${i}`);
    li.appendChild(text);
    document.getElementById("userList").appendChild(li);
}

// // Soal no 2

let nilai = 0;
for (let i = 1; i <= 10; i++) {
    nilai += 2;
    console.log(`Hasil tambah perulangan ke-${i}: ${nilai}`);
}

// // soal no 3

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} adalah bilangan genap`);
    } else {
        console.log(`${i} adalah bilangan ganjil`);
    }
}

// // soal no 4

let count = 0;
while (true) {
    let result = confirm("Apakah Anda mau mengulang?");
    if (result) {
        count++;
        continue;
    } else {
        alert(`Perulangan sudah dilakukan sebanyak ${count} kali.`);
        break;
    }
}