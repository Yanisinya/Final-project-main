import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;