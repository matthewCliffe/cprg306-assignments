'use client';

import React, { useEffect, useState } from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

async function fetchMealIdeas(ingredient: string): Promise<Meal[]> {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }: { ingredient: string }) {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  if (!ingredient) return null;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2 text-black" >Meals using {ingredient}</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border rounded p-2 flex items-center gap-2 bg-teal-500">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 object-cover rounded" />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}