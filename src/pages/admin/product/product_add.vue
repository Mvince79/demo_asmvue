<template>
  <div
    class="container-fluid admin-inner-content mt-4"
    style="margin-left: -0.5%; max-width: 100%"
  >
    <h3>Thêm sản phẩm</h3>
    <form id="createProductForm">
      <div class="mb-3">
        <label class="form-label">Tên sản phẩm</label>
        <input id="productName" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Giá mặc định</label>
        <input id="productPrice" type="number" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Danh mục</label>
        <select id="productCategory" class="form-select"></select>
      </div>

      <div class="mb-3">
        <label class="form-label">Ảnh sản phẩm</label>
        <input
          id="productImage"
          type="file"
          class="form-control"
          accept="image/*"
        />
        <img id="previewImage" class="mt-2 rounded shadow-sm" width="120" />
      </div>

      <div class="mb-3">
        <label class="form-label">Mô tả</label>
        <textarea id="productDesc" class="form-control" rows="3"></textarea>
      </div>

      <!-- 🔹 Biến thể -->
      <div class="border rounded-3 p-3 bg-light mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h6 class="fw-bold mb-0">🧩 Biến thể sản phẩm</h6>
          <button
            type="button"
            id="addVariantBtn"
            class="btn btn-sm btn-primary"
          >
            + Thêm biến thể
          </button>
        </div>
        <table class="table table-sm align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th>Màu</th>
              <th>Kích cỡ</th>
              <th>Chất liệu</th>
              <th>Giá</th>
              <th>Tồn kho</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="variantTableBody"></tbody>
        </table>
        <small class="text-muted d-block mt-2">
          Tổng tồn kho: <span id="totalStock">0</span> sản phẩm
        </small>
      </div>

      <button type="submit" class="btn btn-success">Lưu sản phẩm</button>
    </form>
  </div>
</template>
