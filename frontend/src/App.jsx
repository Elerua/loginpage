import { Outlet } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

//CSS
import './App.css';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';

//Middle ware si utilisateur connecté
import { AuthContext } from './helpers/AuthContext';

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
};

export default App;
