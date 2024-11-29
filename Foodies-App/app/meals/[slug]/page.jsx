function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Item</h1>
      <p>{params.slug}</p>
    </main>
  )
}

export default MealDetailsPage;