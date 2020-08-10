import React, { Fragment } from 'react'
import { ReactComponent as GooglePhoto } from './assets/img/Google_2015_logo.svg'
import GoogleInput from './components/GoogleInput.js'
import GoogleHeader from './components/GoogleHeader.js'

const App = () => {
  return (
    <Fragment>
      <div className='container'>
          <header className='main-head'>
            <div>
              <GoogleHeader />  
            </div>
          </header>
          <div className='logo'>
            <GooglePhoto className='google' title='Google'/>                
          </div>
          <div>
            <GoogleInput />
          </div>
      </div>
    </Fragment>
  )
}

export default App
