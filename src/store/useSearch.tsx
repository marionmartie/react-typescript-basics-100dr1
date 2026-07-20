import {create} from 'zustand'

type SearchStore = {
    pokemonName: string | null
    setPokemonName: (name: string) => void
}

export const useSearch = create<SearchStore>()((set) => ({
    pokemonName: 'Bulbasaur',
    setPokemonName: (name) => set({ pokemonName: name })
}))