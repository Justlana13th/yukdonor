import React from 'react'

const FormPendonor = () => {
    return (
        <section className="container text-center">
            <form action="POST">
                <div>
                <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Nama" type="text" />      
                </div>
                <div>
                    <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Golongan Darah" type="text" />
                </div>
                <div>
                    <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Provinsi" type="text" />
                </div>
                <div>
                    <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Kecamatan" type="text" />
                </div>
                <div>
                    <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Kontak" type="number" />
                </div>
                <div>
                    <input className="border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Alamat" type="text" />
                </div>


                <div>
                    <button className="py-2 px-5 bg-donor-red rounded-full text-white uppercase mt-6 mb-20">Kirim</button>
                </div>
                   
            </form>
        </section>
    )
}

export default FormPendonor
