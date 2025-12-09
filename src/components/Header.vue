<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNavbar">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/"
        ><img src="/asset/logo.svg" alt=""
      /></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/product">Sản phẩm</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Bài viết</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Liên hệ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="about_us">Về chúng tôi</router-link>
          </li>
        </ul>

        <!-- Account dropdown -->
        <!-- Account dropdown -->
        <div class="dropdown me-3">
          <a
            class="btn btn-outline-primary dropdown-toggle"
            href="#"
            role="button"
            id="accountDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tài khoản
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="accountDropdown"
          >
            <li>
              <button
                class="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Đăng nhập
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Đăng ký
              </button>
            </li>
          </ul>
        </div>

        <!-- 🛒 Giỏ hàng -->
        <router-link to="/cart" class="btn btn-outline-secondary position-relative">
          <i class="bi bi-cart3"></i>
          <span
            id="cartCount"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >0</span
          >
        </router-link>
      </div>
    </div>
  </nav>

  <!-- 🔸 Modal Đăng nhập -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <div class="modal-header border-0">
          <h5 class="modal-title">Đăng nhập</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <form id="loginForm">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="loginEmail"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                id="loginPassword"
                required
              />
              <div class="text-end mt-1">
                <button
                  type="button"
                  id="forgotPassword"
                  class="btn btn-link p-0"
                >
                  Quên mật khẩu?
                </button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- 🔹 Modal Đăng ký -->
  <div class="modal fade" id="registerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <div class="modal-header border-0">
          <h5 class="modal-title">Đăng ký tài khoản</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <form id="registerForm">
            <div class="mb-3">
              <label class="form-label">Họ tên</label>
              <input
                type="text"
                class="form-control"
                id="registerName"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="registerEmail"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                id="registerPassword"
                required
              />
            </div>
            <button type="submit" class="btn btn-success w-100">
              Tạo tài khoản
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
