const MenuItem = ({ icon, text, isCollapsed }) => {
  return (
    <>
      <button className="flex items-center gap-3 w-full p-3 rounded-md text-white hover:bg-gray-700 transition-all">
        <span className="text-lg">{icon}</span>
        {!isCollapsed && <span>{text}</span>}
      </button>
    </>
  );
};
export default MenuItem;
