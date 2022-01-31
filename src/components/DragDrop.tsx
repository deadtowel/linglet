import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function DragDrop() {
	const [file, setFile] = useState<any>(null);
	const handleChange = (file: any) => {
		console.log(file);

		setFile(file);
	};
	return (
		<FileUploader handleChange={handleChange} name='file' types={fileTypes} />
	);
}

export default DragDrop;
