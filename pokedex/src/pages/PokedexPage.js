import { useContext } from "react"
import Header from "../components/Header"
import PokeCard from "../components/PokeCard"
import GlobalStateContext from "../global/GlobalStateContext"

export default function PokedexPage() {

    const { states } = useContext(GlobalStateContext)

    const { pokedex } = states

    const showPokedex = pokedex.map((pokemon) => {
        return (
            <PokeCard key={pokemon.id} pokemon={pokemon}
                actualPage={"pokedexpage"}
            />
        )
    })

    return (
        <main>
            <Header
                actualPage={"pokedexpage"}
            />
           
            {showPokedex}
        </main>

    )

}