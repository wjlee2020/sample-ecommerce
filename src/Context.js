import React, { useEffect, useState } from 'react';
import {getAllPhotos} from './utils/fetchService';

const Context = React.createContext();

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        getAllPhotos()
            .then(respData => {
                setAllPhotos(respData);
            })
    }, [])

    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context }