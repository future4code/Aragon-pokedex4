import { useNavigate } from "react-router-dom"
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator"
import styled from "styled-components"

const Button = styled.button `
    width: 10vw;
    background-color: #F2CB07;
    border-radius: 6px;
    padding: 6px;

    &:hover{
            cursor: pointer;
            transition: .3s ease-in-out;
            border-bottom: 1px solid ;
            background-color: yellow;
            color: rgb(31, 31, 138);
        }
`


export default function Header(props) {

    const navigate = useNavigate()

    const renderHeader = () => {
        switch (props.actualPage) {
            case "pokelistpage":
                return (
                    <section>
                        <h1 className="pokemon"></h1>
                        <nav>
                            <button onClick={() => goToPokedexPage(navigate)} >Ir para pokedex</button>
                        </nav>
                    </section>
                )
            case "pokedexpage":
                return (
                    <section >
                        <h1 className="imagemPokedex"></h1>
                        <nav>
                            <button onClick={() => goToPokeListPage(navigate)}>Ir para Pokelist page</button>
                        </nav>
                    </section>
                )
            case "pokedetailspage":
                return (
                    <section>
                        <h1 className="pokeDetails"></h1>
                        <nav>
                            <Button className="ButtonVoltar" onClick={() => goToPreviousPage(navigate)}>Voltar</Button>
                        </nav>
                    </section>
                )
            default:
                return;
        }
    }

    return (
        <header>
            {renderHeader()}
        </header>
    )
}