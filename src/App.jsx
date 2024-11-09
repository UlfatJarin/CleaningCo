import './App.css'
import Aboutus from './components/Aboutus'
import Banner from './components/Banner'
import Contect from './components/Contect'
import Footer from './components/Footer'
import Member from './components/Member'
import Navber from './components/Navber'
import Plan from './components/Plan'
import Services from './components/Services'
import Update from './components/Update'
import Vdo from './components/Vdo'

function App() {


  return (
    <div>
      <Navber/>
      <Banner/>
      <Aboutus/>
      <Services/>
      <Vdo/>
      <Plan/>
      <Member/>
      <Update/>
      <Contect/>
      <Footer/>

    </div>
  )
}

export default App
