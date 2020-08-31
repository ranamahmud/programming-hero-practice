import React from 'react';
import {useParams} from 'react-router-dom'
const FriendDetail = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h3>This is friend detail component</h3>
            <p>{friendId}</p>
        </div>
    );
};

export default FriendDetail;