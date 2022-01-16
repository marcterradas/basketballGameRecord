import store from '../../store'

import Team from './Team'
import Historic from './Historic'

import { Team as TeamInterface } from '../../interfaces'

function Main(): JSX.Element {
    const localTeam: TeamInterface = store.getState().localTeam
    const guestTeam: TeamInterface = store.getState().guestTeam

    return (
        <div className="flex items-center justify-between">
            <Team {...localTeam}></Team>
            <Historic></Historic>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Main
