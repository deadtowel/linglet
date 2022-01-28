import { useState, useEffect } from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';
import Flashcard from '../components/Flashcard';

export default function Home() {
	// useEffect(() => {
	// 	if (localStorage.getItem('sets')) {
	// 		const dataFromLocalStorage = localStorage.getItem('sets');
	// 	} else {
	// 		localStorage.setItem('sets', JSON.stringify(sets));
	// 	}
	// }, []);

	return (
		<div>
			<Container maxWidth='lg'>
				<Typography variant='body1'>Home page</Typography>
				<Button variant='contained'>New Set</Button>
				<Grid container spacing={3}>
					<Grid item lg={3}>
						<Flashcard />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
