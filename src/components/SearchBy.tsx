import type { ReactNode } from "react"

type SearchByProps = {
    children?: ReactNode
}

const SearchBy = ({children}: SearchByProps) => {
  return (
    <div className="rounded-lg px-2 py-4 w-full border-text-contrast border text-text-contrast">
        {children}
    </div>
  )
}

export default SearchBy