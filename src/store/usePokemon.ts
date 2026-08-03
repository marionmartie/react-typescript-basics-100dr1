import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../api/pokemon";

export function usePokemon(nameOrId: string | number) {
    return useQuery({
        queryKey: ["pokemon", nameOrId],
        queryFn: () => fetchPokemon(nameOrId),
        enabled: !!nameOrId,
        staleTime: 1000 * 60 * 60
    })
}