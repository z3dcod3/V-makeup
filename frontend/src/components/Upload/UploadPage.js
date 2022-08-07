import React, { useState } from 'react'
import './UploadPage.css'
// import Box from '@mui/material/Box';

const UploadPage = () => {

    const [ img, setImg ] = useState( null );
    const alter = "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600"

    if ( img == null ) {
        setImg( alter );
    }

    const onChangePicture = e => {
        if ( e.target.files.length ) {
            setImg( URL.createObjectURL( e.target.files[ 0 ] ), )
        }
    };


    return (
        <div>
            <div className="split left">
                <div className='centered'>
                    <div className="containers">
                        <div className="imageWrapper">
                            <img className="image" src={ img } alt="" />
                        </div>
                    </div>

                    <div className="content">
                        <button className="file-upload">
                            <input type="file" className="file-input" onChange={ onChangePicture } />Choose File
                        </button>
                        <button className="file-upload">Try Now</button>
                    </div>
                </div>
            </div>
            <div class="split right">
                <div class="centered">
                    <img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar man" />
                    <h2>John Doe</h2>
                    <p>Some text here too.</p>
                </div>
            </div>
        </div>
    )
}

export default UploadPage