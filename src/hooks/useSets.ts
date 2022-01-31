import { useEffect, useState, useCallback } from 'react';
import { ISet } from '../types/types';

export const useSets = () => {
    const [sets, setSets] = useState<ISet[]>([]);

    const getInitialSetsFromLocalStorage = useCallback((): void => {
        if (localStorage.getItem('sets') !== undefined) {
            const dataFromLocalStorage = localStorage.getItem('sets');

            if (dataFromLocalStorage) {
                setSets(JSON.parse(dataFromLocalStorage));
            }
        } else {
            localStorage.setItem('sets', JSON.stringify(sets));
        }
    }, []);

    useEffect(() => {
        getInitialSetsFromLocalStorage();
    }, []);

    useEffect(() => {
        localStorage.setItem('sets', JSON.stringify(sets));
    }, [sets]);

    const addSet = (newSet: ISet) => {
        setSets([...sets, { ...newSet, id: Date.now() }]);
    }

    const clearSets = () => {
        setSets([]);
    }

    return { sets, setSets, addSet, clearSets };
}