import { Routes, Route } from "react-router-dom"
import Applicant from "../../pages/Applicants"
import ShowPage from "../../pages/Show"
import Home from "../../pages/Home"

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Applicant/> }/>
        <Route path="/applicant/:id" element={<ShowPage />} />
      </Routes>
    </main>
  )
}

export default Main