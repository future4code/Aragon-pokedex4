import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/url"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) =>{
    const [pokeList, setPokeList] = useState([])

    const [pokemon, setPokemon] = useState({})

    const [pokemons, setPokemons] = useState([])

    const [pokedex, setPokedex] = useState([])

    const getPokeList = () => {
        axios.get(`${BASE_URL}/list?limit=20&offset=0`)
        .then((response) => {
            setPokeList(response.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

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

    const getAllPokeDetails = () =>{
        const newList = []
        pokeList.forEach((pokemon)=>{
            axios.get(`${BASE_URL}/${pokemon.name}`)
            .then((response)=>{
                newList.push(response.data)
                if(newList.length === 20){
                    const orderedList = newList.sort((a,b)=>{
                        return a.id - b.id;
                    })
                    setPokemons(orderedList)
                }
            }) 
            .catch((error)=>{
                console.log(error.message)
            })
        })
    }


    const states = {pokeList, pokemon, pokemons, pokedex}
    const setters = {setPokeList, setPokemon, setPokemons, setPokedex}
    const getters = {getPokeList, getPokeDetails, getAllPokeDetails}

    return(
        <GlobalStateContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState