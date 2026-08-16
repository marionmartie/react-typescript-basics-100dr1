import {create} from 'zustand'

type Page = {
    page: number
    setPage: (page: number) => void
}

export const usePaginationStore = create<Page>()((set) => ({
    page: 1,
    setPage: (page) => set({page: page})
}))