import { useNavigate } from "react-router-dom";
import { goToPokeListPage } from "../routes/coordinator";


export default function ErrorPage() {

    const navigate = useNavigate()

    return (

        <main>
            <h1>Pagina não Encontrada</h1>
            <button onClick={() => goToPokeListPage(navigate)}>Ir para lista de pokemons</button>
        </main>
    )

}