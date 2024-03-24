import React from 'react';


const FavoriteFood = ({ food }) => {
    return (
      <div>
        <p>My favorite food is <span style={{ color: 'red' }}>{food}</span>!</p>
      </div>
    );
  };
 

FavoriteFood.defaultProps = {
    
  food: 'Pizza' 
};

export default FavoriteFood;
