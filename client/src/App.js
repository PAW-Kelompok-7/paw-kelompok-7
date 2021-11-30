import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DaftarMenu from "./components/DaftarMenu";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";

function App() {
  return (
    <Router>
      <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path = "/" element={<DaftarMenu />}/>
            <Route path = '/add' element={<AddMenu />}/>
            <Route path = '/edit/:kode' element={<EditMenu />}/>
          </Routes>
        </div>
      </div>  
     </div>
    </Router>
    
  );
}

export default App;
