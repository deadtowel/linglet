import styled from '@emotion/styled';
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

const StyledCard = styled(Card)`
  min-width: 275px;
  cursor: pointer;
`;

const SetCard: React.FC<SetCardProps> = ({ currentSet }) => {
  return (
    <StyledCard variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='div'>
          {currentSet.title}
        </Typography>
        <Typography color='text.secondary'>
          {+currentSet.termCards.length} terms
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Show More</Button>
      </CardActions>
    </StyledCard>
  );
};

export default SetCard;
