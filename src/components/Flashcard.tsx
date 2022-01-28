import {
	Card,
	CardContent,
	CardActions,
	Button,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface FlashcardProps {}

const Flashcard: React.FC<FlashcardProps> = () => {
	return (
		<Card sx={{ minWidth: 275, cursor: 'pointer' }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					Word of the Day
				</Typography>
				<Typography variant='h5' component='div'>
					neverlend
				</Typography>
				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					adjective
				</Typography>
				<Typography variant='body2'>
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={'/set1'}>
					<Button size='small'>Learn More</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default Flashcard;
