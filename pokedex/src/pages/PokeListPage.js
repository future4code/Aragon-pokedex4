import Header from "../components/Header"
import PokeCard from "../components/PokeCard"
import GlobalStateContext from "../global/GlobalStateContext"
import { useContext, useEffect } from "react"


export default function PokeListPage() {

    const {states, getters} = useContext(GlobalStateContext)

    const {pokeList, pokemons} = states

    const { getPokeList, getAllPokeDetails } = getters

    useEffect(() =>{
        if(!pokeList.lenght){
            getPokeList()
        } else{
            getAllPokeDetails()
        }
        
    },[pokeList]);
 
    

    const showPokeList = pokemons[0] ?
        pokemons.map((pokemon) => {
            return (
                < PokeCard
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            )
        }) : <p>Carregando...</p>
    return (
        <main>
            <Header
                actualPage={"pokelistpage"}
            />
            <h1>pokeList Page</h1>
            {showPokeList}
        </main>
    )
}