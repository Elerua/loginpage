import React from 'react';

//MUI
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

//Icons
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

//CSS
import '../CSS/Home.css';

const Home = () => {
	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

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
					Cette page unique est une application utilisant ReactJS, .NET et MySQL afin
					de se connecter à une application fictive et enregistrer des utilisateurs.
				</div>
			</div>
			<div className="right">
				<div className="login">
					<h1>Se connecter</h1>
					<div>
						<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
						<TextField id="input-with-sx" label="Adresse mail" variant="standard" />
					</div>
					<div>
						<FormControl sx={{ mr: 1, my: 0.5, width: '25ch' }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Mot de passe
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
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

					<div className="explication">
						Si vous possédez déjà une adresse mail enregistrée ainsi qu'un mot de
						passe vous pouvez utiliser le bouton placé ci-dessous afin d'accéder à vos
						informations.
					</div>
					<div>
						<Button variant="contained" endIcon={<LoginRoundedIcon />}>
							Se connecter
						</Button>
					</div>
				</div>
				<div className="signup">
					<h1>S'inscrire</h1>
					<div>
						<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
						<TextField id="input-with-sx" label="Adresse mail" variant="standard" />
					</div>
					<div>
						<FormControl sx={{ mr: 1, my: 0.5, width: '25ch' }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Mot de passe
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
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
						<FormControl sx={{ mr: 1, my: 0.5, width: '25ch' }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Confirmer MDP
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
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
					<div className="explication">
						Si vous ne possédez pas d'adresse mail enregistrée ainsi qu'un mot de
						passe vous pouvez utiliser le bouton placé ci-dessous afin de vous
						enregistrer sur cette application.
					</div>
					<div>
						<Button variant="contained" endIcon={<HowToRegRoundedIcon />}>
							S'inscrire
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
