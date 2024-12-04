"use client"

import { useFormState } from "react-dom";

import ImagePicker from "@/components/meals/ImagePicker";
import classes from "./page.module.css"
import { ShareMeal } from "@/lib/actions";
import MealFormSubmitBtn from "@/components/meals/MealFormSubmitBtn";

function ShareMealPage() { 
  const [ formState, formAction ] = useFormState(ShareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal that you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" name="summary" id="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              name="instructions"
              id="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          {formState.message && <p>{formState.message}</p>}
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <MealFormSubmitBtn />
          </p>
        </form>
      </main>
    </>
  );
}

export default ShareMealPage;