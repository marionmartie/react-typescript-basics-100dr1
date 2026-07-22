import type { ReactNode } from "react"

type SearchByProps = {
    children?: ReactNode
}

const SearchBy = ({children}: SearchByProps) => {
  return (
    <div className="bg-text-contrast rounded-lg px-2 py-4 w-full">
        {children}
    </div>
  )
}

export default SearchBy