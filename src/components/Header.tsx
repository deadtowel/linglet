import { Box } from '@mui/material';
import { usePalette } from '../hooks/usePalette';

const Header = () => {
	const { primary, white } = usePalette();

	const styles = {
		background: primary,
		color: white,
	};

	return <Box sx={styles}>Header</Box>;
};

export default Header;
