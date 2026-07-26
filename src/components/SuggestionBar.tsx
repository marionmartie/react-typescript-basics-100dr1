import { useSuggestionStore } from "../store/useSuggestionStore"
import { useEffect } from "react"
import Suggestion from "./Suggestion"

const SuggestionBar = () => {
    const {suggestions, generatesuggestions} = useSuggestionStore()

    useEffect(() => {
        generatesuggestions(3, 299)
    }, [generatesuggestions])

    return (
    <div className="w-full">
        <ul className="flex gap-2">
            <span className="text-text-contrast">Suggestions:</span>
            {suggestions.map(({id, name}) => (
                <Suggestion key={id} name={name} />
            ))}
        </ul>
    </div>
    )
}

export default SuggestionBar