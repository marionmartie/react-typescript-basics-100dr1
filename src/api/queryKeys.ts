export const pokemonKeys = {
    all: ['pokemon'] as const,
    list: () => ['pokemon'] as const,
    single: (nameOrId: string | number) => ['pokemon', nameOrId] as const,
    ability: (name: string) => ['ability', name] as const,
    types: () => ['type'] as const,
    type: (nameOrId: string | number) => ['type', nameOrId] as const,
}