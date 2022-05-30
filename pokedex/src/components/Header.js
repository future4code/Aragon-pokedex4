import { useNavigate } from "react-router-dom"
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator"



export default function Header(props) {

    const navigate = useNavigate()

    const renderHeader = () => {
        switch (props.actualPage) {
            case "pokelistpage":
                return (
                    <section>
                        <h1>Pokemons</h1>
                        <nav>
                            <button onClick={() => goToPokedexPage(navigate)} >Ir para pokedex</button>
                        </nav>
                    </section>
                )
            case "pokedexpage":
                return (
                    <section>
                        <h1>Pokedex</h1>
                        <nav>
                            <button onClick={() => goToPokeListPage(navigate)}>Ir para Pokelist page</button>
                        </nav>
                    </section>
                )
            case "pokedetailspage":
                return (
                    <section>
                        <h1>PokeDetailPage</h1>
                        <nav>
                            <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
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