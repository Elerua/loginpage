import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//CSS
import '../CSS/LoggedIn.css';

//MUI
import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

//Components
import TableUser from '../Components/TableUser';

const LoggedIn = () => {
	const navigate = useNavigate();
	let { id } = useParams();

	const [dataUser, setDataUser] = useState({});

	var currentUser = JSON.parse(localStorage.getItem('currentUser'));
	var token = currentUser.token; // your token
	var idcU = currentUser.id;

	//Get Request
	useEffect(() => {
		if (!localStorage.getItem('currentUser')) {
			navigate('/');
		} else {
			axios
				.get(`http://localhost:4000/users/${id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					setDataUser(response.data);
					console.log('Test page id');
				});
		}
	}, []);

	//Déconnexion
	const deconnexion = () => {
		localStorage.clear();
		navigate('/');
	};

	//Supprimer compte
	const supprimer = () => {
		axios
			.delete(`http://localhost:4000/users/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				setDataUser(response.data);
				console.log('Utilisateur supprimé');
			});
	};

	return (
		<div className="LoggedIn">
			<h1>Bienvenue sur votre page {dataUser.name} !</h1>
			<h2>Voici votre adresse mail : {dataUser.mail}</h2>
			<h3>Vous êtes notre utilisateur numéro {dataUser.id}</h3>
			<div className="buttonLog">
				<Button
					variant="contained"
					color="success"
					endIcon={<LogoutRoundedIcon />}
					onClick={deconnexion}
				>
					Déconnexion
				</Button>
			</div>
			<div className="buttonLog">
				<Button variant="outlined" color="error" onClick={supprimer}>
					Supprimer mon compte
				</Button>
			</div>

			<TableUser />
		</div>
	);
};

export default LoggedIn;
