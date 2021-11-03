import React from 'react'
import HeroPict from '../images/heropict.png';

const Hero = () => {
    return (
        <section className="mt-20 container">
            <div className="container flex items-center mx-auto gap-10">
                <div className="">
                    <h2 className="text-donor-black font-extrabold text-5xl mb-5">Donor <span className="text-donor-red">Darah</span>, <br />Selamatkan Nyawa</h2>
                    <p className="text-gray-400 text-md text-left">YukDonor adalah sebuah platform digital yang dibuat untuk memudahkan masyarakat dalam mencari <br /> sukarelawan yang berada di wilayahnya</p>
                    <div>
                        <button className="text-white uppercase bg-donor-red py-3 px-8 rounded-full mt-12">Cari Pendonor</button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img className="w-4/5" src={HeroPict} alt="Hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero
