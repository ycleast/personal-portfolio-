// src/components/Blog.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock } from 'react-icons/fi';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app, you'd fetch from an API
        // For now, we'll use mock data
        const mockPosts = [
            {
                id: 1,
                title: "Getting Started with React Hooks",
                excerpt: "Learn how to use React Hooks to simplify your functional components.",
                date: "2023-10-15",
                readTime: "5 min read",
                slug: "getting-started-with-react-hooks"
            },
            {
                id: 2,
                title: "CSS Grid vs Flexbox",
                excerpt: "When to use Grid and when to stick with Flexbox for your layouts.",
                date: "2023-09-28",
                readTime: "8 min read",
                slug: "css-grid-vs-flexbox"
            },
            {
                id: 3,
                title: "Building Accessible Web Applications",
                excerpt: "Essential techniques to make your web apps accessible to everyone.",
                date: "2023-09-10",
                readTime: "10 min read",
                slug: "building-accessible-web-apps"
            }
        ];

        setPosts(mockPosts);
        setLoading(false);
    }, []);

    if (loading) return <div>Loading blog posts...</div>;

    return (
        <motion.section
            id="blog"
            className="section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2>Blog & Articles</h2>
            <div className="blog-grid">
                {posts.map(post => (
                    <motion.article
                        key={post.id}
                        className="blog-card"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="blog-header">
                            <h3>{post.title}</h3>
                            <div className="blog-meta">
                                <span><FiCalendar /> {post.date}</span>
                                <span><FiClock /> {post.readTime}</span>
                            </div>
                        </div>
                        <p>{post.excerpt}</p>
                        <a href={`/blog/${post.slug}`} className="read-more">Read more →</a>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
};

export default Blog;