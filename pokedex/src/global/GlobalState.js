import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/url"
import useRequestData from "../hooks/useRequestData"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) =>{
    const [pokeList, getPokeList] = useRequestData("list?limit=20&offset=0", []) 


    const [pokemon, setPokemon] = useState({})

    const getPokeDetails = (pokename) =>{
        axios
        .get(`${BASE_URL}/${pokename}`)
        .then((res) =>{
            setPokemon(res.data)
        })
        .catch((err) =>{
            alert(err.message)
        })
    }

    const states = {pokeList, pokemon}
    const setters = { setPokemon}
    const getters = {getPokeList, getPokeDetails}

    return(
        <GlobalStateContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState