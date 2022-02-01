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
			<div className="title">Authentification</div>
			<div className="subtitle">
				Cette page unique est une application utilisant ReactJS, .NET et MySQL afin
				de se connecter à une application fictive et enregistrer des utilisateurs.
			</div>
			<div className="button-group">
				{buttonData.map((item, index) => (
					<div className={item.type} key={index}>
                        <div className="button-title">{item.title}</div>
                        <div className="button-explication">{item.explication}</div> 
                        <div className="button-button"></div>
					</div>
				))}
				{/*<div className="login">
					<div className="button-title">Se connecter</div>
					<div className="button-explication">
						Si vous possédez déjà une adresse mail enregistrée ainsi qu'un mot de
						passe vous pouvez utiliser le bouton placé ci-dessous afin d'accéder à vos
						informations.
					</div>
					<div className="button"></div>
				</div>
				<div className="signup">
					<div className="button-title"></div>
					<div className="button-explication">
						Si vous ne possédez pas d'adresse mail enregistrée ainsi qu'un mot de
						passe vous pouvez utiliser le bouton placé ci-dessous afin de vous
						enregistrer sur cette application.
					</div>
					<div className="button">S'inscrire'</div>
                </div>*/}
			</div>
		</div>
	);
};

export default Home;
