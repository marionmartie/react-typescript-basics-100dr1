import Footer from './components/Footer'
import Nav from './components/Nav'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <Nav />
        <Outlet />
      <Footer />
    </>
  )
}

export default App