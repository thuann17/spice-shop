import { useState } from "react";

const notifications = [
  {
    id: 1,
    name: "Terry Franci",
    message: "requests permission to change",
    project: "Nganter App",
    time: "5 min ago",
    avatar: "https://i.pravatar.cc/40?img=1",
    online: true,
  },
  {
    id: 2,
    name: "Alena Franci",
    message: "requests permission to change",
    project: "Nganter App",
    time: "8 min ago",
    avatar: "https://i.pravatar.cc/40?img=2",
    online: true,
  },
  {
    id: 3,
    name: "Jocelyn Kenter",
    message: "requests permission to change",
    project: "Nganter App",
    time: "15 min ago",
    avatar: "https://i.pravatar.cc/40?img=3",
    online: true,
  },
  {
    id: 4,
    name: "Brandon Philips",
    message: "requests permission to change",
    project: "Nganter App",
    time: "1 hr ago",
    avatar: "https://i.pravatar.cc/40?img=4",
    online: false,
  },
  {
    id: 5,
    name: "Brandon Philips",
    message: "requests permission to change",
    project: "Nganter App",
    time: "1 hr ago",
    avatar: "https://i.pravatar.cc/40?img=4",
    online: false,
  },
  {
    id: 6,
    name: "Brandon Philips",
    message: "requests permission to change",
    project: "Nganter App",
    time: "1 hr ago",
    avatar: "https://i.pravatar.cc/40?img=4",
    online: false,
  },
];

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Nút mở thông báo */}
      <button
        className="relative p-2 text-gray-700 dark:text-white text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        🔔
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {notifications.length}
        </span>
      </button>

      {/* Dropdown thông báo */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Notification
            </h3>
            <button
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Danh sách thông báo */}
          <div className="max-h-72 overflow-y-auto">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-start gap-3 p-2 border-b last:border-none"
              >
                {/* Ảnh đại diện */}
                <div className="relative">
                  <img
                    src={notif.avatar}
                    alt={notif.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {/* Trạng thái online/offline */}
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                      notif.online ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </div>

                {/* Nội dung */}
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-semibold">{notif.name}</span>{" "}
                    {notif.message}{" "}
                    <span className="font-semibold text-blue-600">
                      {notif.project}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Nút xem tất cả */}
          <button className="w-full text-blue-600 py-2 mt-2 text-sm hover:underline">
            View All Notifications
          </button>
        </div>
      )}
    </div>
  );
};
export default Notification;
