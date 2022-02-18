import React, { useEffect, useState } from 'react';
import IVideo from './IVideo';

const IHome = ({searchUrl}) => {

    const url = searchUrl || `https://pixabay.com/api/videos/?key=25753131-a53ac03bd3ad1e68d97b08048`;
    const [videos,setVideos] =  useState([]);

    useEffect(() =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setVideos(data))
    },[url])

    return (
        <div className="initialHomeView container">
            <div className="row">
                {
                    videos.hits !== undefined ? 
                    videos.hits.map(video => 
                        <IVideo videos={video} key={video.picture_id}/>
                    )
                    : undefined
                }
            </div>
        </div>
    );
};

export default IHome;