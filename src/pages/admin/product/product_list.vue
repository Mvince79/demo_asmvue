<template>
  <div class="container-fluid admin-inner-content mt-4">
    <h3>Danh sách sản phẩm</h3>
    <div class="text-end mb-3">
      <a href="#/product_add" class="btn btn-success btn-sm">+ Thêm sản phẩm</a>
    </div>

    <table class="table table-striped align-middle">
      <thead class="table-light">
        <tr>
          <th>Ảnh</th>
          <th>Tên</th>
          <th>Danh mục</th>
          <th>Giá</th>
          <th>Tồn kho</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="productTableBody"></tbody>
    </table>
  </div>
</template>
