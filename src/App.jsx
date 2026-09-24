import ComingSoonHero from "./components/ComingSoonHero"
import tournamentConfig from "./config/tournamentConfig";

function App() {


  return (
    <div>
      <ComingSoonHero config={tournamentConfig} />
    </div>
  )
}

export default App
