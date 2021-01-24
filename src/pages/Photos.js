import React, { useContext } from 'react';

import Image from '../components/Image'
import {Context} from '../Context'
import {getClass} from '../utils'

function Photos() {
        const {allPhotos} = useContext(Context);
        console.log(allPhotos)
        const photoElements = allPhotos.map((photo, index) => (
            <Image key={photo.id} img={photo} className={getClass(index)} />
        ))

    return (
        <main className="photos">
            {photoElements}
        </main>
    )
}

export default Photos;