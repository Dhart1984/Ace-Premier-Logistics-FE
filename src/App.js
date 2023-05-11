import "./App.css";
import Header from "./components/Header"
import Main from "./components/Main";
import Applicant from "./pages/Applicants";
import ShowPage from "./pages/Show";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h1>App.js on dev branch</h1>
      <Applicant/>
      <ShowPage/>

    </div>
  );
}

export default App;
