import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCamera } from '@fortawesome/free-solid-svg-icons';
import profileIcon2 from '../../assets/img/profile_icon.jpg'

const ProfileAction = () => {
    return (
        <div className='profile_interfase'>
            <div className='box_interfase'>
                <div className='box_account'>
                    <div className='profile_icon2'>
                        <img src={profileIcon2} style={ { borderRadius: '50%' } } title='Profile' /> 
                        <div className='circle_background'><a className='camera_icon'><FontAwesomeIcon className='action-5' icon={faCamera} /></a></div>
                    </div>           
                    <div>
                        <div className='name_text'>Omar Cardenas</div>
                        <div className='email'>omarenriquect@gmail.com</div>
                        <div className='manage_account'>Manage your Google Account</div>
                    </div>
                </div>
                <div className='add_top'>
                    <a className='add_interfase'>
                        <FontAwesomeIcon icon={faUserPlus} style={ { color: '#5f6368', 'display': 'flex'} } />
                        <div className='add_account'>Add another Account</div>
                    </a>
                </div>
                <div className='sign-out_interfase'>
                    <div className='sign-out_account'>Sign out</div>
                </div>
                <div className='policyTerms_interfase'>
                    <a href='https://policies.google.com/privacy?hl=en' className='policyTerms_text'>Privacy Policy</a>
                    <span>•</span>
                    <a href='https://myaccount.google.com/termsofservice?hl=en' className='policyTerms_text'>Terms of Service</a>
                </div> 
            </div>
        </div>
    )
}

export default ProfileAction

