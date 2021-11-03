import React from 'react'
import HealthImage from '../images/health.jpg'
import {Link} from 'react-router-dom'

const SignUp = () => {
    return (
        <section className="flex relative w-full h-full items-center">
            <div className="w-full text-center">
                <h2 className="uppercase text-2xl text-donor-strawberry font-bold mb-14">Buat Akun</h2>
                <form action="POST">
                    <div>
                        <input className="mb-6 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry bg-gray-200" placeholder="Nama" type="text" />
                    </div>
                    <div>
                        <input className="mb-6 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry bg-gray-200" placeholder="Email" type="text" />
                    </div>
                    <div>
                        <input className="border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry bg-gray-200" placeholder="Password" type="password" />
                    </div>

                    <div>
                        <button className="bg-donor-red text-white py-2 px-5 mt-6 mb-3 rounded-full">Register</button>

                        <p className="text-sm">Sudah memiliki akun? <Link className="text-donor-strawberry" to="/login">Log in</Link></p>
                    </div>
                </form>
            </div>
            <div>
                <img className="relative w-screen h-screen" src={HealthImage} alt="Login" />
            </div>
        </section>
    )
}

export default SignUp
