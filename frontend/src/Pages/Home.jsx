import { React } from 'react';
import Link from 'react-dom';

//CSS
import '../CSS/Home.css';

const Home = () => {
	const buttonData = [
		{
			type: 'login',
			title: 'Se connecter',
			path: '/',
			icon: '',
			explication:
				"Si vous possédez déjà une adresse mail enregistrée ainsi qu'un mot de passe vous pouvez utiliser le bouton placé ci-dessous afin d'accéder à vos informations.",
		},
		{
			type: 'signup',
			title: "S'inscrire",
			path: '/',
			icon: '',
			explication:
				"Si vous ne possédez pas d'adresse mail enregistrée ainsi qu'un mot de passe vous pouvez utiliser le bouton placé ci-dessous afin de vous enregistrer sur cette application.",
		},
	];
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
				<div className="login">Login</div>
				<div className="signup">Signup</div>
			</div>
		</div>
	);
};

export default Home;
