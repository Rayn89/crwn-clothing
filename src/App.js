import "./categories.styles.scss"
import Home from './routes/home/home.component'
import {Routes, Route} from 'react-router-dom'


const Shop = () => {
  return <h2>I am the shop</h2>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
    );

};

export default App;
