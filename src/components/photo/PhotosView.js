import React, { useEffect, useState } from 'react';
import PhotoView from './PhotoView';

const PhotosView = () => {
    const [photos,setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            setPhotos(data.hits)
        })
    }, []);

    return (
        <div className="photosView container">
            <div className="row">
                {
                    photos.map(photo => <PhotoView photo={photo} key={photo.largeImageURL}/>)
                }
            </div>
        </div>
    );
};

export default PhotosView;