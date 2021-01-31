import React, { useEffect, useState } from 'react';
import { getAllPhotos } from './utils/fetchService';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getAllPhotos()
            .then(respData => {
                setAllPhotos(respData);
            })
    }, [])

    function addCartItem(img) {
        setCartItems(img);
    }

    function toggleFavorite(id) {
        const updatedPhotoArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhotoArr)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }