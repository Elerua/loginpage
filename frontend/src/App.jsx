import { Outlet } from 'react-router-dom';

//CSS
import './App.css';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
	return (
		<div className="App">
			<Header className="App-header Centered" />
			<div className="App-body">
				<Outlet />
			</div>
      <Footer className="App-Footer Centered" />
		</div>
	);
}

export default App;
