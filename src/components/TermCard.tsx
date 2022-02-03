import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { ITerm } from '../types/types';

interface TermCardProps {
  termIndex: number;
  term: ITerm;
  terms: ITerm[];
  setTerms: React.Dispatch<React.SetStateAction<ITerm[]>>;
}

const TermCard: FC<TermCardProps> = ({ termIndex, term, terms, setTerms }) => {
  const [termValue, setTermValue] = useState<string>('');
  const [definitionValue, setDefinitionValue] = useState<string>('');

  // useEffect(() => {
  //   return () => {
  //     terms.forEach((el, index) => {
  //       if (termIndex === index) {
  //         setTerms([
  //           ...terms,
  //           { ...terms[index], term: termValue, definition: definitionValue },
  //         ]);
  //       }
  //     });
  //   };
  // });

  return (
    <Card variant='outlined'>
      <CardContent>
        <Grid container columnSpacing={3}>
          <Grid item xs={6}>
            <TextField
              label='Term'
              variant='standard'
              fullWidth
              value={termValue}
              onChange={(e) => setTermValue(e.target?.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Definition'
              variant='standard'
              fullWidth
              value={definitionValue}
              onChange={(e) => setDefinitionValue(e.target?.value)}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TermCard;
