/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
import './Value.css';

function Value() {
    return (
        <div className="value">
            <h2>OUR VALUES</h2>
            <div className='row'>
                <div className='box'>
                    <div>
                        <img src="/lightbulb-o.png" alt="light bulb" />
                    </div>
                    <div>
                        <h3>INNOVATIVE</h3>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <img src="/bank.png" alt="bank" />
                    </div>
                    <div>
                        <h3>LOYALTY</h3>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Impedit similique eum itaque facere temporibus dolores.
                    </div>
                </div>
                <div className='box' style={{ background: '#5596c2', outline: '3px solid #3b7ba8' }}>
                    <div>
                        <img src="/balance-scale.png" alt="balance-scale" />
                    </div>
                    <div>
                        <h3>RESPECT</h3>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequatur, sit? Tenetur et neque quod incidunt!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Value;
