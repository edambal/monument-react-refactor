import React from 'react';
import '../../../src/App.css';






const Gallery = () =>{

  var req = require.context("../../images", false, /.jpg/);
  const galleryImages = [];
  req.keys().map((image)=>{
    if(image.search('gallery') > 0)
        galleryImages.push(image);
  });
  
    

  

  return (
    
    <section id="gallery">
    <div class="wrap">
      <h2>Issue Twenty</h2>
      <h3>A visual guide to the Southwest</h3>
      <div class="masonry">        
      {
        galleryImages.map((image) => (
            <img src={'/images' + image.slice(1)} alt=""/>
        )) 
      }   
      </div>
    </div>
    </section>
  )
}

export default Gallery;

