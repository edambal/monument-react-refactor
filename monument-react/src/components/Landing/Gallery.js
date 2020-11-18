import React from 'react';
import '../../../src/App.css';
import gallery1 from '../../images/gallery_1.jpg';
import gallery2 from '../../images/gallery_2.jpg';
import gallery3 from '../../images/gallery_3.jpg';
import gallery4 from '../../images/gallery_4.jpg';
import gallery5 from '../../images/gallery_5.jpg';
import gallery6 from '../../images/gallery_6.jpg'


const Gallery = () =>{

  var req = require.context("../../images", false, /.jpg/);
  const galleryImages = [];
  req.keys().map((image)=>{
    console.log("------------------");
    if(image.search('gallery') > 0)
        galleryImages.push(image);
  });
  
    

  return (
    
    <section id="gallery">
    <div class="wrap">
      <h2>Issue Twenty</h2>
      <h3>A visual guide to the Southwest</h3>
      <div class="masonry">        
        <img src={gallery1} alt="gallery1"/>
        <img src={gallery2} alt="gallery2"/>
        <img src={gallery3} alt="gallery3"/>
        <img src={gallery4} alt="gallery4"/>
        <img src={gallery5} alt="gallery5"/>
        <img src={gallery6} alt="gallery6"/>
      </div>
    </div>
    </section>
  )
}

export default Gallery;

