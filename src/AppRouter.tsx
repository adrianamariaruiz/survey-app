import { Routes, Route } from "react-router-dom"
import HomePage from "./Routes/HomePage"
import SurveyPage from "./Routes/SurveyPage"
import Navbar from "./Components/Navbar"
import MyProfile from "./Routes/MyProfile"

const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/profile" element={<MyProfile/>}/>
        <Route path="/survey/:id" element={<SurveyPage/>}/>
      </Routes>
    </>
  )
}

export default AppRouter