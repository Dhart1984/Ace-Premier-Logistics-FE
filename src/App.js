import "./App.css";

import Header from "./components/Header"
import Main from "./components/Main";
import SignUp from "./components/SignUp/signup";
import About from "./pages/About/about";
import Applicant from "./pages/Applicants";
import ShowPage from "./pages/Show";

function App() {
  return (
    <div className="App">
      <Header />
  
      <Main />
      <h1>App.js on dev branch</h1>
  
    </div>
  );
}

export default App;
