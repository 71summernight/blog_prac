import { Post } from '@/service/post';

export default function PostsGrid({posts}: {posts: Post[]}) {
    return (
        <ul>
            {posts.map((post) => <li key={post.path}>{post.title}</li>)}
        </ul>
    );
}

