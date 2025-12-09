<template>
  <div class="container-fluid admin-inner-content mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Danh sách đơn hàng</h3>
    </div>

    <div class="table-responsive">
      <table
        class="table table-bordered table-hover align-middle text-center w-100"
      >
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Mã đơn</th>
            <th>Khách hàng</th>
            <th>Địa chỉ</th>
            <th>Ngày đặt</th>
            <th>Trạng thái</th>
            <th>Thanh toán</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody id="orderTableBody"></tbody>
      </table>
    </div>
  </div>
</template>
