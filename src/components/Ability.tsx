import { useEffect } from "react"
import { useAbilityStore } from "../store/useSearch"
import Loading from "./Loading"

type AbilityProps = {
    name: string
}

const Ability = ({name}: AbilityProps) => {
    const {ability, isLoading, error, fetchAbility} = useAbilityStore()

    useEffect(() => {
        fetchAbility(name)
    },[name, fetchAbility])

    const enEffect = ability?.effect_entries.find(
        (entry) => entry.language.name === 'en'
    )

    if (isLoading) return <Loading />
    return (
        <div>
            {enEffect?.short_effect}
        </div>
    )
}

export default Ability