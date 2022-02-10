import store from '../store/store'


import Scoreboard from './nav/Scoreboard'
import Main from './main/Main'
import Footer from './footer/Footer'

function App(): JSX.Element {

    let showPlayerPopup: boolean = false
    let showCoachPopup: boolean = false
    let selectedPlayerId: number | null = null
    let selectedCoachId: number | null = null

    const showPopups = (): void => {
        showPlayerPopup = store.getState().showPlayerPopup
        showCoachPopup = store.getState().showCoachPopup
        selectedPlayerId = showPlayerPopup ? store.getState().selectedPlayerId : null
        selectedCoachId = showCoachPopup ? store.getState().selectedCoachId : null
    }

    store.subscribe(showPopups)

    return (
        <div className="flex flex-wrap min-h-full">
            <Scoreboard></Scoreboard>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default App
