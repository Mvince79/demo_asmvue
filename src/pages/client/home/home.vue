<script setup>
const products = [
  {
    id: 1,
    title: "Rèm Vải Hai Lớp Màu Be",
    price: 950000,
    image:
      "https://phanphoiremcua.com/wp-content/uploads/2025/04/rem-vai-1.jpg",
    description:
      "Rèm vải hai lớp giúp điều chỉnh ánh sáng linh hoạt, tone màu be sang trọng phù hợp phòng khách hoặc phòng ngủ.",
  },
  {
    id: 2,
    title: "Rèm Cửa Sổ Voan Trắng",
    price: 550000,
    image:
      "https://phanphoiremcua.com/wp-content/uploads/2023/08/white-home-decorators-collection-cellular-shades-10793478687886-64_1000-600x600.webp",
    description:
      "Rèm voan trắng nhẹ nhàng, tạo ánh sáng dịu nhẹ, mang lại cảm giác thoáng đãng và tinh tế cho không gian.",
  },
  {
    id: 3,
    title: "Rèm Cầu Vồng Hàn Quốc Xám",
    price: 1200000,
    image:
      "https://phanphoiremcua.com/wp-content/uploads/2025/04/cac-loai-rem-cau-vong-1.jpg",
    description:
      "Rèm cầu vồng cao cấp từ Hàn Quốc, khả năng cản sáng tốt, thiết kế hiện đại phù hợp căn hộ và văn phòng.",
  },
  {
    id: 4,
    title: "Rèm Roman Màu Xanh Navy",
    price: 1050000,
    image:
      "https://phanphoiremcua.com/wp-content/uploads/2023/06/z4469812125968_507d78a8b4da9f87df92d3349fc52ca6-jpg.webp",
    description:
      "Rèm Roman màu xanh navy, có thể kéo gấp theo tầng, mang lại vẻ sang trọng và độc đáo cho phòng ngủ.",
  },
  {
    id: 5,
    title: "Rèm Sáo Gỗ Tự Nhiên",
    price: 1450000,
    image:
      "https://phanphoiremcua.com/wp-content/uploads/2023/05/z4592073129907_c875ef779c52e418e3f209511c259677-jpg.webp",
    description:
      "Rèm sáo gỗ làm từ gỗ tự nhiên, điều chỉnh ánh sáng tốt, phù hợp không gian sang trọng và ấm cúng.",
  },
  {
    id: 6,
    title: "Rèm Vải Chống Nắng Màu Kem",
    price: 820000,
    image:
      "https://phanphoiremcua.com/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten-22.png",
    description:
      "Rèm vải chống nắng hiệu quả, màu kem tinh tế, thích hợp cho phòng ngủ và văn phòng cần hạn chế ánh sáng.",
  },
];
</script>
<template>
  <div class="container py-5 text-center bg-light rounded-4">
    <div class="d-flex justify-content-between mt-4 mb-2">
      <h4>Danh sách khuyến mãi</h4>
      <button class="btn btn-outline-success">Xem tất cả</button>
    </div>

    <div class="row g-4 justify-content-center">
      <div class="col-lg-4 col-md-6" v-for="i in products" :key="i.id">
        <div
          class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden"
          style="transition: all 0.3s"
        >
          <img
            :src="i.image"
            class="card-img-top"
            style="object-fit: cover; height: 250px; transition: transform 0.4s"
          />

          <div class="card-body d-flex flex-column text-start">
            <h5 class="fw-semibold mb-1">{{ i.title }}</h5>
            <p class="text-muted small mb-3">{{ i.description }}</p>

            <!-- ✅ Nút xem chi tiết -->
            <button class="btn btn-sm btn-outline-primary mb-3">
              Xem chi tiết
            </button>

            <div class="mt-auto text-primary fw-bold">{{ i.price }} VND</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
