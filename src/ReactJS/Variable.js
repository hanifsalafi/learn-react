import React from 'react'

let hargaBarang = 3000;
hargaBarang = 3000+5000;

const Variable = () => {
    return (
        <div>
            <h3>Belajar Variable</h3>
            <p>Pendataan Barang</p>  
            <p>Harga Barang = {hargaBarang} rupiah</p>         
        </div>
    )
}

export default Variable