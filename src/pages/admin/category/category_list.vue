<template>
  <div class="container-fluid admin-inner-content mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Danh sách danh mục</h3>
      <a href="#/category_add" class="btn btn-success">+ Thêm danh mục</a>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle text-center">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Tên danh mục</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody id="category-list"></tbody>
      </table>
    </div>
  </div>
</template>
