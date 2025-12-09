<template>
  <body class="bg-light">
    <div
      class="container-fluid admin-inner-content mt-4"
      style="margin-left: -0.5%; max-width: 600px"
    >
      <h3>Thêm danh mục</h3>
      <form id="createCategoryForm">
        <div class="mb-3">
          <label class="form-label">Tên danh mục</label>
          <input id="categoryName" type="text" class="form-control" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Mô tả</label>
          <textarea
            id="categoryDescription"
            class="form-control"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-success">Thêm</button>
      </form>
    </div>

    <!-- Toast -->
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1055">
      <div
        id="liveToast"
        class="toast align-items-center text-white border-0 shadow-lg"
        role="alert"
      >
        <div class="d-flex">
          <div class="toast-body">
            <strong id="toastTitle"></strong><br />
            <span id="toastBody"></span>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
          ></button>
        </div>
      </div>
    </div>
  </body>
</template>
