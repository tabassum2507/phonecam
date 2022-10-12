import React from 'react'
import PhoneCam from '../PhoneCam/phoneCam'

const home = () => {
  return (
    <div>

    <div className="container">
                <div className="text">
                    <h1>Capture !
                    </h1>
                    <form className="form">
                       
                        <PhoneCam />
                    </form>
                </div>
            </div>

    </div>
  )
}

export default home