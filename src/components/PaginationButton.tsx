import { usePaginationStore } from "../store/usePaginationStore"
type PaginationButtonProps = {
    page_size: number
    total_pages: number
}

const PaginationButton = ({page_size, total_pages}: PaginationButtonProps) => {
    const page = usePaginationStore((state) => state.page)
    const setPage = usePaginationStore((state) => state.setPage)

    const start = (page-1) * page_size

    return (
        <div className="">
            <button
                className="px-1 py-2 m-2 border-white border w-1/4 bg-white text-black rounded-full cursor-pointer"
                onClick={() => setPage(Math.max(page - 1, 1))}
                disabled={page === total_pages}>
                Previous
            </button>
            <button
                className="px-1 py-2 m-2 border-white border w-1/4 bg-white text-black rounded-full cursor-pointer"
                onClick={() => setPage(Math.min(page + 1, total_pages))}
                disabled={page === total_pages}>
                Next
            </button>
        </div>
    )
}

export default PaginationButton