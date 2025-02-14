import './App.css'
import BookList from '../Components/BookList.jsx'
import { Outlet } from 'react-router-dom'
import Home from '../Components/Home.jsx'
import Header from '../Components/Header.jsx'
import { Provider } from 'react-redux'
import appStore from './assets/utils/appstore.js'
function App() {

  return (
    <Provider store={appStore}>
      <Header />
      <Outlet/>
    </Provider>
  )
}

export default App
