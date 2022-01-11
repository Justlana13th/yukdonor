import React from 'react'
import Cards from '../parts/Cards'
import Dropdown from '../parts/Dropdown'
import Footer from '../parts/Footer'
import Header from '../parts/Header'

const ListPendonor = () => {
    return (
        <div>
            <Header/>
            {/* <Dropdown/> */}
            <div className='flex justify-items-center'>
                <Cards/>
            </div>
            <Footer/>
        </div>
    )
}

export default ListPendonor
