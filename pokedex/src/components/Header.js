import { useNavigate } from "react-router-dom"
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator"


export default function Header(props) {

    const navigate = useNavigate()

    const renderHeader = () => {
        switch (props.actualPage) {
            case "pokelistpage":
                return (
                    <section>
                        <h1 className="pokemon"></h1>
                        <nav>
                            <button onClick={() => goToPokedexPage(navigate)} >Ir para Pokédex</button>
                        </nav>
                    </section>
                )
            case "pokedexpage":
                return (
                    <section >
                        <h1 className="imagemPokedex"></h1>
                        <nav>
                            <button onClick={() => goToPokeListPage(navigate)}>Voltar</button>
                        </nav>
                    </section>
                )
            case "pokedetailspage":
                return (
                    <section>
                        <h1 className="pokeDetails"></h1>
                        <nav>
                            <button className="ButtonVoltar" onClick={() => goToPreviousPage(navigate)}>Voltar para Pokédex</button>
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