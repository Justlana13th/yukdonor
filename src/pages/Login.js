import HealthImage from '../images/health.jpg'
import {useState, useEffect} from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/');
            };
        });
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password).catch((err) => alert(err.message));
        navigate('/')
    }
    

    return (
        <section className="flex relative w-full h-full items-center">
            <div className="w-full text-center">
                <h2 className="uppercase text-2xl text-donor-strawberry font-bold mb-14">Masuk</h2>
                <form>
                    <div>
                        <input className="mb-6 border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry bg-gray-200" placeholder="Email" type="email" onChange={handleEmailChange} value={email}/>
                    </div>
                    <div>
                        <input className="border-2 border-gray-300 rounded-full px-8 py-2 focus:outline-none focus:border-donor-strawberry bg-gray-200" placeholder="Password" type="password"  required onChange={handlePasswordChange} value={password}/>
                    </div>

                    <div>
                        <button type="submit" className="bg-donor-red text-white py-2 px-5 mt-6 mb-3 rounded-full" onClick={handleSignIn} >Login</button>
                    </div>
                    <p className="text-sm">Belum memiliki akun? <Link className="text-donor-strawberry" to="/signup">Daftar</Link></p>
                </form>
            </div>
            <div>
                <img className="relative w-screen h-screen" src={HealthImage} alt="Login" />
            </div>
        </section>
    )
}

export default Login
