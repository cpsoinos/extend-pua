import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import SenatorSocialHandles from 'pages/SenatorSocialHandles/SenatorSocialHandles'
import StatesList from 'pages/StatesList/StatesList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () => {
  const styles = {
    backgroundImage: "url(https://static.wixstatic.com/media/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.jpg/v1/fill/w_1920,h_1280,al_t,q_85,usm_0.66_1.00_0.01/11062b_49bd140ff6034d019057a7dddc081e2c~mv2.jpg)"
  }

  return (
    <div className="relative">
      <div className="absolute">
        <div className="fixed bg-background-black h-full w-full">
          <div className="absolute bg-fixed bg-cover bg-top w-full h-full opacity-10 bg-no-repeat" style={styles}></div>
        </div>
      </div>
      <div className="relative container mx-auto py-4 px-2">
        <Header />
        <Router>
          <div className="text-white">
            <nav className="my-6">
              <ul>
                <li>
                  <Link to="/handles">Senator Social Handles</Link>
                </li>
                <li>
                  <Link to="/states">AWRA States</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/handles">
                <SenatorSocialHandles />
              </Route>
              <Route path="/states">
                <StatesList />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App;
