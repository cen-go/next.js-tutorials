"use client"

import { useFormState } from 'react-dom';

import FormSubmit from '@/components/FormSubmit';
import { createPost } from '@/lib/submitFormAction';

export default function NewPostPage() {
  const [formState, formAction] = useFormState(createPost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        {formState.errors?.length > 0 && (
          <ul className='form-errors'>
            {formState.errors.map(error => <li key={error}>{error}</li>)}
          </ul>
        )}
        <FormSubmit />
      </form>
    </>
  );
}
