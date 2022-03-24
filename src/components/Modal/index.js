import React from 'react';

function Modal({modalData, setModal}) {
    const {on, name, index, description, category} = modalData; 

    function closeModal(){
        setModal({...modalData, on: false});
    }

    return (
        <div className="modalBackdrop">
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                <img alt={name} src={require(`../../assets/large/${category}/${index}.jpg`)}  />
                <p>
                    P{description}
                </p>
                <button type="button" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;