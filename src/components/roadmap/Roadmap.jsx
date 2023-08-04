import React from 'react';
import { Chrono } from 'react-chrono';
import { timeline } from '../../models/db';
import './Roadmap.css'

import { FaMapSigns } from 'react-icons/fa'

const Roadmap = () => {

    return (
        <div className='roadmap' id='roadmap'>
            <div>
                <h2 className='roadmaph2 containers'>Roadmap <FaMapSigns /></h2>
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
                        cardBgColor: '#FCC69C',
                        cardDetailsColor: 'rgba(0, 0, 0, 0.664)',
                        primary: '#00ADF1',
                        titleColor: '#f9faf9',
                        cardTitleColor: 'black',
                        cardSubtitleColor: 'rgba(0, 0, 0, 0.664)',
                    }}
                />
            </div>
        </div>
    )
}

export default Roadmap