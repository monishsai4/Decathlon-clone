import React from "react";

export default function FourCards() {
  return (
    <div class="container-fluid">
      <h5 class="pt-5 ml-5"> Outdoor Essentials </h5>
      <div class=" text-center m-3">
        <div class="row ">
          <div class="col ">
            <div class="card">
              <img src="Img/defaut (9).avif" class="card-img" alt="Football" />
            </div>
          </div>
          <div class="col">
            <div class="card text-bg-dark">
              <img src="Img/defaut (10).avif" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card text-bg-dark">
              <img src="Img/defaut (11).avif" class="card-img" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card text-bg-dark">
              <img src="Img/defaut (12).avif" class="card-img" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
