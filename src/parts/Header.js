import YukDonor from '../images/YukDonor.png';
import {BrowserRouter as Router, Route, Switch} from "react-router";

const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center py-4 mt-4">
                <div>
                    <img src={YukDonor} alt="Logo YukDonor" />
                </div>
                <ul  className="flex gap-10 items-center text-lg">
                    <li>Home</li>
                    <li>List Pendonor</li>
                    <li>Form</li>
                    <li>Tentang</li>
                </ul>
                <div>
                    <button className="py-4 px-8 bg-donor-red text-white rounded-full">Masuk</button>
                </div>
            </div>
        </header>
    )
}

export default Header
