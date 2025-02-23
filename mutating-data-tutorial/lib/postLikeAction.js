"use server"

import { revalidatePath } from "next/cache";
import { updatePostLikeStatus } from "./posts"

export async function toggleLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", 'layout');
}