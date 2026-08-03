import { useEffect } from "react"
import Loading from "./Loading"
import { useAbility, usePokemon } from "../store/usePokemon"

type AbilityProps = {
    name: string
}

const Ability = ({name}: AbilityProps) => {
    // const {abilities, loadingNames, error, fetchAbility} = useAbilityStore()
    const {data, isLoading, isError, error} = useAbility(name)

    const enEffect = data?.effect_entries.find(
        (entry) => entry.language.name === 'en'
    )

    if (isLoading) return <Loading />
    return (
        <div>
            {enEffect?.effect}
        </div>
    )
}

export default Ability