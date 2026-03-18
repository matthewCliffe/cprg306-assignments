'use client';

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem: {
    name: string;
    quantity: number;
    category: string;
  }) => {
    const itemWithId = {
      ...newItem,
      id: Date.now().toString(),
    };

    setItems([...items, itemWithId]);
  };

  return (
    <main className="bg-white">
      <h1 className="text-2xl font-bold mb-2 text-center text-black">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}