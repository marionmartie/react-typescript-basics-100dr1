import { NavLink } from "react-router"

const Nav = () => {
  return (
    <nav className="bg-surface-primary font-bold text-2xl p-5">
      <NavLink to="/" className="text-text-default">Pokedex</NavLink>
    </nav>
  )
}

export default Nav