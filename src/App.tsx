import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Set from './pages/Set';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
	const style: any = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		minHeight: '100vh',
	};

	return (
		<div className='App' style={style}>
			<Header />
			<Box sx={{ flex: '1 0 auto' }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/set1' element={<Set id={1} />} />
				</Routes>
			</Box>
			<Footer />
		</div>
	);
}

export default App;
