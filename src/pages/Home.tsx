import { Grid, Typography, Button, Container, Box } from '@mui/material';
import SetCard from '../components/SetCard';
import { useSets } from '../hooks/useSets';
import { ISet } from '../types/types';
import { Link } from 'react-router-dom';

export default function Home() {
	const { sets, addSet, clearSets } = useSets();

	const buttonBoxStyles: any = {
		margin: '1rem 0',
	};

	const buttonStyles: any = {
		margin: '0 0.5rem',
	};

	return (
		<div>
			<Typography variant='body1'>Home page</Typography>
			<Box sx={buttonBoxStyles}>
				<Link to='/create-set'>
					<Button variant='contained'>New Set</Button>
				</Link>
				<Button
					variant='contained'
					color='error'
					onClick={() => clearSets()}
					sx={buttonStyles}
				>
					Clear sets
				</Button>
			</Box>

			<Grid container spacing={3}>
				{sets &&
					sets.map((set: ISet) => {
						return (
							<Grid item lg={3} key={set.id}>
								<Link to={`/set${set.id}`}>
									<SetCard currentSet={set} />
								</Link>
							</Grid>
						);
					})}
			</Grid>
		</div>
	);
}
