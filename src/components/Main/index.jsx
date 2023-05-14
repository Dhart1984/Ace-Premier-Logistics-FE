import { Routes, Route } from "react-router-dom"
import Applicant from "../../pages/Applicants"
import ShowPage from "../../pages/Show"
import Home from "../../pages/Home"
import About from "../../pages/About/about"
import ThankYou from "../../pages/ThankYou/thankyou"
import SignIn from "../../pages/SignIn/signin"
import Edit from "../../pages/Edit/edit"

const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Applicant/> }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/thanks" element={<ThankYou/>}/>
        <Route path="/applicant/:id" element={<ShowPage />} />
        <Route path="/applicant/:id/edit" element={<Edit />} />
      </Routes>
    </main>
  )
}

export default Main