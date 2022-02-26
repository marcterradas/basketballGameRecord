import { Team, Player, Historic } from '../../interfaces'

import { localTeam, guestTeam } from '../mokupdata'

const selectedPlayerId: number | null = null
const selectedCoachId: number | null = null
const renderPlayerPopup: boolean = false
const renderCoachPopup: boolean = false
const removePopup: boolean = false
const historic: Array<Historic> = []

const initialScoreState = {
    localTeam,
    guestTeam,
    selectedPlayerId,
    selectedCoachId,
    renderPlayerPopup,
    renderCoachPopup,
    removePopup,
    historic
}

const reducer = (state = initialScoreState, action: any) => {
    let result = {}

    const localTeam: Team = JSON.parse(JSON.stringify(state.localTeam))
    const guestTeam: Team = JSON.parse(JSON.stringify(state.guestTeam))

    switch (action.type) {
        case 'switchBonusStatus':
            action.team == 'local' ? (localTeam.bonus = !localTeam.bonus) : (guestTeam.bonus = !guestTeam.bonus)
            result = {
                ...state,
                localTeam: localTeam,
                guestTeam: guestTeam
            }
            break
        case 'switchPossessionStatus':
            action.team == 'local' ? (localTeam.possession = !localTeam.possession) : (guestTeam.possession = !guestTeam.possession)
            result = {
                ...state,
                localTeam: localTeam,
                guestTeam: guestTeam
            }
            break
        case 'selectPlayer':
            result = {
                ...state,
                selectedPlayerId: action.playerId,
                selectedCoachId: null,
                renderPlayerPopup: true
            }
            break
        case 'selectCoach':
            result = {
                ...state,
                selectedPlayerId: null,
                selectedCoachId: action.coachId,
                renderCoachPopup: true
            }
            break
        case 'closePopup':
            result = {
                ...state,
                selectedPlayerId: null,
                selectedCoachId: null,
                removePopup: true
            }
            break
        case 'addPoints':
            if (localTeam.players[state.selectedPlayerId] !== 'undefined') {
                localTeam.score += action.points
                localTeam.players[state.selectedPlayerId].points += action.points
            } else {
                guestTeam.score += action.points
                guestTeam.players[state.selectedPlayerId].points += action.points
            }

            result = {
                ...state,
                localTeam: localTeam,
                guestTeam: guestTeam
            }

            break

        case 'renderPlayerPopup':
            result = {
                ...state,
                renderPlayerPopup: false,
            }
            break

        case 'renderCoachPopup':
            result = {
                ...state,
                renderCoachPopup: false,
            }
            break

        case 'updateRemovePopup':
            result = {
                ...state,
                removePopup: false
            }
            break

        default:
            result = state
            break
    }

    return result
}

export default reducer
