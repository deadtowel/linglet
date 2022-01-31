import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSets } from '../hooks/useSets';
import { ISet } from '../types/types';

interface SetProps {
	id?: number;
}

const Set: FC<SetProps> = () => {
	const { setId } = useParams();

	const { sets } = useSets();

	const currentSet: ISet | undefined = setId
		? sets.find((set) => set.id === +setId)
		: undefined;

	return (
		<div>
			<h2>Set with {currentSet?.id} id</h2>
			<h2>Title: {currentSet?.title}</h2>
			<h2>It contains {currentSet?.cardsAmount} cards</h2>
			<p>Descriptiom: {currentSet?.description}</p>
		</div>
	);
};

export default Set;
