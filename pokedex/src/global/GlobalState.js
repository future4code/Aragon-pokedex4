import axios from "axios"
import { useState } from "react"
import { limit } from "../constants/pagination"
import { BASE_URL } from "../constants/url"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) =>{
    const [pokeList, setPokeList] = useState([])

    const [pokemon, setPokemon] = useState({})

    const [pokemons, setPokemons] = useState([])

    const [pokedex, setPokedex] = useState([])

    const [page,setPage] = useState(1)

    const [isLoading,setIsLoading] = useState(false)
    
    const [sortBy, setSortBy] = useState([])

    const getPokeList = (actualPage) => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/list?limit=${limit}&offset=${limit*(actualPage - 1)}`)
        .then((response) => {
            setPokeList(response.data)
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error.message)
            setIsLoading(false)
        })
    }

    const getPokeDetails = (pokename) =>{
        setIsLoading(true)
        axios
        .get(`${BASE_URL}/${pokename}`)
        .then((res) =>{
            setPokemon(res.data)
            setIsLoading(false)
        })
        .catch((err) =>{
            alert(err.message)
            setIsLoading(false)
        })
    }

    
    const getAllPokeDetails = () =>{

        const newList = []

        pokeList.forEach((pokemon)=>{

            setIsLoading(true)

            axios.get(`${BASE_URL}/${pokemon.name}`)
            .then((response)=>{
                newList.push(response.data)
                if(newList.length === 20){
                    const orderedList = newList.sort((a,b)=>{
                        return a.id - b.id;
                    })
                    setPokemons(orderedList)
                    setIsLoading(false)
                }
            }) 
            .catch((error)=>{
                console.log(error.message)
                setIsLoading(false)
            })
        })
    }


    const states = {pokeList, pokemon, pokemons, pokedex,page,isLoading,sortBy}
    const setters = {setPokeList, setPokemon, setPokemons, setPokedex, setIsLoading, setPage,setSortBy}
    const getters = {getPokeList, getPokeDetails, getAllPokeDetails}

    return(
        
        <GlobalStateContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState