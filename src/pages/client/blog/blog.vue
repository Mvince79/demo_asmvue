<template>
  <div class="container" style="margin-top: 80px;">
    <div class="row">
      <!-- Danh sách bài viết -->
      <div class="col-lg-8">
        <h2 class="fw-bold mb-4">Tin tức & Bài viết mới nhất</h2>

        <!-- Card bài viết -->
        <div
          v-for="post in posts"
          :key="post.id"
          class="card mb-4 shadow-sm border-0 rounded-3"
        >
          <div class="row g-0 align-items-center">
            <div class="col-md-4">
              <img
                :src="post.image"
                class="img-fluid rounded-start"
                alt="Banner bài viết"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-semibold">{{ post.title }}</h5>
                <p class="card-text text-muted fs-6 mb-2">
                  <i class="bi bi-calendar3"></i> {{ post.date }} •
                  <i class="bi bi-person"></i> {{ post.author }} •
                  <i class="bi bi-clock"></i> {{ post.readTime }} phút đọc
                </p>
                <p class="card-text">{{ post.summary }}</p>
                <router-link
                  :to="`/post/${post.id}`"
                  class="btn btn-primary btn-sm"
                >
                  Xem chi tiết
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <nav>
          <ul class="pagination justify-content-center mt-4">
            <li class="page-item">
              <a class="page-link" href="#">Trước</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Tiếp</a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Sidebar -->
      <aside class="col-lg-4">
        <div class="mb-4">
          <h5 class="fw-semibold mb-3">Bài viết nổi bật</h5>
          <ul class="list-group list-group-flush">
            <li
              v-for="featured in featuredPosts"
              :key="featured.id"
              class="list-group-item"
            >
              <router-link
                :to="`/post/${featured.id}`"
                class="text-decoration-none text-dark"
              >
                {{ featured.title }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h5 class="fw-semibold mb-3">Chủ đề phổ biến</h5>
          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-primary">Smart Home</span>
            <span class="badge bg-secondary">Rèm cửa</span>
            <span class="badge bg-info text-dark">IoT</span>
            <span class="badge bg-success">Thiết bị thông minh</span>
            <span class="badge bg-warning text-dark">Công nghệ</span>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

