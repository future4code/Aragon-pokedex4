

export const goToPokeListPage = (navigate) => {
    navigate("/")

}

export const goToPokeDetailsPage = (navigate, pokeName) => {
    navigate(`/pokemon/${pokeName}/details`)
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")

}
export const goToPreviousPage = (navigate) => {
    navigate(-1)

}