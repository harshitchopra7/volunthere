import React from 'react';
import Apply from './Apply';
import banner4 from './banner4.png';
import { Company } from './ApplyCompany';

function OpportunitiesCard() {
    return (
        <div className="apply">
            <div className="container-fluid">
                <section id="banner">
                    <div className="banner-image-container">
                        <div className="banner-image">
                            <img alt="" src={banner4} />
                        </div>
                    </div>
                </section>
            </div>
            
            <Apply id={Company[0].id} name={Company[0].name} location={Company[0].location} position={Company[0].position} duration={Company[0].duration} />
        
            <Apply id={Company[0].id} name={Company[0].name} location={Company[0].location} position={Company[0].position} duration={Company[0].duration} />
            <Apply id={Company[0].id} name={Company[0].name} location={Company[0].location} position={Company[0].position} duration={Company[0].duration} />
            <Apply id={Company[0].id} name={Company[0].name} location={Company[0].location} position={Company[0].position} duration={Company[0].duration} />
            
        </div>
    );
}
export default OpportunitiesCard;