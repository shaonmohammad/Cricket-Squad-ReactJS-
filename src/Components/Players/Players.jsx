import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Players = ({coin,setCoin}) => {
    
    const [players, setPlayers] = useState([])
    const [available, setAvailable] = useState(true)
    const [selected, setSelected] = useState(false)
    const [choosePlayer, setChoosePlayer] = useState([])
    
    const handleDeleteSelected = (player) => {
        const newPlayer = choosePlayer.filter(plr => plr != player)
        setChoosePlayer(newPlayer)

        toast.success("Player ❌ Delete successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    });

    }

    const handleChoosePlayer = (player) => {
        const isPlayerExist = choosePlayer.some(plr => plr == player)

        if (isPlayerExist) {
            toast.error("❌ Player Already Selected!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            });
        }
        else if(coin >= player.price) {
                const newPlayer = [...choosePlayer, player] 
                setChoosePlayer(newPlayer)
                setCoin(coin-player.price)

                toast.success("Player added successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    });
        } 
        else {
            toast.error("❌ Insufficient Balance!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            })
        }
        
    }
    

    const handleAvailable = () => {
        setAvailable(true)
        setSelected(false)
    }
    const handleSelected = () => {
        setAvailable(false)
        setSelected(true)
    }

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    
    return (
        
        <div className="mt-12">
            
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-1xl md:text-2xl font-extrabold">Available Players ({players.length-choosePlayer.length}/{players.length})</h1>
                <div>
                    <button onClick={handleAvailable} className={`border px-4 py-2 font-bold ${available?"bg-yellow-500":"bg-gray-300"}`}>Available</button>
                    <button onClick={handleSelected} className={`border px-4 py-2 font-bold ${selected?"bg-yellow-500":"bg-gray-300"}`}>Selected({choosePlayer.length})</button>
                </div>
            </div>
            <div >
                {available ? 
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 mx-2 ">
                        {players.map((player) => (
                            <Player key={player.id}  player={player} handleChoosePlayer={handleChoosePlayer} />
                        ))}
                    </div>
                :
                    <div className="m-5">
                        {choosePlayer.length > 0 ? (
                            <Selected handleDeleteSelected={handleDeleteSelected} choosePlayer={choosePlayer} handleAvailable={handleAvailable} />
                        ) : (
                            <div className="mt-20"><p className="text-center text-4xl">No selected players</p></div>
                        )}
                    </div>
                }
           </div>
            
        </div>
    );
};

export default Players;