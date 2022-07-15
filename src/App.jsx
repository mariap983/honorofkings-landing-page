import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './App.scss'

import Header from './components/header/Header'
import Home from './pages/Home'

/* The selected code is a function that returns an HTML element. 
The returned HTML element has two child elements: <Header/> and <Home/>. */

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>     
    </div>
  )
}

export default App
