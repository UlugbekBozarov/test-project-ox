import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateAftarizated } from './actions/AftarizatedActions'
import './App.scss'
import SignIn from './Components/sign-in/SignIn'
import SignUp from './Components/sign-up/SignUp'
import { useSelector } from 'react-redux'
import Home from './Components/home/Home'
import Sidebar from './Components/sidebar/Sidebar'
import Leftsidebar from './Components/leftsidebar/Leftsidebar'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch();

  const aftarizated = useSelector((state) => state.aftarizated);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token !== null) {
      dispatch(updateAftarizated(token));
    }
  })
  return (
    <div className="app" >
      {
        aftarizated !== null ? (
          <>
            <Sidebar />
            {/* <button onClick={() => {
              document.getElementsByName("left_sidebar")[0].classList.toggle("open")
            }}>toggle</button> */}
            <div className="content">
              <div className="left_sidebar">
                <Leftsidebar />
              </div>
              <div className="home_body">
                <Switch>
                  <Route path="/home" component={Home} />
                  <Redirect to="/home/1" />
                </Switch>
              </div>
            </div>
          </>
        ) : (
          <Switch>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Redirect to="/sign-in" />
          </Switch>
        )
      }
    </div>
  )
}

export default App;
