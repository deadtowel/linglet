import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { usePalette } from '../hooks/usePalette';

const Header = () => {
	const { primary, white } = usePalette();

	const styles = {
		background: primary,
		color: white,
	};

	return (
		<Box sx={styles}>
			<Link to='/'>
				<h2>Header</h2>
			</Link>
		</Box>
	);
};

export default Header;
