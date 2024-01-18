import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div>
                <div className='bg-white rounded-md shadow-md p-10 w-60 m-4 float-left'><h1>Title</h1>
                <p>Lorem Ipsum</p></div>
            </div>
        );
    }
}

export default Note;
