import { type Type } from "../api/pokemon"
import { Link } from "react-router"

const PokemonList = ({pokemon}: Pick<Type, 'pokemon'>) => {
    return(
        <ul className="mt-4">
            {pokemon.map((p, i) => 
                <li key={i} className="capitalize my-1 flex gap-1">
                    <span>{i+1}.</span>
                    <Link to={`/details/${p.pokemon.name}`}>{p.pokemon.name}</Link>
                </li>)}
        </ul>
    )
}

export default PokemonList