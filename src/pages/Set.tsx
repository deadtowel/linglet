import { FC } from 'react';

interface SetProps {
	id: number;
}

const Set: FC<SetProps> = ({ id }) => {
	return <div>This is set #{id}</div>;
};

export default Set;
