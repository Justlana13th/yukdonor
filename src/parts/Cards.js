import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import { addDoc, collection, getDocs } from 'firebase/firestore';


const Cards = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users')

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };

        getUsers();
    }, [])

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     db.child("users").on("value", (snapshot) => {
    //         if(snapshot.val()!== null){
    //             setData({...snapshot.val()})
    //         } else {
    //             setData({});
    //         }
    //     });

    //     return () => {
    //         setData({});
    //     }
    // }, []);

    return (
        <section className="mb-20 container">
            {users.map((user) => {
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
                })}
                        </section>
    )
}
{/* //             <div className="border-2 shadow-sm w-5/12 items-center pl-2 pt-2 pb-2">
//                 <table className="table-auto">
//                     <tbody className="">
//                         <tr>
//                             <td>Nama</td>
//                             <td>:</td>
//                             <td>Maulana Sobari</td>
//                         </tr>
//                         <tr>
//                             <td>Umur</td>
//                             <td>:</td>
//                             <td>21</td>
//                         </tr>
//                         <tr>
//                             <td>Golongan Darah</td>
//                             <td>:</td>
//                             <td>O</td>
//                         </tr>
//                         <tr>
//                             <td>Provinsi</td>
//                             <td>:</td>
//                             <td>DKI Jakarta</td>
//                         </tr>
//                         <tr>
//                             <td>Kecamatan</td>
//                             <td>:</td>
//                             <td>Tambora</td>
//                         </tr>
//                         <tr>
//                             <td>Alamat</td>
//                             <td>:</td>
//                             <td>Jl. Kalianyar</td>
//                         </tr>
//                         <tr>
//                             <td>Kontak</td>
//                             <td>:</td>
//                             <td>082224133328</td>
//                         </tr>
//                     </tbody>
//                 </table>
// {/*  */}
{/* //                 <div className="py-4 text-center">
//                     <button className="py-2 px-6 bg-donor-strawberry uppercase text-white rounded-full">Hubungi</button>
//                 </div> */}
//             </div> */}


export default Cards
