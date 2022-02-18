import React from 'react';
import TopHeader from '../TopHeader';
import PhotosView from './PhotosView';
import { useState } from 'react';

const PhotoHome = () => {
    const [search,setSearch] = useState('')
    return (
        <>
            <TopHeader setSearch={setSearch}/>
            <PhotosView searchUrl={search}/>
        </>
    );
};

export default PhotoHome;