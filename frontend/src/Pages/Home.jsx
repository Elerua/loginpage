import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';

//MUI
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import { purple, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

//Icons
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

//CSS
import '../CSS/Home.css';

//Button
const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: purple[500],
	'&:hover': {
		backgroundColor: purple[700],
	},
}));

const ColorButtonLogin = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(blue[500]),
	backgroundColor: blue[500],
	'&:hover': {
		backgroundColor: blue[700],
	},
}));


const Home = () => {
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [mailSign, setMailSign] = useState('');
	const [mailLogin, setMailLogin] = useState('');
	const [passwordSign, setPasswordSign] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');

	const navigate = useNavigate();

	const inscrire = () => {
		const dataInscrire = { name: name, mail: mailSign, password: passwordSign };
		axios
			.post('http://localhost:4000/users/register', dataInscrire)
			.then(function (response) {
				//Succès
				console.log(response);
			})
			.catch(function (response) {
				//Erreur
				console.log(response);
			});
	};

	const connexion = () => {
		const dataConnexion = { mail: mailLogin, password: passwordLogin };
		axios
			.post('http://localhost:4000/users/authenticate', dataConnexion)
			.then(function (response) {
				//Succès
				console.log(response);
				localStorage.setItem(
					'currentUser',
					JSON.stringify({
						token: response.data.token,
						id: response.data.id,
						name: response.data.name,
						mail: response.data.mail,
					})
				);
				navigate(`/user/${response.data.id}`);
			})
			.catch(function (response) {
				//Erreur
				console.log(response);
			});
	};

	//MUI Password
	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className="home">
			<div className="left">
				<div className="left-title">Page de connexion</div>
				<div className="left-text">
					Cette page unique est une application utilisant ReactJS, .NET et SQLite
					afin de se connecter à une application fictive et enregistrer des
					utilisateurs.
				</div>
			</div>
			<div className="right">
				<div className="login">
					<h1>Se connecter</h1>
					<div>
						<TextField
							id="outlined-name"
							label="Adresse mail"
							value={mailLogin}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
							onChange={(event) => {
								setMailLogin(event.target.value);
							}}
						/>
					</div>
					<div>
						<FormControl sx={{ m: 1 }} variant="filled">
							<InputLabel htmlFor="outlined-adornment-password">
								Mot de passe
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={passwordLogin}
								onChange={(event) => {
									setPasswordLogin(event.target.value);
								}}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					</div>
					<div>
						<ColorButtonLogin endIcon={<LoginRoundedIcon/>} onClick={connexion}>Se connecter</ColorButtonLogin>
					</div>
					<div className="explication">
						Si vous possédez déjà une adresse mail enregistrée ainsi qu'un mot de
						passe vous pouvez utiliser le bouton placé ci-dessous afin d'accéder à vos
						informations.
					</div>
				</div>
				<div className="signup">
					<h1>S'inscrire</h1>
					<div>
						<TextField
							id="outlined-name"
							label="Nom de l'utilisateur"
							value={name}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
							onChange={(event) => {
								setName(event.target.value);
							}}
						/>
					</div>
					<div>
						<TextField
							id="outlined-name"
							label="Adresse mail"
							value={mailSign}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AlternateEmailRoundedIcon />
									</InputAdornment>
								),
							}}
							onChange={(event) => {
								setMailSign(event.target.value);
							}}
						/>
					</div>
					<div>
						<FormControl sx={{ m: 1 }} variant="filled">
							<InputLabel htmlFor="outlined-adornment-password">
								Mot de passe
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={passwordSign}
								onChange={(event) => {
									setPasswordSign(event.target.value);
								}}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
					</div>
					<div>
						<ColorButton endIcon={<HowToRegRoundedIcon />} onClick={inscrire}>
							S'inscrire
						</ColorButton>
					</div>
					<div className="explication">
						Si vous ne possédez pas d'adresse mail enregistrée ainsi qu'un mot de
						passe vous pouvez utiliser le bouton placé ci-dessous afin de vous
						enregistrer sur cette application.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
