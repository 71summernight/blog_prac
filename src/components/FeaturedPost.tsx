import React from 'react';
import PostsGrid from './PostsGrid';
import { getAllPosts } from '@/service/post';

export default async function FeaturedPost() {
    const posts = await getAllPosts();
    return (
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts}/>
        </section>
    );
}
