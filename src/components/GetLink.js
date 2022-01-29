import React from 'react';
import { useParams } from 'react-router';

const GetLink = () => {
    const {getLink} = useParams()
    return (
        <div style={{textAlign:'center'}}>
            <h1>Link Name: {getLink}</h1>
        </div>
    );
};

export default GetLink;