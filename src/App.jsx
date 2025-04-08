import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import Main from "./components/Main"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  function handleToggleModal() {
    setShowModal(!showModal)
  }
  
  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    async function fetchAPIData() {
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log("DATA\n", apiData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState"><i className="fa-solid fa-gear"></i></div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      <Footer data={data} handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
