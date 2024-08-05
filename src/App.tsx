import './App.css';
import FeaturesContainer from './components/FeaturesContainer';
import FooterComponent from './components/FooterComponent';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<main className='z-5'>
				<Jumbotron />
				<FeaturesContainer />
			</main>
			<footer className='mycontainer'>
				<FooterComponent />
			</footer>
		</>
	);
}

export default App;
