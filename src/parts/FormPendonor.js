import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import { db } from '../firebase';
import { useHistory } from 'react-router';

const FormPendonor = () => {

    const [nama, newNama] = useState("")
    const [umur, newUmur] = useState(0)
    const [golonganDarah, newGolonganDarah] = useState("")
    const [provinsi, newProvinsi] = useState([])
    const [kecamatan, newKecamatan] = useState("")
    const [kontak, newKontak] = useState(0)
    const [alamat, newAlamat] = useState("")
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users')
    const history = useHistory();

    const handleSubmit = async () => {
        await addDoc(usersCollectionRef, {nama: nama, umur: umur, golongandarah: golonganDarah, provinsi: provinsi, kecamatan: kecamatan, kontak: kontak, alamat: alamat})

        history.push("/list-pendonor");
    }

    useEffect(() => {
        const getprovinsi = async() => {
            const resprovinsi = await fetch("https://ibnux.github.io/data-indonesia/provinsi.json");
            const resprov = await resprovinsi.json();
            newProvinsi(await resprov);
        }
        getprovinsi();
    },[]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };

        getUsers();
    }, [])

    return (
        <section className="container text-center">
            <form>
                <div>
                <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Nama" type="text" onChange={(event) => {newNama(event.target.value)}} />      
                </div>
                <div>
                <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Umur" type="number" onChange={(event) => {newUmur(event.target.value)}}/>      
                </div>
                <div>
                    <label className='mr-4 text-gray-500'>Golongan Darah</label>
                    <select className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" onChange={(event) => {
                        const selectedGD = event.target.value;
                        newGolonganDarah(selectedGD);
                    }}>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    {/* <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Golongan Darah" type="text" onChange={(event) => {newGolonganDarah(event.target.value)}}/> */}
                </div>
                <div>
                    {/* <label>Provinsi</label>
                    <select>
                        <option value="">Provinsi</option>
                        {
                            provinsi.map((getprov, index) => {
                                <option key={index} value={getprov.provinsi_nama}>{getprov.provinsi_nama}</option>
                            })
                        }
                    </select> */}
                    <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Provinsi" type="text" onChange={(event) => {newProvinsi(event.target.value)}}/>
                </div>
                <div>
                    <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Kecamatan" type="text" onChange={(event) => {newKecamatan(event.target.value)}}/>
                </div>
                <div>
                    <input className="mb-4 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Kontak" type="number" onChange={(event) => {newKontak(event.target.value)}}/>
                </div>
                <div>
                    <input className="border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry" placeholder="Alamat" type="text" onChange={(event) => {newAlamat(event.target.value)}}/>
                </div>


                <div>
                    <button className="py-2 px-5 bg-donor-red rounded-full text-white uppercase mt-6 mb-20" onClick={handleSubmit}>Kirim</button>
                </div>
                   
            </form>

            {/* {users.map((user) => {
                return (

                    <div className="mb-20" key={user.id}>
            <div className="border-2 shadow-sm w-5/12 items-center pl-2 pt-2 pb-2">
                <table className="table-auto">
                    <tbody className="">
                    <tr>
                                            <td>Nama</td>
                                            <td>:</td>
                                            <td>{user.nama}</td>
                                        </tr>
                                        <tr>
                                            <td>Umur</td>
                                            <td>:</td>
                                            <td>{user.umur}</td>
                                        </tr>
                                        <tr>
                                            <td>Golongan Darah</td>
                                            <td>:</td>
                                            <td>{user.golongandarah}</td>
                                        </tr>
                                        <tr>
                                            <td>Provinsi</td>
                                            <td>:</td>
                                            <td>{user.provinsi}</td>
                                        </tr>
                                        <tr>
                                            <td>Kecamatan</td>
                                            <td>:</td>
                                            <td>{user.kecamatan}</td>
                                        </tr>
                                        <tr>
                                            <td>Kontak</td>
                                            <td>:</td>
                                            <td>{user.kontak}</td>
                                        </tr>
                                        <tr>
                                            <td>Alamat</td>
                                            <td>:</td>
                                            <td>{user.alamat}</td>
                                        </tr>
                    </tbody>
                </table>
        </div>
                    </div>
                )
            })} */}
        </section>
    )
}

export default FormPendonor
