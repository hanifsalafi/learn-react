import React from 'react'

const pakaian = [
    {
        nama: "Kaos polos",
        harga: 45000
    },
    {
        nama: "Kemeja",
        harga: 75000
    },
    {
        nama: "Jaket",
        harga: 100000
    },
    {
        nama: "Celana",
        harga: 85000
    },
    
]

// REDUCE
const total_bayar = pakaian.reduce((total_harga, baju) => {
    return total_harga+baju.harga;
}, 0);

const Map = () => {
    return (
        <div>
            <h2>Simple Map</h2>
            <ul>
                { pakaian.map((baju, index) => (
                    <li>{index+1}. {baju.nama} - {baju.harga}</li>
                ))}
            </ul>

            <h2>Map Filter</h2>
            <ul>
                { pakaian.filter((pakaian) => pakaian.harga > 80000).map((baju, index) => (
                    <li>{index+1}. {baju.nama} - {baju.harga}</li>
                ))}
            </ul>

            <h2>Reduce</h2>
            <h3>Total harga = {total_bayar}</h3>
        </div>
    )
}

export default Map
