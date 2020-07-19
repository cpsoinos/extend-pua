import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import SenatorSocialHandles from 'pages/SenatorSocialHandles/SenatorSocialHandles'
import StatesList from 'pages/StatesList/StatesList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import RedirectToHome from 'pages/RedirectToHome/RedirectToHome'

const App = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <div className="fixed bg-background-black h-full w-full">
          <div className="bg-image-masks absolute bg-fixed bg-cover bg-top w-full h-full opacity-10 bg-no-repeat"></div>
        </div>
      </div>
      <div className="relative container mx-auto py-4 px-2">
        <Header />
        <Router>
          <div className="text-white">
            <nav className="my-6">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/senators">Senator Social Handles</NavLink>
                </li>
                <li>
                  <NavLink to="/states">AWRA States</NavLink>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/senators">
                <SenatorSocialHandles />
              </Route>
              <Route path="/states">
                <StatesList />
              </Route>
              <Route path="*">
                <RedirectToHome />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    </div>
  )
}

export default App;
