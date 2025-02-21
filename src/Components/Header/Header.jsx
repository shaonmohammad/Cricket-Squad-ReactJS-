import banner from '../../assets/images/banner-main.png'

const Header = ({handleCoin}) => {
    return (
        <div className='border flex flex-col justify-center items-center py-28 gap-3 mt-5 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white overflow-hidden'>
            <img src={banner} alt="" />
            <h1 className='font-extrabold text-4xl text-center mx-1'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-xl text-yellow-200'>Beyond Boundaries Beyond Limits</p>
            <div className='border border-yellow-500 rounded-lg'>
                <button onClick={handleCoin} className="relative z-10 m-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Claim Free Credit
            </button>
           </div>
        </div>
    );
};

export default Header;