import "./categories.styles.scss"
import Home from './routes/home/home.component'
import {Routes, Route, Outlet} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
}


const Shop = () => {
  return <h2>I am the shop</h2>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
    );

};

export default App;
