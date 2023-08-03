import React from 'react';
import { Chrono } from 'react-chrono';
import { timeline } from '../../models/db';
import './Roadmap.css'

import { FaMapSigns } from 'react-icons/fa'

const Roadmap = () => {

    return (
        <div className='containers roadmap'>
            <div>
                <h2 className='roadmaph2'>Roadmap <FaMapSigns /></h2>
            </div>
            <div className='custom-chrono' style={{ width: "100%", height: "100%" }}>
                <Chrono
                    items={timeline}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={150}
                    cardWidth={300}
                    activeItemIndex={false}
                    hideControls={true}
                    theme={{
                        cardBgColor: '#f9fafa', // Replace with your desired background color
                        cardShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                        cardDetailsColor: 'rgba(0, 0, 0, 0.664)',
                        primary: '#00ADF1',
                        titleColor: 'black',
                        cardTitleColor: 'black',
                        cardSubtitleColor: 'rgba(0, 0, 0, 0.664)',
                        detailsColor: "red"
                    }}
                />
            </div>
        </div>
    )
}

export default Roadmap