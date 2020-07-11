import React from "react";
import logo from "./logo.svg";
// import './App.css';
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddEquities from "./equities/AddEquities";
import MutualFunds from "./mutualfunds/";
import FixedDeposits from "./fixeddeposits/";

const App = () => {
    return (
        <Router>
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-item">Prasanna finance app</div>
                    {/*<img src="../gargi.jpg" alt="" width="50" height="20" />*/}
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/mutualfunds" className="navbar-item">
                            Mutual Funds
                        </Link>
                        <Link to="/equities/add" className="navbar-item">
                            Equities
                        </Link>
                        <Link to="/fixeddeposits" className="navbar-item">
                            Fixed Deposits
                        </Link>
                    </div>
                </div>
            </nav>

            {/*      <section className="section">
        <div className="container">
          <div className="tabs">
            <ul>
              <li>
                <Link to="/mutualfunds" className="is-active">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link to="/equities">Equities</Link>
              </li>
              <li>
                <Link to="/fixeddeposits">Fixed Deposits</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
*/}
            <section className="section">
                <div className="container">
                    <Switch>
                        <Route path="/equities/add">
                            <AddEquities></AddEquities>
                        </Route>
                        <Route path="/mutualfunds">
                            <MutualFunds></MutualFunds>
                        </Route>
                        <Route path="/fixeddeposits">
                            <FixedDeposits></FixedDeposits>
                        </Route>
                    </Switch>
                </div>
            </section>
        </Router>
    );
};

export default App;
