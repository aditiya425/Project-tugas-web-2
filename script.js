const tombol = document.getElementById("btnSimpan");

tombol.addEventListener("click", function(){

    let kode = document.getElementById("kode").value;
    let nama = document.getElementById("nama").value;
    let tgl = document.getElementById("tgl").value;
    let asal = document.getElementById("asal").value;
    let pekerjaan = document.getElementById("pekerjaan").value;

    let mat = parseFloat(document.getElementById("mat").value);
    let ing = parseFloat(document.getElementById("ing").value);
    let umum = parseFloat(document.getElementById("umum").value);

    let jk = document.querySelector('input[name="jk"]:checked');

    // Validasi
    if(
        kode === "" ||
        nama === "" ||
        tgl === "" ||
        asal === "" ||
        isNaN(mat) ||
        isNaN(ing) ||
        isNaN(umum) ||
        jk === null
    ){
        alert("Semua data harus diisi!");
        return;
    }

    jk = jk.value;

    // Hitung rata-rata
    let rata = (mat + ing + umum) / 3;

    // Keterangan
    let ket = "";

    if(rata >= 70){
        ket = "Lulus";
    }
    else if(rata >= 60){
        ket = "Cadangan";
    }
    else{
        ket = "Tidak Lulus";
    }

    // Tempat Tes
    let tempatTes = "";

    if(kode.charAt(0).toUpperCase() === "A"){
        tempatTes = "Gedung A";
    }
    else if(kode.charAt(0).toUpperCase() === "B"){
        tempatTes = "Gedung B";
    }
    else if(kode.charAt(0).toUpperCase() === "V"){
        tempatTes = "Viktor";
    }
    else{
        tempatTes = "Tidak Diketahui";
    }

    // Tambah ke tabel
    let tabel = document.getElementById("tabelData");

    let row = tabel.insertRow();

    row.insertCell(0).innerHTML = kode;
    row.insertCell(1).innerHTML = nama;
    row.insertCell(2).innerHTML = jk;
    row.insertCell(3).innerHTML = tgl;
    row.insertCell(4).innerHTML = asal;
    row.insertCell(5).innerHTML = pekerjaan;
    row.insertCell(6).innerHTML = tempatTes;
    row.insertCell(7).innerHTML = mat;
    row.insertCell(8).innerHTML = ing;
    row.insertCell(9).innerHTML = umum;
    row.insertCell(10).innerHTML = rata.toFixed(2);
    row.insertCell(11).innerHTML = ket;

    alert("Data berhasil disimpan!");

});