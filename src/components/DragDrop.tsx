import { FC, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function DragDrop() {
  const [file, setFile] = useState<any>(null);
  const handleChange = (file: any) => {
    console.log(file);

    setFile(file);
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name='file'
      types={fileTypes}
      children={
        <div
          style={{
            width: '100%',
            height: '100%',
            outline: '3px dashed lightblue',
            cursor: 'pointer',
            color: 'lightblue',
            backgroundColor: 'white',
          }}
        >
          Drag Drop File
        </div>
      }
    />
  );
}

export default DragDrop;
