import Loading from "./Loading"
import { useAbility } from "../store/usePokemon"

type AbilityProps = {
    name: string
}

const Ability = ({name}: AbilityProps) => {
    const {data, isLoading, isError, error} = useAbility(name)

    const enEffect = data?.effect_entries.find(
        (entry) => entry.language.name === 'en'
    )

    if (isLoading) return <Loading />
    if (isError) return <>Error fetching data {error}</>
    return (
        <div>
            {enEffect?.effect}
        </div>
    )
}

export default Ability