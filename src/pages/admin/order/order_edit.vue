<template>
  <div class="container-fluid admin-inner-content mt-4">
    <h3 class="fw-bold mb-3">🧾 Chi tiết / Sửa đơn hàng</h3>

    <!-- Thông tin cơ bản -->
    <div class="card p-3 mb-3 shadow-sm">
      <div class="row">
        <div class="col-md-6">
          <p><strong>Mã đơn:</strong> <span id="orderId"></span></p>
          <p><strong>Khách hàng:</strong> <span id="orderUser"></span></p>
          <p><strong>Địa chỉ:</strong> <span id="orderAddress"></span></p>
        </div>
        <div class="col-md-6">
          <p><strong>Ngày đặt:</strong> <span id="orderDate"></span></p>
          <p><strong>Thanh toán:</strong> <span id="orderPayment"></span></p>
          <p>
            <strong>Trạng thái:</strong>
            <select
              id="orderStatus"
              class="form-select form-select-sm d-inline-block w-auto"
            >
              <option value="0">Chờ xử lý</option>
              <option value="1">Đã xác nhận</option>
              <option value="2">Đang giao</option>
              <option value="3">Hoàn tất</option>
            </select>
          </p>
        </div>
      </div>
    </div>

    <!-- Bảng chi tiết sản phẩm -->
    <div class="card p-3 mb-3 shadow-sm">
      <h5 class="fw-bold mb-2">📦 Sản phẩm trong đơn hàng</h5>
      <div class="table-responsive">
        <table class="table table-bordered align-middle text-center">
          <thead class="table-secondary">
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Biến thể</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody id="orderDetailTableBody"></tbody>
        </table>
      </div>
    </div>

    <!-- Tổng tiền -->
    <div class="text-end fs-5 mb-3">
      <strong>Tổng cộng:</strong>
      <span id="orderTotal" class="text-danger fw-bold"></span>
    </div>

    <div class="d-flex gap-2">
      <button class="btn btn-success" id="saveOrderBtn">💾 Lưu thay đổi</button>
      <a class="btn btn-secondary" href="#/order_list">⬅️ Quay lại</a>
    </div>
  </div>
</template>
