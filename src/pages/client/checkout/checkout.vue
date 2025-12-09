<template>
  <div class="container py-4">
    <h3 class="mb-4">Thanh toán</h3>

    <div class="row">
      <!-- 🧾 Form thanh toán -->
      <div class="col-lg-7">
        <form id="checkoutForm" class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Họ tên</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" required />
          </div>
          <div class="col-12">
            <label class="form-label">Địa chỉ giao hàng</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Phương thức thanh toán</label>
            <select class="form-select" required>
              <option value="">Chọn phương thức...</option>
              <option>Thanh toán khi nhận hàng (COD)</option>
              <option>Chuyển khoản ngân hàng</option>
            </select>
          </div>

          <div class="col-12 text-end mt-3">
            <button type="submit" class="btn btn-success px-4">
              Xác nhận đơn hàng
            </button>
          </div>
        </form>
      </div>

      <!-- 📦 Tóm tắt đơn hàng -->
      <div class="col-lg-5">
        <div class="card shadow-sm">
          <div class="card-header bg-light fw-bold">🧾 Tóm tắt đơn hàng</div>
          <div class="card-body" id="orderSummary">
            <div class="d-flex justify-content-between">
              <span>Tổng sản phẩm:</span>
              <span id="summaryCount">0</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Tổng tiền hàng:</span>
              <span id="summarySubtotal">0 ₫</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>Phí vận chuyển:</span>
              <span id="summaryShipping">0 ₫</span>
            </div>
            <div class="d-flex justify-content-between">
              <span>VAT (10%):</span>
              <span id="summaryVat">0 ₫</span>
            </div>
            <hr />
            <div
              class="d-flex justify-content-between fw-bold text-danger fs-5"
            >
              <span>Tổng thanh toán:</span>
              <span id="summaryTotal">0 ₫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
