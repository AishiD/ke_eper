import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <p className='absolute text-center text-gray-400 bottom-0 w-full h-2.5'>
                Copyright © {new Date().getFullYear()}
                </p>
            </div>
        );
    }
}

export default Footer;
