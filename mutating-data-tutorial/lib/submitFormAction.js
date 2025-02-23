"use server"

import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';
import { uploadImage } from './cloudinary';
import { revalidatePath } from 'next/cache';

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("invalid title");
  }
  if (!content || content.trim().length === 0) {
    errors.push("invalid content");
  }
  if (!image || image.size === 0) {
    errors.push("invalid image");
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed. Post could not be created. Please try again later."
    );
  }

  const newPost = {
    title,
    content,
    imageUrl,
    userId: 1,
  };

  await storePost(newPost);
  revalidatePath("/", 'layout');
  redirect("/feed");
}