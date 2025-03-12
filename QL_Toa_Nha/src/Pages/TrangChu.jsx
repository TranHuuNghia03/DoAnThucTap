import React from "react";

const TrangChu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        Quản Lý Tòa Nhà
      </header>

      {/* Body */}
      <main className="flex-1 p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Chào mừng đến với hệ thống
          </h2>
          <p className="text-gray-700">
            Ứng dụng giúp quản lý tòa nhà hiệu quả với các tính năng như kiểm
            soát ra vào, quản lý dịch vụ, phản hồi cư dân...
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 Quản Lý Tòa Nhà. All rights reserved.
      </footer>
    </div>
  );
};

export default TrangChu;
