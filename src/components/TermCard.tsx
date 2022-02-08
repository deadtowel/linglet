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
              {...formik.getFieldProps(`termForms[${termIndex}].term`)}
              value={formik.values.termForms[termIndex].term}
              error={
                formik.touched.termForms?.[termIndex]?.term &&
                Boolean(formik.errors.termForms?.[termIndex]?.term)
              }
              helperText={
                formik.touched.termForms?.[termIndex]?.term &&
                formik.errors.termForms?.[termIndex]?.term
              }
              label='Term'
              variant='standard'
              fullWidth
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              {...formik.getFieldProps(`termForms[${termIndex}].definition`)}
              value={formik.values.termForms[termIndex].definition}
              error={
                formik.touched.termForms?.[termIndex]?.definition &&
                Boolean(formik.errors.termForms?.[termIndex]?.definition)
              }
              helperText={
                formik.touched.termForms?.[termIndex]?.definition &&
                formik.errors.termForms?.[termIndex]?.definition
              }
              label='Definition'
              variant='standard'
              fullWidth
              autoComplete='off'
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              {...formik.getFieldProps(`termForms[${termIndex}].example`)}
              value={formik.values.termForms[termIndex].example}
              error={
                formik.touched.termForms?.[termIndex]?.example &&
                Boolean(formik.errors.termForms?.[termIndex]?.example)
              }
              helperText={
                formik.touched.termForms?.[termIndex]?.example &&
                formik.errors.termForms?.[termIndex]?.example
              }
              label='Example'
              variant='standard'
              fullWidth
              autoComplete='off'
            />
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TermCard;
