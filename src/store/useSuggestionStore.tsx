import {create} from 'zustand'
type Suggestion = {
    id: number,
    name: string
}

type SuggestionStore = {
    suggestions: Suggestion[]
    isLoading: boolean
    generatesuggestions: (count: number, maxId: number) => void
}

export const useSuggestionStore = create<SuggestionStore>()((set) => ({
    suggestions: [],
    isLoading: true,
    generatesuggestions: async (count, maxId) => {
        // geneerated unique ids
        const ids = new Set<number>
        while (ids.size < count) {
            ids.add(Math.floor(Math.random() * maxId) + 1)
        }
        // fetch the ids
        const results = await Promise.all(
            Array.from(ids).map(async (id) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                const data = await res.json()
                return {id, name: data.name as string}
            })
        )
        set({suggestions: results, isLoading: false})
    }
}))