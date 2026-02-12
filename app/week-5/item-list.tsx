'use client';

import React, { useState } from "react";

import Item from "./item"

import Items from "./items.json"

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...Items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }

        if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }

        return 0;
        });

        const groupedItems = Items.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {} as Record<string, typeof Items>);

        const sortedGroupedItems = Object.keys(groupedItems).sort()
            .map((category) => ({
                category,
                items: groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)),
            }));

    return ( 
        <div>
            <h1 className="flex items-center justify-center gap-4 mb-4">
                <button 
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 border-2-white rounded shadow-md text-black ${
                        sortBy === "name" ? "bg-teal-500 text-white" : "bg-black-500"
                    }`}
                >
                    Sort by Name
                </button> 
                    
                <button 
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 border-2-white rounded shadow-md text-black ${
                        sortBy === "category" ? "bg-teal-500 text-white" : "bg-black-500"
                    }`}
                >
                    Sort by Category
                </button>

                <button 
                    onClick={() => setSortBy("groupCategory")}
                    className={`px-4 py-2 border-2-white rounded shadow-md text-black ${
                        sortBy === "groupCategory" ? "bg-teal-500 text-white" : "bg-black-500"
                    }`}
                >
                    Group by Category
                </button>
            </h1>
            
            {sortBy === "groupCategory" ? (
                <div className="space-y-6 px-4">
                    {sortedGroupedItems.map(({ category, items }) => (
                        <div key={category} className="border-2 rounded shadow-md w-1/4 p-2 mb-3 mx-auto bg-teal-700">
                            <h2 className="capitalize text-lg mb-2">{category}</h2>
                            <ul>
                                {items.map(item => (
                                    <li key={item.id}>
                                        {item.name} {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul>
                    {sortedItems.map((item) => (
                        <Item 
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}