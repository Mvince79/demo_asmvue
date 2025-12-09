<template>
  <section class="container mt-4">
    <h2 class="text-center fw-bold mb-5">Danh sách sản phẩm</h2>

    <div class="row g-4">
      <!-- SIDEBAR FILTER -->
      <aside class="col-md-3">
        <div class="filter-box p-4 rounded-4 shadow-sm bg-white">
          <h5 class="fw-semibold mb-4">Bộ lọc sản phẩm</h5>

          <!-- Danh mục -->
          <div class="mb-3">
            <label class="form-label fw-semibold small">Danh mục</label>
            <select id="filterCategory" class="form-select form-select-sm">
              <option value="">Tất cả</option>
            </select>
          </div>

          <!-- Giá -->
          <div class="mb-3">
            <label class="form-label fw-semibold small">Khoảng giá</label>
            <input
              type="number"
              id="minPrice"
              class="form-control form-control-sm mb-2"
              placeholder="Từ..."
            />
            <input
              type="number"
              id="maxPrice"
              class="form-control form-control-sm"
              placeholder="Đến..."
            />
          </div>

          <!-- Tìm kiếm -->
          <div class="mb-3">
            <label class="form-label fw-semibold small">Tìm kiếm</label>
            <input
              type="text"
              id="searchName"
              class="form-control form-control-sm"
              placeholder="Nhập tên sản phẩm..."
            />
          </div>

          <!-- Action -->
          <button id="applyFilter" class="btn btn-primary btn-sm w-100">
            Áp dụng
          </button>
          <button
            id="resetFilter"
            class="btn btn-outline-secondary btn-sm w-100 mt-2"
          >
            Đặt lại
          </button>
        </div>
      </aside>

      <!-- PRODUCT LIST -->
      <div class="col-md-9">
        <div id="productList" class="row g-4"></div>
      </div>
    </div>
  </section>
</template>
