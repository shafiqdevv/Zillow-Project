import Home from "./Component/Home"
import NavBar from "./Component/NavBarContext/MainNavBar"
import Section1 from "./Component/Section1"
import SideBar from "./Component/SideBar"
function App(){
  return(
    <div>
      <NavBar/>
      <div className="fixed top-0 z-99">
        <SideBar/>
      </div>
      <Home/>
      <Section1/>
    </div>
  )
}
export default App