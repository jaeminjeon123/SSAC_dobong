import React from 'react';

const BookInfo = ({ title, author, price, type,image }) => {
  return (
    <div className="book-info">
         {image && <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />}
    <h1>이번주 베스트셀러 </h1>
      <h2>{title}</h2>
      <h3>저자: {author}</h3>
      <p>판매가: ${price}</p>
      <p>구분: {type}</p>
    </div>
  );
};

export default BookInfo;
