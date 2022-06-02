import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToPokeDetailsPage } from "../routes/coordinator";

export default function PokeCard(props) {
  const navigate = useNavigate();
  const { states, setters } = useContext(GlobalStateContext);
  const { pokedex } = states;
  const { setPokedex } = setters;
  const { id, name, images } = props.pokemon;

  const removeFromPokedex = () => {
    const newPokedex = pokedex.filter((poke)=> {
        return id !== poke.id
    })
    setPokedex(newPokedex)
  }

  const addToPokedex = () => {
    const newPokedex = [...pokedex, props.pokemon];
    const orderedPokedex = newPokedex.sort((a, b) => {
      return a.id - b.id;
    });
    setPokedex(orderedPokedex);
  };
  // console.log(props)
  return (
    
    <section className="detalhes">
      <div className="DivCard">
      <span>{name.toUpperCase()} #: {id}</span>

      <figure>
          <img src={images.front} alt={`Foto frontal de ${name}`}></img>
      </figure>

      {props.actualPage === "pokelistpage" ?
      <button onClick={addToPokedex}>Adicionar à Pokédex</button>
      : <button onClick={removeFromPokedex} >Remover da Pokédex</button>      
      }
      <br />
      <button onClick={() => goToPokeDetailsPage(navigate, name)}>
        Ver detalhes
      </button>
      </div>
      <br/>
    </section>
    
    
  );
}
