import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getModifiedStringArray } from '../utils';
import { TextField } from '@mui/material';

export default function useLearn(currentSet): any {
  const [currentTermIndex, setCurrentTermIndex] = useState<number>(0);

  const initialValues = {
    termField: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      termField: Yup.string().test(
        'validate-term',
        'Spelling is wrong',
        function (value) {
          if (
            currentSet &&
            value === currentSet?.termCards[currentTermIndex]?.term
          )
            return true;
          else return false;
        },
      ),
    }),
    onSubmit: () => {
      if (currentSet && currentTermIndex === currentSet.termCards.length - 1)
        setCurrentTermIndex(0);
      else {
        setCurrentTermIndex(currentTermIndex + 1);
      }

      formik.setValues({ termField: '' });
    },
  });

  const modifiedExampleStrArray =
    currentSet &&
    getModifiedStringArray(
      currentSet?.termCards[currentTermIndex]?.example,
      currentSet?.termCards[currentTermIndex]?.term,
    );

  return { formik, modifiedExampleStrArray, currentTermIndex };
}
