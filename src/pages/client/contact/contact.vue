<template>
  <!-- 🔹 HERO -->
  <section class="bg-light py-5 text-center mt-4">
    <div class="container">
      <h1 class="fw-bold mb-3">Liên hệ với SmartBlinds</h1>
      <p class="text-muted col-md-8 mx-auto">
        Chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc lựa chọn, lắp đặt và bảo
        hành các sản phẩm rèm thông minh.
      </p>
    </div>
  </section>

  <!-- 🔹 FORM LIÊN HỆ -->
  <section class="container py-5">
    <div class="row g-5">
      <!-- FORM -->
      <div class="col-lg-6">
        <h4 class="fw-semibold mb-4">Gửi tin nhắn cho chúng tôi</h4>
        <form class="p-4 rounded-4 bg-white shadow-sm">
          <div class="mb-3">
            <label class="form-label fw-semibold small">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-semibold small">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="email@domain.com"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-semibold small">Tin nhắn</label>
            <textarea
              class="form-control"
              rows="4"
              placeholder="Nội dung bạn muốn gửi..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary px-4">Gửi ngay</button>
        </form>
      </div>

      <!-- CONTACT INFO -->
      <div class="col-lg-6">
        <h4 class="fw-semibold mb-4">Thông tin liên hệ</h4>

        <ul class="list-unstyled mb-4">
          <li class="mb-3">
            <i class="bi bi-geo-alt text-primary me-2"></i>
            Toà nhà FPT Polytechnic, Cái Răng, Cần Thơ
          </li>
          <li class="mb-3">
            <i class="bi bi-telephone text-primary me-2"></i>
            0987 123 456
          </li>
          <li class="mb-3">
            <i class="bi bi-envelope text-primary me-2"></i>
            khangks144@gmail.com
          </li>
        </ul>

        <div class="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.3470816307088!2d105.7565741767269!3d9.981882637681228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08906415c355f%3A0x416815a99ebd841e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e1!3m2!1svi!2s!4v1760883763572!5m2!1svi!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
