import styled from '@emotion/styled';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { ISet } from '../types/types';
import { Link } from 'react-router-dom';

interface SetCardProps {
  currentSet: ISet;
}

const StyledCard = styled(Card)`
  min-width: 275px;
`;

const actionClickHandler = (event: any) => {
  event.preventDefault();
};

const SetCard: React.FC<SetCardProps> = ({ currentSet }) => {
  return (
    <StyledCard variant='outlined'>
      <CardContent>
        <Typography color='text.secondary'>
          {+currentSet.termCards.length} terms
        </Typography>
        <Typography variant='h5' component='h2'>
          {currentSet.title}
        </Typography>
        <Typography variant='body2' component='p' color='text.primary'>
          {currentSet.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/set${currentSet.id}`}>
          <Button size='medium'>Learn</Button>
        </Link>
        <IconButton
          aria-label='delete'
          size='medium'
          onClick={actionClickHandler}
        >
          <DeleteIcon fontSize='inherit' />
        </IconButton>
        <IconButton
          aria-label='edit'
          size='medium'
          onClick={actionClickHandler}
        >
          <EditIcon fontSize='inherit' />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default SetCard;
