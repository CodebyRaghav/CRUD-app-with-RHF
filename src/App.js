import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    //Here we defining routing bcz we want to redirecting our page to the table page when we click on submit button for crud of app.
  );
}

export default App;
