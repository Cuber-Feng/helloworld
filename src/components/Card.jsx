import React, { useState, useEffect } from 'react';
import linkData from '../data/links.json';

const Card = () => {
    console.log("Current linkData:", linkData);
    return (
        <main>
            {linkData.map((section, index) => (
                <div key={index} className="iconset">
                    <h3>
                        {section.category}
                    </h3>
                    <>
                        {section.links.map((link, linkIndex) => (
                            <a
                                key={linkIndex}
                                href={link.url}
                                rel="noopener noreferrer"
                            >
                                <img className='icon' title={link.title} src={link.icon} />
                            </a>
                        ))}
                    </>
                </div>
            ))}
        </main>
    );
};

export default Card;

