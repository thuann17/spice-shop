import { useState } from "react";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-background rounded-lg shadow-lg w-96 overflow-hidden">
        {/* Header */}
        <div className="bg-primary p-4 text-white flex justify-between items-center">
          <h5 className="font-semibold">Quên mật khẩu</h5>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-textMain mb-4">
            Nhập email của bạn để nhận liên kết đặt lại mật khẩu.
          </p>

          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-textMain">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-button text-white p-3 rounded-lg hover:bg-secondary transition"
            >
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
