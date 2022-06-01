import Header from "../components/Header"
import PokeCard from "../components/PokeCard"
import GlobalStateContext from "../global/GlobalStateContext"
import { useContext, useEffect } from "react"


 function PokeListPage() {

    const {states, getters} = useContext(GlobalStateContext)

    const {pokeList, pokemons} = states

    const { getPokeList, getAllPokeDetails } = getters

    useEffect(() =>{
        if(!pokeList.length){
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
                    actualPage={"pokelistpage"}
                />
            )
        }) : <p>Carregando...</p>
    return (
        <main>
            <Header
                actualPage={"pokelistpage"}
            />
            <br/>
            {showPokeList}
        </main>
    )
}

export default PokeListPage