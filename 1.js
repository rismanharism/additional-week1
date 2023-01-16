/**
 * Tuliskan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, Sebuah kebun binatang ingin mengganti harga tiketnya. Saat ini, kebun binatang tersebut memiliki HARGA DASAR
 * Rp 10.000. Harga tiket masuk akan disesuaikan dengan umur dari pengunjung tersebut. Kamu diminta untuk membuat program yang akan menghitung
 * harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA dan TAHUN KELAHIRAN.
 *
 * -Umur < 2 tahun: gratis
 * -Umur 2-10:  Harga dasar
 * -Umur 11-18:  Harga dasar dikalikan 1.5
 * -Umur 19 keatas: Harga dasar dikalikan 2
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 * 
 *
 */

// Your algorithm/pseudocode here

let nama = "oni"
let age = 119
    age2 = 2020 - age
let harga = 10_000

if (age2 <= 1900){
    console.log('Invalid Age')
}
else if(age2 >= 2019){
        console.log("gratis")
        }
else if(age2 <= 2018 && age2 >= 2010){
            console.log(`NAMA : ${nama} HARGA TIKET : ${harga}`)
        }
else if(age2 <= 2009 && age2 >= 2002){
                harga *= 1.5
                console.log(`NAMA : ${nama} HARGA TIKET : ${harga}`)
            }
else if(age2 <= 2001 && age2 >= 1900){
    harga *= 2
    console.log(`NAMA : ${nama} HARGA TIKET : ${harga}`)
}
