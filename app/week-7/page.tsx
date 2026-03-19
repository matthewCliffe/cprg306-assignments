'use client';

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem: { name: string; quantity: number; category: string }) => {
    const itemWithId = { ...newItem, id: Date.now().toString() };
    setItems([...items, itemWithId]);
  };

  const handleItemSelect = (item: { name: string }) => {
    const cleanName = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2011-\u26FF])/g, "")
      .trim();
    setSelectedItemName(cleanName);
  };

  return (
    <main className="bg-white flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-center text-black">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}