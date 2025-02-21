import logo from '../../assets/images/logo.png'
import { FaCoins } from "react-icons/fa";

const Navbar = ({coin}) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div><img src={logo} alt="" /></div>
            <div>
                <ul className='flex'>
                    <a><li className='text-gray p-2 mx-2 mx-1'>Fixture</li></a>
                    <a><li className='text-gray p-2 mx-2 mx-1'>Home</li></a>
                    <a><li className='text-gray p-2 mx-2 mx-1'>Teams</li></a>
                    <a><li className='text-gray p-2 mx-2 mx-1'>Schedule</li></a>
                    <button className='font-bold border p-2 mx-1 rounded-md'>{coin} Coin <FaCoins className="mr-2 inline text-yellow-500" /> 
                    </button>
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;