import { useQuery } from "@tanstack/react-query";
import { fetchAbility, fetchPokemon, fetchRandomPokemon, fetchTypes, fetchType, fetchGenerations, fetchGeneration, fetchLocations, fetchRegion, fetchRegions } from "../api/pokemon";
import { pokemonKeys } from "../api/queryKeys";
import { useSearch } from "./useSearch";

export function usePokemon() {
    const pokemon = useSearch((state) => state.pokemon)

    return useQuery({
        queryKey: pokemonKeys.single(pokemon ?? ''),
        queryFn: () => {
            if (!pokemon) throw new Error('No Pokemon selected')
            return fetchPokemon(pokemon)
        },
        enabled: !!pokemon,
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

export function useTypes() {
    return useQuery({
        queryKey: pokemonKeys.types(),
        queryFn: () => fetchTypes(),
        staleTime: 1000 * 60 * 60
    })
}

export function useType(name: string) {
    return useQuery({
        queryKey: pokemonKeys.type(name),
        queryFn: () => fetchType(name),
        enabled: !!name,
        staleTime: 1000 * 60 * 60
    })
}

export function useGenerations() {
    return useQuery({
        queryKey: pokemonKeys.generations(),
        queryFn: () => fetchGenerations(),
        staleTime: 1000 * 60 * 60
    })
}

export function useGeneration(name: string) {
    return useQuery({
        queryKey: pokemonKeys.generation(name),
        queryFn: () => fetchGeneration(name),
        enabled: !!name,
        staleTime: 1000 * 60 * 60
    })
}

export function useRegions() {
    return useQuery({
        queryKey: pokemonKeys.regions(),
        queryFn: () => fetchRegions(),
        staleTime: 1000 * 60 * 60
    })
}

export function useRegion(name: string) {
    return useQuery({
        queryKey: pokemonKeys.region(name),
        queryFn: () => fetchRegion(name),
        enabled: !!name,
        staleTime: 1000 * 60 * 60
    })
}

export function useLocation(name: string) {
    return useQuery({
        queryKey: pokemonKeys.region(name),
        queryFn: () => fetchLocations(name),
        enabled: !!name,
        staleTime: 1000 * 60 * 60
    })
}