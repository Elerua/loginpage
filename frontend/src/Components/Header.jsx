import { React } from 'react';
import useNavigate from 'react-dom';

//CSS
import '../CSS/Header.css';

const Header = () => {
	//const navigate = useNavigate();

	return (
		<div className="header">
			<div className="header-title">
				SpimedAI
			</div>
		</div>
	);
};

export default Header;
