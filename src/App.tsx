import { Box, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateSet from './pages/CreateSet';
import Home from './pages/Home';
import Set from './pages/Set';

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
			<Container sx={{ flex: '1 0 auto' }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create-set' element={<CreateSet />} />
					<Route path='/set:setId' element={<Set />} />
				</Routes>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
