import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import GlobalStateContext from "../global/GlobalStateContext"
import styled from "styled-components"

const Main = styled.main `
    background-color: #F2CB07;
    text-align: center;
    color: blue;
    width: 20vw;
    margin: auto;
    border-radius: 5px;

    h2{
        color: black;
    }
`

const Figure = styled.figure `
    background-color: #F2CB07;
    text-align: center;
    width: 20vw;
    height: 300px;
    margin: auto;
    border-radius: 8px;

    img{
        height: 200px;
    }
  

`

export default function PokeDetailsPage() {

    const params = useParams()

    const {states, getters} = useContext(GlobalStateContext)

    const {pokemon} = states

    const { getPokeDetails } = getters

    useEffect(() =>{
        getPokeDetails(params.pokeName)
    },[])

    const pokeDetail = pokemon.name ? (
        <Main>
            <Figure>
                <h2>
                    {pokemon.name.toUpperCase()}
                </h2>
                <img className="img" src={pokemon.images.front} alt={`${pokemon.name} de frente`} />
                {/* <img src={pokemon.images.back} alt={`${pokemon.name} de costas`} /> */}
            </Figure>
            <section>
                <h2>Status:</h2>

                {pokemon.status.map((stat) =>{
                    return (
                        <div key={stat["status_name"]}>
                            <span>{stat["status_name"].toUpperCase()}:</span>
                            <span>{stat.value}</span>
                            <br />
                        </div>
                    )
                })}
            </section>
            <section>
                <h2>Tipos:</h2>

                {pokemon.types.map((type)=>{
                    return(
                        <li key={type}>{type}</li>
                    )
                })}
            </section>
            <section>
                <h2>Habilidades:</h2>
                {pokemon.abilities.filter((ability, index) =>{
                    if (index <5) {
                        return ability
                    }
                }).map((ability) =>{
                    return (
                        <li key={ability}>{ability}</li>
                    )
                })}
            </section>

        </Main>
    ): <p>Carregando...</p>

    return (
        <main>
            <div>
            <Header
                actualPage={"pokedetailspage"}
            />
            <h1 className="Title">Pokémon Selecionado</h1>
            {pokeDetail}
            </div>
        </main>

    )

}