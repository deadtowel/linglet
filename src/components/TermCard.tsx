import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { FC } from 'react';

interface TermCardProps {}

const TermCard: FC<TermCardProps> = () => {
	return (
		<Card sx={{ minWidth: 275 }} variant='outlined'>
			<CardContent>
				<Grid container columnSpacing={3}>
					<Grid item xs={6}>
						<TextField label='Term' variant='standard' fullWidth />
					</Grid>
					<Grid item xs={6}>
						<TextField label='Definition' variant='standard' fullWidth />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default TermCard;
