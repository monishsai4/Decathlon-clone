function Carousal1() {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img src="Img/Kidsbike.avif" class="d-block w-100" alt="KidsBike" />
        </div>
        <div class="carousel-item ">
          <img src="Img/Roadbike.avif" class="d-block w-100" alt="Roadbike" />
        </div>
        <div class="carousel-item">
          <img src="Img/Mtbbike.avif" class="d-block w-100" alt="Mtbbike" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal1;