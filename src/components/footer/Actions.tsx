import { Team as TeamInterface } from '../../interfaces'

function Actions(team: TeamInterface): JSX.Element {
    console.log(team)
    return <div className="h-full flex items-center justify-center">Actions ...</div>
}

export default Actions
