import { useState } from "react"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import Main from "./components/Main"

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  return (
    <>
      <Main />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal} />
      )}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
