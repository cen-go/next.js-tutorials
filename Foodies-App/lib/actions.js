"use server"

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

function isTextInvalid(text) {
  return (!text || text.trim() === "" );
}

export async function ShareMeal(prevState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isTextInvalid(meal.title) ||
    isTextInvalid(meal.summary) ||
    isTextInvalid(meal.instructions) ||
    isTextInvalid(meal.creator) ||
    isTextInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0 ||
    !meal.creator_email.includes(".")
  ) {
    return {
      message: "Invalid input!"
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
  
}