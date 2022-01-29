import {
	Card,
	CardContent,
	CardActions,
	Button,
	Typography,
} from '@mui/material';
import { ISet } from '../types/types';

interface SetCardProps {
	currentSet: ISet;
}

const SetCard: React.FC<SetCardProps> = ({ currentSet }) => {
	return (
		<Card sx={{ minWidth: 275, cursor: 'pointer' }}>
			<CardContent>
				<Typography variant='h5' component='div'>
					{currentSet.title}
				</Typography>
				<Typography color='text.secondary'>
					{currentSet.cardsAmount} terms
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Show More</Button>
			</CardActions>
		</Card>
	);
};

export default SetCard;
