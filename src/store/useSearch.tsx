import {create} from 'zustand'

type PokemonName = {
    pokemon: string | number | null
    setPokemon: (name: string | null) => void
}

export const useSearch = create<PokemonName>()((set) => ({
    pokemon: '',
    setPokemon: (name) => set({pokemon: name})
}))