import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter'
import MyWelcome from './components/MyWelcome'
import MyLatestRelease from './components/MyLatestRelease'

function App() {
  return (
    <>
    <MyNavBar title="Home" />
    <MyWelcome />
    <MyLatestRelease />
    <MyFooter />
    </>
  );
}

export default App