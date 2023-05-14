import { Routes, Route } from "react-router-dom"
import Applicant from "../../pages/Applicants"
import ShowPage from "../../pages/Show"

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<h1>homepage</h1>} />
        <Route path="/dashboard" element={<Applicant/> }/>
        <Route path="/applicant/:id" element={<ShowPage />} />
      </Routes>
    </main>
  )
}

export default Main