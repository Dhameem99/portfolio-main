import React from 'react'

function Social() {
  return (
    <div className='home__social'>
        <a href="https://www.linkedin.com/in/dhameem-ansari-8203a5172" className='home__social-icon' target="_blank">
        <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/Dhameem99" className='home__social-icon' target= "_blank">
        <i className="uil uil-github"></i>
        </a>


        <a href="mailto:dhameem26@gmail.com" className='home__social-icon' target= "_blank">
        <i className="uil uil-envelope-alt"></i>
        </a>
    </div>
  )
}

export default Social