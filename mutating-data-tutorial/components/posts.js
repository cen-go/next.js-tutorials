"use client"

import { useOptimistic } from 'react';
import Image from 'next/image';

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { toggleLikeStatus } from '@/lib/postLikeAction';

function Post({ post, likeUpdtAct }) {
  function imageLoader(config) { //config object automatically passed by next.js
    const urlStart = config.src.split("upload/")[0];
    const urlEnd = config.src.split("upload/")[1];
    const transformations = `w_200,q_${config.quality}`;
    return `${urlStart}upload/${transformations}/${urlEnd}`;
  }

   return (
     <article className="post">
       <div className="post-image">
         <Image
           loader={imageLoader}
           src={post.image}
           fill
           sizes='15vw'
           quality={50}
           alt={post.title}
         />
       </div>
       <div className="post-content">
         <header>
           <div>
             <h2>{post.title}</h2>
             <p>
               Shared by {post.userFirstName} on{" "}
               <time dateTime={post.createdAt}>
                 {formatDate(post.createdAt)}
               </time>
             </p>
           </div>
           <div>
             <form
               action={likeUpdtAct.bind(null, post.id)}
               className={post.isLiked ? "liked" : ""}
             >
               <LikeButton />
             </form>
           </div>
         </header>
         <p>{post.content}</p>
       </div>
     </article>
   );
}

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimistic] = useOptimistic(
    posts,
    (currentPosts, postId) => {
      const updatedPostIndex = currentPosts.findIndex(
        (post) => post.id === postId
      );
      if (updatedPostIndex === -1) {
        return currentPosts;
      }
      const updatedPost = { ...currentPosts[updatedPostIndex] };
      updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
      updatedPost.isLiked = !updatedPost.isLiked;
      const updatedPosts = [...currentPosts];
      updatedPosts[updatedPostIndex] = updatedPost;
      return updatedPosts;
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePostLikeStatus(postId) {
    updateOptimistic(postId);
    await toggleLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} likeUpdtAct={updatePostLikeStatus} />
        </li>
      ))}
    </ul>
  );
}
