import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { FC } from 'react';

interface TermCardProps {
  formik: any;
  termIndex: number;
}

const TermCard: FC<TermCardProps> = ({ formik, termIndex }) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={6}>
            <TextField
              {...formik.getFieldProps(`termCards[${termIndex}].term`)}
              value={formik.values.termCards[termIndex].term}
              error={
                formik.touched.termCards?.[termIndex]?.term &&
                Boolean(formik.errors.termCards?.[termIndex]?.term)
              }
              helperText={
                formik.touched.termCards?.[termIndex]?.term &&
                formik.errors.termCards?.[termIndex]?.term
              }
              label='Term'
              variant='standard'
              fullWidth
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              {...formik.getFieldProps(`termCards[${termIndex}].definition`)}
              value={formik.values.termCards[termIndex].definition}
              error={
                formik.touched.termCards?.[termIndex]?.definition &&
                Boolean(formik.errors.termCards?.[termIndex]?.definition)
              }
              helperText={
                formik.touched.termCards?.[termIndex]?.definition &&
                formik.errors.termCards?.[termIndex]?.definition
              }
              label='Definition'
              variant='standard'
              fullWidth
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...formik.getFieldProps(`termCards[${termIndex}].example`)}
              value={formik.values.termCards[termIndex].example}
              error={
                formik.touched.termCards?.[termIndex]?.example &&
                Boolean(formik.errors.termCards?.[termIndex]?.example)
              }
              helperText={
                formik.touched.termCards?.[termIndex]?.example &&
                formik.errors.termCards?.[termIndex]?.example
              }
              label='Example'
              variant='standard'
              fullWidth
              autoComplete='off'
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TermCard;
