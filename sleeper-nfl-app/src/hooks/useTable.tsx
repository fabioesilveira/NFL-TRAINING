import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from "../types/player";

export function useTable() {

    const [data, setData] = useState<Player[] | null>(null);
    const [searchPlayer, setSearchPlayer] = useState("")

    useEffect(() => {
        async function fetchApi() {
            try {
                const req = await axios.get("https://api.sleeper.app/v1/players/nfl")
                const getPlayers = Object.values(req.data)
                const fifteenPlayers = getPlayers.slice(0, 14) as Player[];
                console.log(fifteenPlayers)
                setData(fifteenPlayers)
            } catch (error) {
                console.error("Error to load", error)
            }
        }
        fetchApi()
    }, [])

    const filteredPlayers = data?.filter((e) =>
        `${e.full_name}`.toLowerCase().includes(searchPlayer.toLowerCase())
    );

    return {
        data,
        setData,
        searchPlayer,
        setSearchPlayer,
        filteredPlayers
    }
}