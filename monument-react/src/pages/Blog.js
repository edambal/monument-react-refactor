import React from 'react';
import '../pages/Landing.css'
import Header from '../components/Blog/BlogHeader';
import Article from '../components/Blog/Article';
import Sidebar from '../components/Blog/Sidebar';
import Comment from '../components/Blog/Comment';
import Footer from '../components/Blog/Footer';
import Navbar from '../components/Landing/Navbar'


const Blog= (props) => {
  return (
    <div class="App">
      <Navbar />
      <Header />
      <Article />
      <Sidebar />
      <Comment />
      <Footer />
    </div>

  )
}

export default Blog;