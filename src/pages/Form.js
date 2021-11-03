import React from 'react'
import FormPendonor from '../parts/FormPendonor'
import Header from '../parts/Header'
import Footer from '../parts/Footer'

const Form = () => {
    return (
        <div>
            <Header/>
            <div>
                <h2 className="font-bold text-center uppercase text-donor-black mt-12 mb-12">isi formulir di bawah</h2>
            </div>
            <FormPendonor/>
            <Footer/>
        </div>
    )
}

export default Form
