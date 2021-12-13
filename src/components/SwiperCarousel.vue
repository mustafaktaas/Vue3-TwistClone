
<template>
  <div
    id="carouselVideoExample"
    class="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselVideoExample"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselVideoExample"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselVideoExample"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <div class="carousel-inner">

      <div class="carousel-item active">
        <video class="img-fluid" autoplay loop muted>
          <source
            src="https://player.vimeo.com/external/641036582.hd.mp4?s=013d98b87a28acf56dae117263f5df3c07420654&profile_id=175"
            type="video/mp4"
          />
        </video>
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>

  </div>
  
</template>

<style>
#carouselVideoExample {
  margin-left: 35px;
  margin-right: 35px;
}
</style>