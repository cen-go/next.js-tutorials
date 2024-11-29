import Link from "next/link";

function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <div>
        <Link href="/">Home</Link> 
        <Link href="/meals/share">Share</Link>   
      </div>
      <div>
      <Link href="/meals/meal-1">Meal 1</Link> 
      </div>
      <div>
      <Link href="/meals/meal-2">Meal 2</Link> 
      </div>
    </main>
  )
}

export default MealsPage;