<template>
  <div
    class="container-fluid admin-inner-content mt-4"
    style="margin-left: -0.5%; max-width: 100%"
  >
    <h3 class="fw-bold mb-3">Sửa sản phẩm</h3>
    <form id="editProductForm">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Tên sản phẩm</label>
          <input
            id="editProductName"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Giá</label>
          <input
            id="editProductPrice"
            type="number"
            class="form-control"
            required
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Danh mục</label>
          <select id="editProductCategory" class="form-select"></select>
        </div>

        <div class="col-md-12">
          <label class="form-label">Mô tả</label>
          <textarea
            id="editProductDesc"
            class="form-control"
            rows="3"
          ></textarea>
        </div>

        <div class="col-md-6">
          <label class="form-label">Hình ảnh</label>
          <input
            id="editProductImage"
            type="file"
            class="form-control"
            accept="image/*"
          />
          <div class="mt-2">
            <img
              id="editPreviewImage"
              src=""
              alt="Preview"
              width="120"
              style="border-radius: 8px; object-fit: cover"
            />
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <h5 class="fw-bold">🔹 Biến thể sản phẩm</h5>
      <div class="table-responsive">
        <table class="table table-bordered table-sm align-middle">
          <thead class="table-light">
            <tr>
              <th>Màu</th>
              <th>Kích thước</th>
              <th>Chất liệu</th>
              <th>Giá</th>
              <th>Tồn kho</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="variantTableBody"></tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-3">
        <button
          type="button"
          class="btn btn-outline-primary"
          id="addVariantBtn"
        >
          + Thêm biến thể
        </button>
        <div class="fw-semibold">
          Tổng tồn kho: <span id="totalStock" class="text-danger">0</span>
        </div>
      </div>

      <button type="submit" class="btn btn-success">Lưu thay đổi</button>
    </form>
  </div>
</template>
