<template>
  <div
    class="sidebar bg-dark text-white p-2"
    style="width: 250px; height: 100vh; position: fixed"
  >
    <div class="text-center p-3">
      <a href="/admin_index.html">
        <img
          src="/asset/logo.svg"
          alt="Smart Blinds Logo"
          class="img-fluid"
          style="max-height: 60px"
        />
      </a>
    </div>

    <a href="#" class="d-block py-2 px-3 text-white"
      ><i class="bi bi-speedometer2"></i> Tổng quan</a
    >

    <!-- Products -->
    <a
      class="d-block py-2 px-3 text-white"
      data-bs-toggle="collapse"
      href="#menuProducts"
      role="button"
      aria-expanded="false"
    >
      <i class="bi bi-box-seam"></i> Sản phẩm
    </a>
    <div class="collapse" id="menuProducts">
      <ul class="list-unstyled ps-4">
        <li>
          <router-link to="/product_list" class="text-white d-block py-1"
            >Danh sách sản phẩm</router-link
          >
        </li>
        <li>
          <router-link to="product_add" class="text-white d-block py-1"
            >Thêm sản phẩm</router-link
          >
        </li>
      </ul>
    </div>

    <!-- Categories -->
    <a
      class="d-block py-2 px-3 text-white"
      data-bs-toggle="collapse"
      href="#menuCategories"
      role="button"
      aria-expanded="false"
    >
      <i class="bi bi-tags"></i> Danh mục
    </a>
    <div class="collapse" id="menuCategories">
      <ul class="list-unstyled ps-4">
        <li>
          <router-link to="category_list" class="text-white d-block py-1"
            >Danh sách danh mục</router-link
          >
        </li>
        <li>
          <router-link to="category_add" class="text-white d-block py-1"
            >Thêm danh mục</router-link
          >
        </li>
      </ul>
    </div>

    <!-- Blog -->
    <a
      class="d-block py-2 px-3 text-white"
      data-bs-toggle="collapse"
      href="#menuBlog"
      role="button"
      aria-expanded="false"
    >
      <i class="bi bi-journal-text"></i> Blog / Bài viết
    </a>
    <div class="collapse" id="menuBlog">
      <ul class="list-unstyled ps-4">
        <li>
          <router-link to="blog_list" class="text-white d-block py-1"
            >Danh sách bài viết</router-link
          >
        </li>
        <li><router-link to="blog_add" class="text-white d-block py-1">Thêm bài viết</router-link></li>
      </ul>
    </div>

    <!-- Users -->
    <a
      class="d-block py-2 px-3 text-white"
      data-bs-toggle="collapse"
      href="#menuUsers"
      role="button"
      aria-expanded="false"
    >
      <i class="bi bi-people"></i> Người dùng
    </a>
    <div class="collapse" id="menuUsers">
      <ul class="list-unstyled ps-4">
        <li>
          <router-link to="user_list" class="text-white d-block py-1"
            >Danh sách người dùng</router-link
          >
        </li>
        <li>
          <router-link to="user_add" class="text-white d-block py-1"
            >Thêm người dùng</router-link
          >
        </li>
      </ul>
    </div>

    <!-- Orders -->
    <a
      class="d-block py-2 px-3 text-white"
      data-bs-toggle="collapse"
      href="#menuOrders"
      role="button"
      aria-expanded="false"
    >
      <i class="bi bi-cart-check"></i> Đơn hàng
    </a>
    <div class="collapse" id="menuOrders">
      <ul class="list-unstyled ps-4">
        <li>
          <router-link to="order_list" class="text-white d-block py-1"
            >Danh sách đơn hàng</router-link
          >
        </li>
        <!-- <li>
          <router-link to="order_edit" class="text-white d-block py-1">Xem chi tiết đơn</router-link>
        </li> -->
      </ul>
    </div>

    <!-- Statistics -->
    <a
      class="d-block py-2 px-3 text-white"
      data-bs-toggle="collapse"
      href="#menuStatistics"
      role="button"
      aria-expanded="false"
    >
      <i class="bi bi-bar-chart-line"></i> Thống kê
    </a>
    <div class="collapse" id="menuStatistics">
      <ul class="list-unstyled ps-4">
        <li><router-link to="" class="text-white d-block py-1">Doanh thu</router-link></li>
      </ul>
    </div>
  </div>
</template>
