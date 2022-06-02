import Header from "../components/Header"
import PokeCard from "../components/PokeCard"
import GlobalStateContext from "../global/GlobalStateContext"
import { useContext, useEffect } from "react"


function PokeListPage() {

    const { states, getters, setters } = useContext(GlobalStateContext)

    const { pokeList, pokemons, pokedex, page, isLoading } = states

    const { getPokeList, getAllPokeDetails } = getters
    const { setPage } = setters
    useEffect(() => {
        if (!pokeList.length) {
            getPokeList()
        } else {
            getAllPokeDetails()
        }

    }, [pokeList]);

    const changePage = (sum) => {
        const nextPage = page + sum
        setPage(nextPage)
        getPokeList(nextPage)
    }

    const showPokeList = pokemons[0] && !isLoading ?
        pokemons.filter((pokemon) => {
            for (let poke of pokedex) {
                if (poke.id === pokemon.id) {
                    return false
                }
            }
            return true
        })
            .map((pokemon) => {
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
            <br />
            <nav>
                <h2>Selecione uma pagina</h2>
                {page !== 1 &&
                    <button onClick={() => changePage(-1)}>Voltar Página</button>
                }
                <span>Página {page}</span>
                {pokeList.length &&
                    <button onClick={() => changePage(1)} >Proxima página</button>
                }
            </nav>
            {showPokeList}
        </main>
    )
}

export default PokeListPage