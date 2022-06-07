import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import PokeDetailsPage from "../pages/PokeDetailsPage";
import PokedexPage from "../pages/PokedexPage";
import PokeListPage from "../pages/PokeListPage";


export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<PokeListPage />} />
                <Route path={"/pokedex"} element={<PokedexPage />} />
                <Route path={"/pokemon/:pokeName/details"} element={<PokeDetailsPage />} />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}