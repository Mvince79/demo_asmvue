<script setup></script>
<template>
  <footer
    class="d-flex justify-content-between align-items-center px-4 py-2 footer-custom"
    style="
      background: #1f1f1f;
      color: #bbb;
      border-top: 1px solid #333;
      font-size: 14px;
    "
  >
    <div>
      © {{ new Date().getFullYear() }} Smart Blinds Admin — Quản lý rèm cửa
      thông minh
    </div>

    <div class="d-flex gap-3 align-items-center">
      <a href="#" class="text-secondary text-decoration-none">
        <i class="bi bi-shield-check"></i> Bảo mật
      </a>
      <a href="#" class="text-secondary text-decoration-none">
        <i class="bi bi-file-earmark-code"></i> Phiên bản hệ thống 1.0.0
      </a>
      <a href="#" class="text-secondary text-decoration-none">
        <i class="bi bi-life-preserver"></i> Hỗ trợ
      </a>
    </div>
  </footer>
</template>
