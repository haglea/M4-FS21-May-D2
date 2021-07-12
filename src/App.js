import './App.css';
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter'
import MyWelcome from './components/MyWelcome'
import MyLatestRelease from './components/MyLatestRelease'
import fantasy from './data/fantasy.json'

function App() {
      return (
        <>
        <MyNavBar />
        <MyWelcome books={fantasy}/>
        <MyLatestRelease books={fantasy} />
        <MyFooter />
        </>
      );
}

export default App