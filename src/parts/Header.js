import YukDonor from '../images/YukDonor.png';
import {Link} from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {createContext, useContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';


const AuthContext = createContext({
    currentUser: null,
  })

export const useAuth = () => useContext(AuthContext)

const Header = () => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
          setCurrentUser(user ? user : null)
        })
        return () => {
          unsubscribe()
        }
      }, [])

    const handleSignOut = () => {
        signOut(auth).catch((err) => {
            alert(err.message);
        });
    };

    return (
        <header>
            <div className="flex justify-between items-center py-4 mt-4 container">
                <div>
                    <img className="w-3/5 h-3/5" src={YukDonor} alt="Logo YukDonor" />
                </div>
                <ul  className="flex gap-10 items-center text-md">
                
                        <Link className="hover:text-donor-strawberry" to="/">Home</Link>
                        <Link className="hover:text-donor-strawberry" to="/list-pendonor">List Pendonor</Link>
                        <Link className="hover:text-donor-strawberry" to="/form">Form</Link>
                        {/* <li className="cursor-pointer"><Link To="/list-pendonor">List Pendonor</Link></li>
                        <li path="/form">Form</li>
                        <li className="cursor-pointer" path="/tentang">Tentang</li> */}
                    </ul>

                        {
                            currentUser ? <button className="py-2 px-4 bg-donor-red hover:bg-donor-strawberry transition duration-200 text-white rounded-full uppercase" onClick={handleSignOut}>Log Out</button> : <Link to="/login">
                            <button className="py-2 px-4 bg-donor-red hover:bg-donor-strawberry transition duration-200 text-white rounded-full uppercase">Masuk</button>
                            </Link>
                        }
                        


                    {/* <div>
                        {(() => {
                            if(currentUser){
                                <button className="py-2 px-4 bg-donor-red hover:bg-donor-strawberry transition duration-200 text-white rounded-full uppercase" onClick={handleSignOut}>Log Out</button>
                            } else {
                                <Link to="/login">
                        <button className="py-2 px-4 bg-donor-red hover:bg-donor-strawberry transition duration-200 text-white rounded-full uppercase">Masuk</button>
                        </Link>
                            }
                        })}
                    </div> */}
                        
                     {/* if(!user) {
                        <div>
                        <button className="py-2 px-4 bg-donor-red hover:bg-donor-strawberry transition duration-200 text-white rounded-full uppercase" onClick={handleSignOut}>Log Out</button>
                        </div>
                    } else {
                        <div>
                        <Link to="/login">
                        <button className="py-2 px-4 bg-donor-red hover:bg-donor-strawberry transition duration-200 text-white rounded-full uppercase">Masuk</button>
                        </Link>
                        </div>
                    }
                     */}
                

                    
            </div>
            </header>
    )
}

export default Header
