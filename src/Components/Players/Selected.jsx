const Selected = ({choosePlayer,handleAvailable,handleDeleteSelected}) => {
    
    return (
        <div> 
            {choosePlayer.map((player) => (
                <div className="flex justify-between p-5 border rounded-lg mb-4">
                    <div className="flex items-center gap-4">
                        <img className="w-28 h-28 object-cover rounded-lg" src={player.image} alt="" />
                        <div>
                            <h2 className="font-bold text-2xl">{player.name}</h2>
                            <p className="opacity-50">{player.style}</p>
                        </div>
                    </div>
                    <button onClick={() => handleDeleteSelected(player)}>❌</button>
                </div>
                
            ))}
            <button onClick={handleAvailable} className="relative z-10 m-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">Add More Player</button>
            
        </div>
    );
};

export default Selected;