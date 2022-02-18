import React, { useState } from 'react';
import LargeImagePreview from './LargeImagePreview';

const PhotoView = ({photo}) => {

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [largeImg,setLargeImg] = useState('');

    const openModal = (largeImg) => {
        setIsModalOpen(true);
        setLargeImg(largeImg);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <div className="col-md-3 col-sm-4">
            <div className="videoWrap">
                 <img onClick={() => openModal(photo.largeImageURL)} src={photo.previewURL} alt="" style={{height:'190px'}}/>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <div className="d-flex align-items-center">
                        <img className="profilePic" src={photo.userImageURL || 'https://i.ibb.co/rQB7jLg/avatar.jpg'} alt="User Profile" />
                        <span>{photo.user}</span>
                    </div>
                    <p><i className="fa-solid fa-eye"></i>{photo.views}</p>
                </div>
            </div>
            <LargeImagePreview openModal={isModalOpen} closeModal={closeModal} largeImg={largeImg}/>
        </div>
        
    );
};

export default PhotoView;