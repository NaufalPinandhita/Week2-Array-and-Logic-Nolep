let input = ["0001", 
    "Roman Alamsyah ", 
    "Bandar Lampung", 
    "21/05/1989", 
    "Membaca"];

function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.pop();
    input.push("Pria", "SMA Internasional Metro")
    console.log (input);

    console.log ("Mei");
    
    let tanggal = input[3].split('/');
    console.log ([tanggal[2], tanggal[0], tanggal[1]]);
    console.log (tanggal.join('-'));

    console.log (input[1].slice(0, 15));
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */