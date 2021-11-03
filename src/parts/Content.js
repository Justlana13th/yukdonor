import React from 'react'

const Content = () => {
    return (
        <section className="mt-28 mb-40 container">
            <div className="flex items-center justify-around">
                <div>
                    <div className="py-4 px-7 bg-donor-yellow rounded-3xl mb-6 inline-flex">
                        <h1 className="font-bold text-3xl text-donor-dark-yellow">1</h1>
                    </div>
                    <h3 className="uppercase font-semibold ">Temukan</h3>
                    <p className="text-gray-400 mt-5">Cek menu List Pendonor, dan temukan <br /> sukarelawan yang berada di dekatmu</p>
                </div>

                <div>
                    <div className="py-4 px-7 bg-donor-green rounded-3xl inline-flex mb-6">
                        <h1 className="font-bold text-3xl text-donor-dark-green">2</h1>
                    </div>
                    <h3 className="uppercase font-semibold ">Hubungi</h3>
                    <p className="text-gray-400 mt-5">Lalu, hubungi kontak sukarelawan yang <br /> tertera di card untuk info lebih lanjut</p>
                </div>
                
                <div>
                    <div className="py-4 px-7 bg-donor-pink rounded-3xl inline-flex mb-6">
                        <h1 className="font-bold text-3xl text-donor-dark-pink">3</h1>
                    </div>
                    <h3 className="uppercase font-semibold ">Donorkan</h3>
                    <p className="text-gray-400 mt-5">Donorkan darahmu dan mulailah <br /> membantu orang yang membutuhkan</p>
                </div>
                
            </div>
        </section>
    )
}

export default Content
