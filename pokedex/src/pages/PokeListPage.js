import Header from "../components/Header"
import PokeCard from "../components/PokeCard"
import GlobalStateContext from "../global/GlobalStateContext"
import { useContext, useEffect } from "react"


export default function PokeListPage() {

    const {states, getters} = useContext(GlobalStateContext)

    const {pokeList} = states

    const { getPokeList } = getters

    useEffect(() =>{
        getPokeList()
    },[])
 
    

    const showPokeList = pokeList[0] ?
        pokeList.map((pokemon) => {
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