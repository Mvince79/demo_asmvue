<template>
  <body class="bg-light">
    <div
      class="container-fluid admin-inner-content mt-4"
      style="margin-left: -0.5%; max-width: 600px"
    >
      <h3>Sửa người dùng</h3>
      <form id="editUserForm">
        <input type="hidden" id="editUserId" />

        <div class="mb-3">
          <label class="form-label">Họ tên</label>
          <input id="editUserName" type="text" class="form-control" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            id="editUserEmail"
            type="email"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Số điện thoại</label>
          <input id="editUserPhone" type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input
            id="editUserPassword"
            type="password"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Vai trò</label>
          <select id="editUserRole" class="form-select">
            <option value="0">Khách hàng</option>
            <option value="1">Admin</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  </body>
</template>
