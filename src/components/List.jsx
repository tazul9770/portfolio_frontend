import { useState } from "react";

const List = ({items}) => {

    const [selectIndx, setSelectIndx] = useState(-1);

    return (
        <div className="m-7">
            {items.map((fruit, index) => (
                <ul>
                    <li className={selectIndx === index ? "text-blue-700":"text-red-600"} onClick={() => setSelectIndx(index)}>{fruit}</li>
                </ul>
            ))}
        </div>
    );
};

export default List;