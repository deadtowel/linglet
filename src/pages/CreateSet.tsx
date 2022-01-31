import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { useSets } from '../hooks/useSets';
import DragDrop from '../components/DragDrop';
import { useNavigate } from 'react-router-dom';
import TermCard from '../components/TermCard';

export default function CreateSet() {
	const [titleValue, setTitleValue] = useState<string>('');
	const [descriptionValue, setDescriptionValue] = useState<string>('');

	const [cardsAmount, setCardsAmount] = useState(1);

	const { addSet } = useSets();

	const navigate = useNavigate();

	const inputChangeHandler = (
		e: any,
		setFunction: (value: React.SetStateAction<string>) => void,
	): void => {
		setFunction(e.target.value);
	};

	const buttonClickHandler = (e: any): void => {
		addSet({
			title: titleValue,
			description: descriptionValue,
			cardsAmount: 12,
		});

		navigate(-1);
	};

	return (
		<div>
			<Typography>Create a new study set</Typography>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<TextField
						label='Title'
						variant='standard'
						fullWidth
						value={titleValue}
						onChange={(e) => inputChangeHandler(e, setTitleValue)}
					/>
					<TextField
						label='Description'
						multiline
						variant='standard'
						fullWidth
						value={descriptionValue}
						onChange={(e) => inputChangeHandler(e, setDescriptionValue)}
					/>
				</Grid>
				<Grid item xs='auto'></Grid>
				<Grid item xs>
					<Button
						variant='contained'
						color='primary'
						onClick={buttonClickHandler}
					>
						Create
					</Button>
				</Grid>
			</Grid>
			<DragDrop />
			<Grid container rowSpacing={3}>
				{Array(cardsAmount)
					.fill(0)
					.map((_, index) => (
						<Grid item xs={12}>
							<TermCard />
						</Grid>
					))}
				<Grid>
					<Button
						variant='contained'
						onClick={() => setCardsAmount(cardsAmount + 1)}
					>
						Add card
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}
