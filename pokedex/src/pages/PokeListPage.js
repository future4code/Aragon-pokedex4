import Header from "../components/Header"
import PokeCard from "../components/PokeCard"
import GlobalStateContext from "../global/GlobalStateContext"
import { useContext, useEffect, useState } from "react"
import loadingGif from "../loading.gif"

function PokeListPage() {

    const { states, getters, setters } = useContext(GlobalStateContext)

    const { pokeList, pokemons, pokedex, page, isLoading } = states

    const { getPokeList, getAllPokeDetails } = getters
    const { setPage } = setters

    const [order, setOrder] = useState("")

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


    const sortedShowPokeList = () => {
        
        let showPokeList = [...pokemons]
        if (order) {
            console.log(showPokeList)
            showPokeList.sort((a, b) => {
                if (order === "asc") {
                    return a.name.localeCompare(b.name)
                } else {
                    return b.name.localeCompare(a.name)
                }
            })
        }

        showPokeList = pokemons[0] && !isLoading ?
            showPokeList.filter((pokemon) => {
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
                }) : <img src={loadingGif} alt={"pikachu batendo bola"} />


        return showPokeList
    }

    return (
        <main>
            <Header
                actualPage={"pokelistpage"}
            />
            <br />
            <select onChange={(e) => setOrder(e.target.value)} >
                <option value={""} >Ordem Numérica</option>
                <option value={"asc"} >A-Z</option>
                <option value={"desc"} >Z-A</option>
            </select>
            <nav>
                <h2 className="Title">Pesquise Pokémons!</h2>
                {page !== 1 &&
                    <button onClick={() => changePage(-1)}>Voltar</button>
                }
                <span className="pagina">Página {page}</span>
                {pokeList.length &&
                    <button onClick={() => changePage(1)} >Próxima</button>
                }
            </nav>
            {sortedShowPokeList()}
        </main>
    )
}

export default PokeListPage