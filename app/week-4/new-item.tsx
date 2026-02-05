'use client';

import React, { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [nameTouched, setNameTouched] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name || name.length < 2) {
            alert("Please enter a valid name with at least 2 characters.");
            setNameTouched(true);
            return;
        }
        const item = { name, quantity, category };
        console.log(item);  
        alert(`Submitted Product: ${name}, ${quantity}, ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form 
                onSubmit={handleSubmit} 
                className="bg-teal-500 p-8 rounded"
            >
                <label className="block">
                    Name: 
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        onBlur={() => setNameTouched(true)}
                        required
                        className={`mt-1 block w-full border rounded p-2 mb-3 ${
                        nameTouched && !name ? "border-red-500" : "border"}`}
                    />
                    {nameTouched && !name && (
                        <p className="text-red-500">Please Enter a Name.</p>
                    )}
                </label>

                <label className="block">
                    Quantity: 
                    <input 
                        type="number" 
                        min={1} 
                        max={99} 
                        value={quantity} 
                        onChange={(e) => setQuantity(Number(e.target.value))} 
                        required
                        className="mt-1 block w-full border rounded p-2 mb-3"
                    />
                </label>

                <label className="block">
                    Category: 
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full border rounded p-2 mb-10"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <button 
                    type="submit" 
                    disabled={!name || name.length < 2}

                    className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

