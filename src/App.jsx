import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MovieDetail from './pages/MovieDetail';
import './App.css';

function App() {
  return(
	<Router>
		<Navbar />
		<Routes> 
			<Route path='/' element={<Home />}/>
			<Route path='/movie/:id' element={<MovieDetail />}/>
		</Routes>
	</Router>
)
}

export default App;