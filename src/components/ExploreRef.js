import React, { useRef } from 'react';

const ExploreRef = () => {
    const userNameRef = useRef(null);

    const handleClick = () => {
        // console.log(userNameRef.current.value)
        userNameRef.current.focus();
    }


    return (
        <div>
            <input ref={userNameRef} type="text"/>
            <button onClick={handleClick}>Get Focus</button>
        </div>
    );
};

export default ExploreRef;