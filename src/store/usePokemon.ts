import { useQuery } from "@tanstack/react-query";
import { fetchAbility, fetchPokemon, fetchRandomPokemon } from "../api/pokemon";
import { pokemonKeys } from "../api/queryKeys";

export function usePokemon(nameOrId: string | number) {
    return useQuery({
        queryKey: pokemonKeys.single(nameOrId),
        queryFn: () => fetchPokemon(nameOrId),
        enabled: !!nameOrId,
        staleTime: 1000 * 60 * 60
    })
}

export function useAbility(name: string) {
    return useQuery({
        queryKey: pokemonKeys.ability(name),
        queryFn: () => fetchAbility(name),
        enabled: !!name,
        staleTime: 1000 * 60 * 60
    })
}

export function usePokemonList() {
    return useQuery({
        queryKey: pokemonKeys.list(),
        queryFn: () => fetchRandomPokemon(),
        staleTime: 1000 * 60 * 60
    })
}