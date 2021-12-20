import React from 'react'

const Cards = () => {
    return (
        <section className="mb-20 container">
            <div className="border-2 shadow-sm w-5/12 items-center pl-2 pt-2 pb-2">
                <table className="table-auto">
                    <tbody className="">
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td>Maulana Sobari</td>
                        </tr>
                        <tr>
                            <td>Umur</td>
                            <td>:</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>Golongan Darah</td>
                            <td>:</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>Provinsi</td>
                            <td>:</td>
                            <td>DKI Jakarta</td>
                        </tr>
                        <tr>
                            <td>Kecamatan</td>
                            <td>:</td>
                            <td>Tambora</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>:</td>
                            <td>Jl. Kalianyar</td>
                        </tr>
                        <tr>
                            <td>Kontak</td>
                            <td>:</td>
                            <td>082224133328</td>
                        </tr>
                    </tbody>
                </table>
{/* 
                <div className="py-4 text-center">
                    <button className="py-2 px-6 bg-donor-strawberry uppercase text-white rounded-full">Hubungi</button>
                </div> */}
            </div>
        </section>
    )
}

export default Cards
