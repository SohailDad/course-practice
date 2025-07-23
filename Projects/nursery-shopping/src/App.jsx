import MainPage from "./components/MainPage"
import ShoppingCards from "./components/ShoppingCards"
import WelcomePage from "./components/WelcomePage"
import "./welcomeStyle.css"
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      {/* <Navbar/>
      <ShoppingCards /> */}
      {/* <Cards/> */}
      {/* <WelcomePage /> */}

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/mainpage" element={<MainPage/>} />
        <Route path="/shoppingCards" element={<ShoppingCards />} />
      </Routes>
    </>
  )
}

export default App
