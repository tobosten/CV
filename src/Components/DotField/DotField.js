import React from 'react';
import "./DotField.css"

function DotField({ text, title }) {
    return (
        <div className='fieldContainer'>
            <div className='sectionTitle'>{title}</div>
            <div className='sectionContainer'>
                <div className='dotContainer'>
                    <div className='dot' />
                </div>

                <div className='text'>{text}</div>
            </div>

        </div>
    )
}

export default DotField