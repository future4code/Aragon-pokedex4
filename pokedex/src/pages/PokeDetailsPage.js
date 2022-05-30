import { useParams } from "react-router-dom"
import Header from "../components/Header"


export default function PokeDetailsPage() {

    const params = useParams()

    return (
        <main>
            <Header
                actualPage={"pokedetailspage"}
            />
            <h1>poke infos</h1>
            <h2>Nome : {params.pokeName}</h2>
        </main>

    )

}