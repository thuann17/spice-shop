import React from "react";

const Aside = () => {
    return (<>
        <aside className="col-span-2 bg-button p-4 h-[400px] overflow-y-auto rounded-lg scrollbar scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-300">
            <ul className="space-y-2">
                <li className="p-2 bg-secondary shadow-md rounded">Gia vị</li>
                <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
                <li className="p-2 bg-secondary shadow-md rounded">Nước dùng</li>
                <li className="p-2 bg-secondary shadow-md rounded">Tươi sống</li>
                <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
                <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
                <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
                <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
                <li className="p-2 bg-secondary shadow-md rounded">Đóng chai</li>
            </ul>
        </aside></>)
}
export default Aside;