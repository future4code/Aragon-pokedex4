import { useNavigate } from "react-router-dom";
import { goToPokeDetailsPage } from "../routes/coordinator";

export default function PokeCard(props) {

    const navigate = useNavigate()
    const { id, name } = props.pokemon

    return (
        <section>
            <span>
                {name.toUpperCase()}
            </span>
            <span>
                n°: {id}
            </span>
            <br />
            <button>Adicionar Pokedex</button>
            <button onClick={() => goToPokeDetailsPage(navigate, name)}>Ver detalhes</button>
        </section>
    )
}