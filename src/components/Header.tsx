import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { usePalette } from '../hooks/usePalette';
import Logo from '../assets/Logo.svg';

const Header = () => {
	const { primary, white } = usePalette();

	const ContainerStyles: React.CSSProperties = {
		background: primary,
		color: white,
		padding: '1.3rem 1.5rem 1rem',
	};

	return (
		<Box sx={ContainerStyles}>
			<Link to='/'>
				<img src={Logo} alt='logo' height='30rem' />
			</Link>
		</Box>
	);
};

export default Header;
