import React from 'react'

const Dropdown = () => {
    return (
        <div className="flex justify-center items-center gap-4 mb-7">
            <div className="mt-20 flex justify-center gap-5">
                <button className="px-5 flex gap-5 items-center text-left border-2 bg-white shadow-sm uppercase"><p>Golongan Darah</p>
                <span className="border-l flex justify-items-center"><svg className="w-5 h-5 ml-2" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2746 1.50717L13.0538 21.0288L1.758 1.55046L24.2746 1.50717Z" fill="white" stroke="black" stroke-width="2"/>
</svg>
</span>
                </button>
            </div>
            <div className="mt-20 flex justify-center gap-5">
                <button className="px-5 flex gap-5 items-center text-left border-2 bg-white shadow-sm uppercase"><p>Pilih Kota</p>
                <span className="border-l flex justify-items-center"><svg className="w-5 h-5 ml-2" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2746 1.50717L13.0538 21.0288L1.758 1.55046L24.2746 1.50717Z" fill="white" stroke="black" stroke-width="2"/>
</svg>
</span>
                </button>
            </div>
        </div>
    )
}

export default Dropdown
