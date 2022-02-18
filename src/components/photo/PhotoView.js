import React from 'react';

const PhotoView = ({photo}) => {
    return (
        <div className="col-md-3 col-sm-4">
            <div className="videoWrap">
                 <img src={photo.previewURL} alt="" />
                <div className="d-flex justify-content-between align-items-center py-1">
                    <div className="d-flex align-items-center">
                        <img className="profilePic" src={photo.userImageURL || 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'} alt="User Profile" />
                        <span>{photo.user}</span>
                    </div>
                    <p><i className="fa-solid fa-eye"></i>{photo.views}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoView;