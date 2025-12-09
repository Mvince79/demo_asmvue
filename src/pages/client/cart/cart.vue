<template>
  <div class="container py-4">
    <h3 class="mb-4">Giỏ hàng của bạn</h3>

    <table class="table table-hover align-middle">
      <thead class="table-light">
        <tr>
          <th>Ảnh</th>
          <th>Tên</th>
          <th>Giá</th>
          <th class="text-center">Số lượng</th>
          <th>Tổng</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="cartTableBody"></tbody>
    </table>

    <div class="d-flex justify-content-between align-items-center mt-4">
      <h5>
        Tổng cộng: <span id="cartTotal" class="text-danger fw-bold">0 ₫</span>
      </h5>
      <router-link to="/checkout" class="btn btn-primary px-4">Tiến hành thanh toán</router-link>
    </div>
  </div>
</template>
