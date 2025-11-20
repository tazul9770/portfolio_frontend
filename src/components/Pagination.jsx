import { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex justify-center m-4">
            {Array.from({length:4}, (_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrentPage(i+1)}
                    className={`px-2 py-1 rounded-md mx-1 cursor-pointer ${
                        currentPage === i+1
                        ? "bg-blue-600 text white"
                        : "bg-gray-300"
                    }`}
                >
                    {i+1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;