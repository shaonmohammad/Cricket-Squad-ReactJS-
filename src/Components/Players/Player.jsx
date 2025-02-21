import { FaFlag } from "react-icons/fa";


const Player = ({ player,handleChoosePlayer,handleBuyPlayer }) => {
    const { name, image, country, designation, rating, style, price } = player;
    return (
        <div className="border p-4 rounded-lg">
          
            <img className="h-80 object-cover rounded-lg" src={image} alt="" />
            <h2 className="text-2xl font-bold mt-4">{name}</h2>
            <div className="flex justify-between items-center mt-1 mb-3">
                <p className="opacity-50 flex items-center"><FaFlag className="text-gray-500 mr-2" />{country}</p>
                <p className="border px-4 py-2 bg-gray-200 rounded-lg">{designation}</p>
            </div>
            < hr />
            <p className="mt-2">{rating}⭐</p>
            <div className="flex justify-between items-center mt-2">
                <p className="font-bold">{style}</p>
                <p className="opacity-50">{style}</p>
            </div>
            <div className="flex justify-between items-center mt-2 font-bold">
                <p>Price: ${price}</p>
                <button onClick={() => { handleChoosePlayer(player); handleBuyPlayer(player)}} className="px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:from-blue-500 hover:to-purple-500">
                🎯 Choose Player
                </button>

            </div>
        </div>
    );
};

export default Player;