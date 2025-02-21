const Footer = () => {
    return (
        <div className="flex flex-col gap-4 p-16 text-center border mt-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800">Subscribe to our Newsletter</h1>
            <p className="text-lg text-gray-600">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-3 justify-center items-center">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 w-80 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700"
                />
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 transition-all">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Footer;
