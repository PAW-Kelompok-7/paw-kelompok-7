import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KaryawanList from "./components/KaryawanList";
import AddKaryawan from "./components/AddKaryawan";
import EditKaryawan from "./components/EditKaryawan";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
              <Route exact path="/">
                <KaryawanList/>
              </Route>
              
              <Route path="/add">
                <AddKaryawan/>
              </Route>

              <Route path="/edit">
                <EditKaryawan/>
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
