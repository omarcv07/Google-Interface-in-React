import React, { useState, Fragment, useEffect, useRef } from 'react';
import appIcon  from '../assets/img/icon_app.svg';
import profileIcon from '../assets/img/google_Profile.jpg';
import ProfileAction from '../components/layouts/ProfileAction.js';
import AppsAction from '../components/layouts/AppsAction.js';

const GoogleHeader = () => {
    const wrapperRef = useRef(null);
    
    const [showBoxProfile, setShowBoxProfile] = useState(false);
    const [showBoxApp, setShowBoxApp] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    })

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            return setShowBoxProfile(false) || setShowBoxApp(false);   
        };
    }

    return (
        <Fragment>
            <div ref={wrapperRef}>
                <div className='main-box' >
                    <div className='link-box'>
                        <a className='link-1' href='https://gmail.com/'>Gmail</a>
                        <a className='link-1' href='https://www.google.co.ve/imghp?hl=en&tab=ri&authuser=0&ogbl'>Images</a>  
                    </div>
                    <div className='icon_head'>  
                        <div className='tooltip'>
                            <img src={appIcon} className='action-3' style={ { opacity: '0.61' } } onClick={() => setShowBoxApp(!showBoxApp)} />
                            <span className='app_icon tooltiptext'>Google apps</span>
                        </div>
                    </div>
                        <div className='icon_head'>
                                <div className='tooltip'>
                                    <img src={profileIcon} className="action-4" style={{ borderRadius: '50%' }} onClick={() => setShowBoxProfile(!showBoxProfile)} />
                                        <div className='profile_icon tooltiptext'>
                                            <div>Google Account</div>
                                            <div className='text_lighter'>
                                                <div>Omar Cardenas</div>
                                                <div>omarenriquect@gmail.com</div>
                                            </div>
                                        </div>
                                </div>
                        </div> 
                </div>
                <div>
                    {showBoxApp && <AppsAction />}
                    {showBoxProfile && <ProfileAction />} 
                </div>
            </div>
        </Fragment>
    )
}

export default GoogleHeader