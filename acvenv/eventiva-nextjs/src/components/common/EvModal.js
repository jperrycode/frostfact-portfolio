import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const EvModal = ({ setModalOpen, currentId, images }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(currentId - 1);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);

    };

    // Close modal event
    const closeEvModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="ev-modal">
            <div className="ev-modal-container">
                <button className="ev-close-btn" onClick={closeEvModal}>
                    <i><IoMdClose /></i>
                </button>
                <div className="ev-modal-img">
                    <Image src={images[currentImageIndex]?.src} alt={`Image ${currentImageIndex + 1}`} width={800} height={600} />
                    <p className="ev-counter">{currentImageIndex} of {images?.length}</p>
                </div>

            </div>

            <button className="ev-prev-button " onClick={prevImage}>
                <AiFillCaretLeft />
            </button>
            <button className="ev-next-button" onClick={nextImage}>
                <AiFillCaretRight />
            </button>

        </div >
    );
};

export default EvModal;