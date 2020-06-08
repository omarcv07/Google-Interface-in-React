import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as GoogleMicrophone } from '../assets/img/google_microphone.svg'

const GoogleInput = () => {
    return (
        <form className='GoogleForm'>
            <label className='action-1'>
                <FontAwesomeIcon icon={faSearch} style={ {fontSize: '14px', color: 'rgb(115, 115, 115)', marginRight: '5px' } } />
            </label>
                <input
                    type='text'    
                    className='style detail'             
                    placeholder='Search Google or type a URL'
                />
            <label className='action-2'>
                <GoogleMicrophone style={ {cursor: 'pointer'} } title='Search by voice' />
            </label>
        </form>
    )
}

export default GoogleInput