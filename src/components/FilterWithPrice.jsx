import { useState } from "react";

const FilterWithPrice = () => {
    const [priceRange, setPriceRange] = useState([0, 100]);
    const handlePriceChange = (index, value) => {
        setPriceRange(prev => {
            const newPrice = [...prev]
            newPrice[index] = value
            return newPrice
        })
    }
    return (
        <div className="bg-gray-100 max-w-md mx-auto p-5 rounded-2xl shadow-lg">
            <div className="space-x-2">
                <p className="mb-2">Min Price</p>
                <input 
                    type="number" 
                    min="0"
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-1 ring-blue-500 focus:ring-2 focus:ring-blue-500" 
                />

                <input 
                    type="range" 
                    min="0"
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                    step="10"
                    className="w-30 accent-blue-500 cursor-pointer"
                />
                
                <br />
                <p className="mt-2">Max Price</p>
                <input 
                    type="number" 
                    min={priceRange[1]}
                    max="0"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                    className="mt-4 w-24 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-1 ring-blue-500 focus:ring-2 focus:ring-blue-500" 
                />

                <input 
                    type="range" 
                    min={priceRange[1]}
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                    step="10"
                    className="w-30 accent-blue-500 cursor-pointer"
                />

            </div>
        </div>
    );
};

export default FilterWithPrice;