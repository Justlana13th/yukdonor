import YukDonor from '../images/YukDonor.png';
import {Link} from "react-router-dom";

const Header = () => {
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
                    <div>
                        <Link to="/signup">
                        <button className="py-2 px-4 bg-donor-red hover:bg-donor-strawberry transition duration-200 text-white rounded-full uppercase">Masuk</button>
                        </Link>
                    </div>
                    
            </div>
            </header>
    )
}

export default Header
