import { Button, Card, CardContent } from '@mui/material';
import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSets } from '../hooks/useSets';
import { ISet } from '../types/types';

interface LearnSetProps {}

const LearnSet: FC<LearnSetProps> = () => {
  const { setId } = useParams();

  const { sets } = useSets();

  const currentSet: ISet | undefined = setId
    ? sets.find((set) => set.id === +setId)
    : undefined;

  const [currentTermIndex, setCurrentTermIndex] = useState<number>(0);

  const prevBtnClickHandler = () => {
    if (currentSet && currentTermIndex === 0)
      setCurrentTermIndex(currentSet.termCards.length - 1);
    else {
      setCurrentTermIndex(currentTermIndex - 1);
    }
  };

  const nextBtnClickHandler = () => {
    if (currentSet && currentTermIndex === currentSet.termCards.length - 1)
      setCurrentTermIndex(0);
    else {
      setCurrentTermIndex(currentTermIndex + 1);
    }
  };

  return (
    <div>
      <h2>ID: {currentSet?.id}</h2>
      <h2>Title: {currentSet?.title}</h2>
      <p>Description: {currentSet?.description}</p>
      <Button onClick={prevBtnClickHandler}>Prev</Button>
      <Card variant='outlined'>
        <CardContent>
          <h3>Term: {currentSet?.termCards[currentTermIndex]?.term}</h3>
          <h4>
            Definition: {currentSet?.termCards[currentTermIndex]?.definition}
          </h4>
        </CardContent>
      </Card>
      <Button onClick={nextBtnClickHandler}>Next</Button>
    </div>
  );
};

export default LearnSet;
