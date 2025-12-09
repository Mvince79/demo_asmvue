<template>
  <body class="bg-light">
    <div
      class="container-fluid admin-inner-content mt-4"
      style="margin-left: -0.5%; max-width: 600px"
    >
      <h3>Thêm người dùng</h3>
      <form id="createUserForm">
        <div class="mb-3">
          <label class="form-label">Họ tên</label>
          <input id="userName" type="text" class="form-control" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input id="userEmail" type="email" class="form-control" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Số điện thoại</label>
          <input id="userPhone" type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input
            id="userPassword"
            type="password"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Vai trò</label>
          <select id="userRole" class="form-select">
            <option value="0">Khách hàng</option>
            <option value="1">Admin</option>
          </select>
        </div>

        <button type="submit" class="btn btn-success">Thêm</button>
      </form>
    </div>
  </body>
</template>
