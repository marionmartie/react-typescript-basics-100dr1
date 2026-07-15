export type Pokemon = {
    name: string,
    url: string,
}

export type PokemonDetails = {
    id: number,
    name: string,
    types: string[],
    moves: string[],
    stats: string[],
}