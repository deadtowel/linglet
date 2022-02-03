import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Header = () => {
  const theme = useTheme();

  const ContainerStyles: React.CSSProperties = {
    background: theme.palette.primary.main,
    padding: '1.3rem 1.5rem 1rem',
    boxShadow: '0px 1px 17px -7px rgba(0,0,0,0.35)',
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
