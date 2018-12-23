import React from 'react';

const Display = ( { title, postsCount, body, upVote, downVote }) => {
    // console.log(props);
    return (
        <div className="">
            <h2>{title} </h2>
            <p>{postsCount}</p>
            <h2>{body}</h2>
            <button 
                style={{
                    backgroundColor: 'yellow',
                    borderRadius: 20,
                    fontSize: 40
                }}
            onClick={ () => upVote()}>+1</button> 
            <button 
            style={{
                backgroundColor: 'red'
            }}
            onClick={ () => downVote()}>-1</button>
        </div>
    )
}
export default Display;