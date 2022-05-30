import Header from "../components/Header"
import PokeCard from "../components/PokeCard"
import useRequestData from "../hooks/useRequestData"


export default function PokeListPage() {

    const [pokeList] = useRequestData("list?limit=20&offset=0", [])

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