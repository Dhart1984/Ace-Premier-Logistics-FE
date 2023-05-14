import "./App.css";


import Header from "./components/Header"
import Main from "./components/Main";
import SignUp from "./components/SignUp/signup";
import About from "./pages/About/about";
import Applicants from "./pages/Applicants";
import Applicant from "./pages/Applicants";
import ShowPage from "./pages/Show";
import GMapsApi from "./components/GMapsApi";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <About/> */}
      <GMapsApi/>
     
  
    </div>
  );
}

export default App;
