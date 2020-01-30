import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = props => {
  const results = props.data;
  
// display photos
let photos=[];
 
if (results.length > 0) {

   photos = results.map( photos => (
      <Photo url={`https://farm${photos.farm}.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id} />
     )
   ); 
} 
else {
      photos = <NotFound />
};
  

return (
        <div className="photo-container">
           <ul>
            {photos} 
          </ul>
        </div>
   );
    
}

export default PhotoContainer;