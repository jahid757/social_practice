import React from 'react';
import Player from 'video-react/lib/components/Player';

const IVideo = ({videos}) => {
    return (
        <div className="col-md-3 col-sm-4">
            <div className="videoWrap">
                 <Player>
                    <source src={videos.videos.small.url} />
                </Player>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <div className="d-flex align-items-center">
                        <img className="profilePic" src={videos.userImageURL || 'https://i.ibb.co/rQB7jLg/avatar.jpg'} alt="User Profile" />
                        <span>{videos.user}</span>
                    </div>
                    <p><i className="fa-solid fa-eye"></i>{videos.views}</p>
                </div>
            </div>
        </div>
    );
};

export default IVideo;