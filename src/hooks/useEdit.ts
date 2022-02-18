import { ISet } from "../types/types";
import { useParams } from 'react-router-dom';
import useSets from "./useSets";

export default function useEdit(edit: boolean) {
  const { setId } = useParams();
  const { sets } = useSets();

  const plainSet: ISet = {
    title: '',
    description: '',
    termCards: [],
  }

  if (!edit) return { setId: setId || '', initialValues: plainSet };

  const foundSet = sets.find(set => set.id === setId)

  if (foundSet) return { setId: setId || '', initialValues: foundSet };
  else {
    console.error('Error: Set was not found!');
    return { setId: '', initialValues: plainSet };
  }
}
