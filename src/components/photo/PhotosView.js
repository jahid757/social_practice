import React, { useEffect, useState } from 'react';
import PhotoView from './PhotoView';

const PhotosView = ({searchUrl}) => {
    const [photos,setPhotos] = useState([]);

    useEffect(() => {
        const url = searchUrl || `https://pixabay.com/api/?key=25753131-a53ac03bd3ad1e68d97b08048`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPhotos([])
            setPhotos(data.hits)
        })
    }, [searchUrl]);

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