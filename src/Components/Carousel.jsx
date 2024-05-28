function Carousal() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="Img/defaut.avif" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Img/defaut (1).avif" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Img/defaut (2).avif" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Img/defaut (3).avif" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Img/defaut (4).avif" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Img/defaut (5).avif" class="d-block w-100" alt="..." />
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
    </>
  );
}

export default Carousal;
