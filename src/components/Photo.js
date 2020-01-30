import React from 'react';

const Photo = props => (
    <li className='Photo'> 
      <img src={props.url} alt=''></img>
    </li>
  );
  
export default Photo;