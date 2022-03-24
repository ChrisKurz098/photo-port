import React from 'react';

function Modal({modalData, toggleModal}) {
    const {on, name, index, description, category} = modalData; 

    return (
        <div className="modalBackdrop">
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                <img alt={name} src={require(`../../assets/large/${category}/${index}.jpg`)}  />
                <p>
                    P{description}
                </p>
                <button type="button" onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;