import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: 'Getting Started with React Three Fiber',
    excerpt: 'Learn how to create amazing 3D experiences on the web using React Three Fiber...',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Development',
    image: 'https://via.placeholder.com/800x400',
    tags: ['React', '3D', 'WebGL']
  },
  {
    title: 'The Power of GSAP Animations',
    excerpt: 'Explore the capabilities of GSAP for creating smooth and performant web animations...',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Animation',
    image: 'https://via.placeholder.com/800x400',
    tags: ['GSAP', 'Animation', 'JavaScript']
  },
  {
    title: 'Building Responsive Layouts with Tailwind CSS',
    excerpt: 'A comprehensive guide to creating responsive and maintainable layouts using Tailwind CSS...',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'CSS',
    image: 'https://via.placeholder.com/800x400',
    tags: ['Tailwind', 'CSS', 'Responsive Design']
  },
  {
    title: 'Modern State Management in React',
    excerpt: 'Comparing different state management solutions in the React ecosystem...',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Development',
    image: 'https://via.placeholder.com/800x400',
    tags: ['React', 'State Management', 'JavaScript']
  }
];

const Blog = () => {
  const postRefs = useRef([]);

  useEffect(() => {
    postRefs.current.forEach((post, index) => {
      gsap.from(post, {
        scrollTrigger: {
          trigger: post,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        {/* Featured Post */}
        <div 
          ref={el => postRefs.current[0] = el}
          className="mb-16"
        >
          <div className="card overflow-hidden">
            <div className="relative">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-primary text-white rounded-full text-sm">
                  {blogPosts[0].category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{blogPosts[0].date}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPosts[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="btn">
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={index}
              ref={el => postRefs.current[index + 1] = el}
              className="card overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium">
                  Read More
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;