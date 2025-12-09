<template>
  <div class="container-fluid admin-inner-content mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Danh sách người dùng</h3>
      <a href="#/user_add" class="btn btn-success">+ Thêm người dùng</a>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle text-center">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody id="user-list"></tbody>
      </table>
    </div>
  </div>
</template>
