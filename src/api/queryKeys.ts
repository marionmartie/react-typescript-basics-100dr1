export const pokemonKeys = {
    all: ['pokemon'] as const,
    single: (nameOrId: string | number) => ['pokemon', nameOrId] as const,
    ability: (name: string) => ['ability', name]
}