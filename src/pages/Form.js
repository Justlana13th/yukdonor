import React from 'react'
import FormPendonor from '../parts/FormPendonor'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import {useEffect} from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(!user){
                navigate('/')
            };
        });
    });

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
