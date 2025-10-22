import React from 'react';
import { Link } from 'react-router-dom';


export default function ToyCard({toy}){
return (
<div className="card w-80 bg-base-100 shadow-md">
<figure><img src={toy.pictureURL} alt={toy.toyName} className="h-48 object-cover"/></figure>
<div className="card-body">
<h2 className="card-title">{toy.toyName}</h2>
<p>Price: ${toy.price}</p>
<p>Rating: {toy.rating} ⭐</p>
<p>Available: {toy.availableQuantity}</p>
<div className="card-actions justify-end">
<Link to={`/toy/${toy.toyId}`} className="btn btn-primary">View More</Link>
</div>
</div>
</div>
);
}