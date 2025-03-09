const MenuCard = ({ id, name, position, onMoveUp, onMoveDown }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md relative">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-400 text-sm">Vị trí: {position}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={onMoveUp}
          className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm"
        >
          ↑
        </button>
        <button
          onClick={onMoveDown}
          className="bg-red-500 text-white px-2 py-1 rounded-md text-sm"
        >
          ↓
        </button>
      </div>
    </div>
  );
};
export default MenuCard;
