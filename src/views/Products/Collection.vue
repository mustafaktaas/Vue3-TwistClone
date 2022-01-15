<template>
  <div>
    <Header />

    <main class="site-main">
      <div data-type-id="0" data-category-id="9" class="page-list display-grid">
        <div class="ga2">
          <div class="categories-append obj-desktop">
            <div
              data-swiper="widgetAuto"
              class="
                swiper-container swiper-categories
                ems-swiper-activeted
                item-15
                swiper-container-initialized swiper-container-horizontal
                ems-swiper-ready
              "
            >
              <div class="swiper-header">
                <a href="/giyim"><h1 class="categoryName">Giyim</h1></a>
              </div>
              <div class="swiper-inner">
                <ul class="swiper-wrapper">
                  <li
                    class="swiper-slide s3 swiper-slide-active slide-active"
                    data-order="0"
                  >
                    <b></b><a class="" href="/bluz-modelleri">Bluz</a>
                  </li>
                  <li
                    class="swiper-slide s3 swiper-slide-next slide-active"
                    data-order="1"
                  >
                    <b></b><a class="" href="/elbise-modelleri">Elbise</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="2">
                    <b></b><a class="" href="/tulum-modelleri">Tulum</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="3">
                    <b></b><a class="" href="/kadin-hirka-modelleri">Hırka</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="4">
                    <b></b><a class="" href="/kadin-gomlek-modelleri">Gömlek</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="5">
                    <b></b
                    ><a class="" href="/kadin-tshirt-modelleri">T-shirt</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="6">
                    <b></b
                    ><a class="" href="/kadin-jogger-pantolon-modelleri"
                      >Jogger Pantolon</a
                    >
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="7">
                    <b></b><a class="" href="/kadin-triko-kazak">Kazak</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="8">
                    <b></b><a class="" href="/kadin-yelek-modelleri">Yelek</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="9">
                    <b></b><a class="" href="/kadin-sort">Şort</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="10">
                    <b></b><a class="" href="/kot-pantolon-modelleri">Jean</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="11">
                    <b></b
                    ><a class="" href="/kadin-pantolon-modelleri">Pantolon</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="12">
                    <b></b><a class="" href="/etek-modelleri">Etek</a>
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="13">
                    <b></b
                    ><a class="" href="/kadin-sweatshirt-modelleri"
                      >Sweatshirt</a
                    >
                  </li>
                  <li class="swiper-slide s3 slide-active" data-order="14">
                    <b></b><a class="" href="/kadin-ceket-modelleri">Ceket</a>
                  </li>
                </ul>
              </div>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
        <div class="ga4"></div>

        <div class="ga1 product-list-sticky-bar">
          <div class="d-sort display-grid justify-end">
            <div class="ga1">
              <div class="display-grid align-items-center justify-center">
                <div class="ga01"></div>
                <div class="ga02">
                  <div class="d-hdn filter-open-btn">
                    <a
                      data-target="body"
                      data-ready="ems-filter-ready"
                      data-animate="ems-filter-animate"
                      data-type="toggle"
                      class="drp-aftr btn-filter-popup obj-filter"
                      href="javascript:void(0);"
                      ><span>FİLTRE</span></a
                    >

                    <a
                      data-target="body"
                      data-ready="ems-filter-ready"
                      data-animate="ems-filter-animate"
                      data-type="remove"
                      class="btn-filter-close btn-close obj-mobile"
                      href="javascript:void(0);"
                    >
                      <svg class="icon icon-close">
                        <use href="#icon-close"></use>
                      </svg>
                    </a>
                  </div>

                  <!-- Mobile İcerik-->
                  <div class="kutuOzellikCount obj-mobile">
                    <span class="kutuHeaderOzellikFiltre mb-fltr-ttl"
                      ><span class="display-block name">FİLTRELER</span
                      ><a
                        class="btn-close obj-mobile"
                        href="javascript:void(0);"
                      >
                        <svg class="icon-close">
                          <use href="#icon-close"></use></svg></a
                      ><span class="rslt-prd"><b>*</b>product</span></span
                    >
                  </div>
                </div>
                <div class="ga03">
                  <div class="kutuOzellikFiltre ems-sort">
                    <div class="sorts obj-desktop" id="dvUrunKiyaslamaOzellik">
                      <div
                        data-target="body"
                        data-ready="sort-ready"
                        data-animate="sort-animate"
                        data-type="toggle"
                        class="ems-sort-title kutuHeaderOzellikFiltre"
                      >
                        <span class="drp-aftr">SIRALAMA</span>
                      </div>

                      <div class="ems-sort-body">
                        <div class="kutuBodyOzellikFiltre ems-sort-filter">
                          <a
                            class="urunKiyaslamaOzellik"
                            href="/giyim?sort=date_asc"
                            ><span>Yeniler</span></a
                          >

                          <a
                            class="urunKiyaslamaOzellik"
                            href="/giyim?sort=price_asc"
                            ><span>Artan Fiyat</span></a
                          >

                          <a
                            class="urunKiyaslamaOzellik"
                            href="/giyim?sort=price_desc"
                            ><span>Azalan Fiyat</span></a
                          >

                          <a
                            class="urunKiyaslamaOzellik"
                            href="/giyim?sort=discount_desc"
                            ><span>İndirim Oranı</span></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="kutuDefault kutuOzellikFiltre ems-filter"
                  id="pnlSecimiDarat"
                >
                  <div class="kutuHeaderDefault kutuHeaderOzellikFiltre">
                    <span></span>
                  </div>
                  <div
                    class="kutuBodyDefault kutuBodyOzellikFiltre filter-tree"
                  >
                    <div rel="Beden" class="urunKiyaslamaOzellik_ozellik">
                      <div class="urunKiyaslamaOzellik_ozellikAd">Beden</div>

                      <ul class="urunKiyaslamaOzellik_ozellikIcerik">
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="36"
                            href="/giyim?beden=beden36"
                          >
                            <span>36</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="38"
                            href="/giyim?beden=beden38"
                          >
                            <span>38</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="40"
                            href="/giyim?beden=beden40"
                          >
                            <span>40</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="34"
                            href="/giyim?beden=beden34"
                          >
                            <span>34</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="S"
                            href="/giyim?beden=s"
                          >
                            <span>S</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="M"
                            href="/giyim?beden=m"
                          >
                            <span>M</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="L"
                            href="/giyim?beden=l"
                          >
                            <span>L</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="42"
                            href="/giyim?beden=beden42"
                          >
                            <span>42</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="XS"
                            href="/giyim?beden=xs"
                          >
                            <span>XS</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="XL"
                            href="/giyim?beden=xl"
                          >
                            <span>XL</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="44"
                            href="/giyim"
                          >
                            <span>44</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div rel="Renk" class="urunKiyaslamaOzellik_ozellik">
                      <div class="urunKiyaslamaOzellik_ozellikAd">Renk</div>

                      <ul class="urunKiyaslamaOzellik_ozellikIcerik">
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Siyah"
                            href="/giyim?renk=siyah_198"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/siyah.png"
                              title="Siyah"
                            />
                            <span>Siyah</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Mavi"
                            href="/giyim?renk=mavi"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/mavi.png"
                              title="Mavi"
                            />
                            <span>Mavi</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Gri"
                            href="/giyim?renk=gri"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/gri.png"
                              title="Gri"
                            />
                            <span>Gri</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Ekru"
                            href="/giyim?renk=ekru"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/ekru.png"
                              title="Ekru"
                            />
                            <span>Ekru</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Beyaz"
                            href="/giyim?renk=beyaz"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/beyaz.png"
                              title="Beyaz"
                            />
                            <span>Beyaz</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Pembe"
                            href="/giyim?renk=pembe"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/pembe.png"
                              title="Pembe"
                            />
                            <span>Pembe</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Yesil"
                            href="/giyim?renk=yesil_362"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/yesil.png"
                              title="Yesil"
                            />
                            <span>Yesil</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Bej"
                            href="/giyim?renk=bej"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/krem.png"
                              title="Bej"
                            />
                            <span>Bej</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Turuncu"
                            href="/giyim?renk=turuncu"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/turuncu.png"
                              title="Turuncu"
                            />
                            <span>Turuncu</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kirmizi"
                            href="/giyim?renk=kirmizi_364"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/kirmizi.png"
                              title="Kirmizi"
                            />
                            <span>Kirmizi</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Sari"
                            href="/giyim?renk=sari_363"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/sari.png"
                              title="Sari"
                            />
                            <span>Sari</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Mor"
                            href="/giyim?renk=mor"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/mor.png"
                              title="Mor"
                            />
                            <span>Mor</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kahverengi"
                            href="/giyim?renk=kahverengi"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/kahverengi.png"
                              title="Kahverengi"
                            />
                            <span>Kahverengi</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Haki"
                            href="/giyim?renk=haki"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/haki.png"
                              title="Haki"
                            />
                            <span>Haki</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Metalik"
                            href="/giyim?renk=metalik"
                          >
                            <img
                              class="filter-icon"
                              border="0"
                              src="https://img2-twist.mncdn.com/Twist/uploads/colors/metalik.png"
                              title="Metalik"
                            />
                            <span>Metalik</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div rel="Sezon Kodu" class="urunKiyaslamaOzellik_ozellik">
                      <div class="urunKiyaslamaOzellik_ozellikAd">
                        Sezon Kodu
                      </div>

                      <ul class="urunKiyaslamaOzellik_ozellikIcerik">
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Fw 21/22"
                            href="/giyim?sezon-kodu=fw-2122"
                          >
                            <span>Fw 21/22</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      rel="Kategori"
                      class="urunKiyaslamaOzellik_ozellik selected"
                    >
                      <div class="urunKiyaslamaOzellik_ozellikAd">Kategori</div>

                      <ul class="urunKiyaslamaOzellik_ozellikIcerik">
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kazak"
                            href="/giyim?kategori=kazak"
                          >
                            <span>Kazak</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="T-shirt"
                            href="/giyim?kategori=t-shirt"
                          >
                            <span>T-shirt</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Gömlek"
                            href="/giyim?kategori=gomlek"
                          >
                            <span>Gömlek</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Pantolon"
                            href="/giyim?kategori=pantolon"
                          >
                            <span>Pantolon</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Elbise"
                            href="/giyim?kategori=elbise"
                          >
                            <span>Elbise</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Jean"
                            href="/giyim?kategori=jean"
                          >
                            <span>Jean</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Sweatshirt"
                            href="/giyim?kategori=sweatshirt"
                          >
                            <span>Sweatshirt</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Bluz"
                            href="/giyim?kategori=bluz"
                          >
                            <span>Bluz</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Etek"
                            href="/giyim?kategori=etek"
                          >
                            <span>Etek</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Ceket"
                            href="/giyim?kategori=ceket"
                          >
                            <span>Ceket</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Blazer"
                            href="/giyim?kategori=blazer"
                          >
                            <span>Blazer</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Jogger Pantolon"
                            href="/giyim?kategori=jogger-pantolon"
                          >
                            <span>Jogger Pantolon</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Tulum"
                            href="/giyim?kategori=tulum"
                          >
                            <span>Tulum</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Yelek"
                            href="/giyim?kategori=yelek"
                          >
                            <span>Yelek</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Şort"
                            href="/giyim?kategori=sort"
                          >
                            <span>Şort</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div rel="Marka" class="urunKiyaslamaOzellik_ozellik">
                      <div class="urunKiyaslamaOzellik_ozellikAd">Marka</div>

                      <ul class="urunKiyaslamaOzellik_ozellikIcerik">
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Twıst"
                            href="/giyim?marka=twist"
                          >
                            <span>Twıst</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      rel="Cinsiyet"
                      class="urunKiyaslamaOzellik_ozellik selected"
                    >
                      <div class="urunKiyaslamaOzellik_ozellikAd">Cinsiyet</div>

                      <ul class="urunKiyaslamaOzellik_ozellikIcerik">
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kadın"
                            href="/giyim?cinsiyet=kadin"
                          >
                            <span>Kadın</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="prd-list-filter none">
                    <div id="plhUrunSira_chkTemin">
                      <a class="ajx-button" href="/giyim?stk=true">
                        <span class="checkbox">
                          <span class="sStylerMainWrp sStylerWrp_checkbox">
                            <span class="cStyler">
                              <img
                                class="icon-checkbox"
                                src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox.svg" />
                              <img
                                class="icon-checkbox-active"
                                src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox-active.svg"
                            /></span>
                          </span>
                          <label><span>TÜKENENLERİ GÖSTERME</span></label>
                        </span>
                      </a>
                    </div>

                    <div id="plhUrunSira_chkInd">
                      <a class="ajx-button" href="/giyim?ind=true">
                        <span class="checkbox">
                          <span class="sStylerMainWrp sStylerWrp_checkbox">
                            <span class="cStyler">
                              <img
                                class="icon-checkbox"
                                src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox.svg" />
                              <img
                                class="icon-checkbox-active"
                                src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox-active.svg"
                            /></span>
                          </span>
                          <label><span>İNDİRİMDEKİLER</span></label>
                        </span>
                      </a>
                    </div>

                    <div id="plhUrunSira_chkYnu">
                      <a class="ajx-button" href="/giyim?ynu=true">
                        <span class="checkbox">
                          <span class="sStylerMainWrp sStylerWrp_checkbox">
                            <span class="cStyler">
                              <img
                                class="icon-checkbox"
                                src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox.svg" />
                              <img
                                class="icon-checkbox-active"
                                src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox-active.svg"
                            /></span>
                          </span>
                          <label><span>YENİ ÜRÜNLER</span></label>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div class="kutuFooterDefault kutuFooterOzellikFiltre">
                    <a
                      data-target="body"
                      data-ready="ems-filter-ready"
                      data-animate="ems-filter-animate"
                      data-type="remove"
                      class="btnDefault btnFilterApply btnAlternate"
                      href="javascript:void(0);"
                    >
                      <span>SEÇİMLERİ UYGULA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="ga2">
              <div
                class="kutuOzellikFiltre views display-flex align-items-center"
                id="dvUrunKiyaslamaOzellik"
              >
                <div
                  data-target="body"
                  data-ready="ems-filter-ready"
                  data-animate="ems-filter-animate"
                  data-type="toggle"
                  class="filter-mb-open drp-aftr obj-mobile"
                >
                  <span id="lbfListFilter">FİLTRE</span>
                </div>
                <div
                  data-target="body"
                  data-ready="sort-ready"
                  data-animate="sort-animate"
                  data-type="toggle"
                  class="sort-mb-open drp-aftr obj-mobile"
                >
                  <span id="lbfListSort">SIRALAMA</span>
                </div>

                <div class="kutuOzellikFiltreView product-list-view">
                  <a
                    class="urunKiyaslamaOzellik obj-mobile"
                    rel="view-1"
                    href="javascript:void(0);"
                    ><img
                      src="https://img2-twist.mncdn.com/Twist/frontend/icons/birli.svg"
                  /></a>

                  <a
                    class="urunKiyaslamaOzellik obj-desktop link_selected"
                    rel="view-2"
                    href="javascript:void(0);"
                    ><img
                      src="https://img2-twist.mncdn.com/Twist/frontend/icons/ikili.svg"
                  /></a>

                  <a
                    class="urunKiyaslamaOzellik obj-mobile"
                    rel="view-3"
                    href="javascript:void(0);"
                    ><img
                      src="https://img2-twist.mncdn.com/Twist/frontend/icons/dortlu.svg"
                  /></a>

                  <a
                    class="urunKiyaslamaOzellik obj-desktop"
                    rel="view-4"
                    href="javascript:void(0);"
                    ><img
                      src="https://img2-twist.mncdn.com/Twist/frontend/icons/uclu.svg"
                  /></a>
                </div>
              </div>

              <div
                class="ems-sort-body-mobile sorts"
                id="dvUrunKiyaslamaOzellik"
              >
                <div class="ems-sort-body obj-mobile">
                  <div class="kutuBodyOzellikFiltre">
                    <a class="urunKiyaslamaOzellik" href="/giyim?sort=date_asc"
                      >Yeniler</a
                    >

                    <a class="urunKiyaslamaOzellik" href="/giyim?sort=price_asc"
                      ><span>Artan Fiyat</span></a
                    >

                    <a
                      class="urunKiyaslamaOzellik"
                      href="/giyim?sort=price_desc"
                      ><span>Azalan Fiyat</span></a
                    >

                    <a
                      class="urunKiyaslamaOzellik"
                      href="/giyim?sort=discount_desc"
                      >İndirim Oranı</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ga3">
          <div class="urnList">
            <div class="prd-list">
              <div class="btn-load-prev ems-none">
                <a data-pageindex="1" class="btnDefault load-prev"
                  ><span>Öncekileri Göster</span></a
                >
              </div>
              <div class="ems-loading-list"></div>

              <ul
                data-pagesize="15"
                class="
                  emosInfinite
                  product-list-grid
                  ems-prd-list-wrapper ems-prd-list
                "
              >
               
             <CollectionProductList/>

              </ul>

              <div class="ems-paging ems-section">
                <div class="ems-loading-list"></div>
                <div class="btn-load-next">
                  <a class="btnDefault load-next"><span>Load More</span></a>
                </div>
                <ul
                  class="
                    ems-section-wrapper
                    ems-flex
                    ems-flex-wrap
                    ems-flex-middle
                    ems-flex-center
                    ems-none
                  "
                >
                  <li data-pageindex="1" class="paging selected">
                    <a href="/giyim?page=1">1</a>
                  </li>
                  <li data-pageindex="2" class="paging">
                    <a href="/giyim?page=2">2</a>
                  </li>
                  <li data-pageindex="3" class="paging">
                    <a href="/giyim?page=3">3</a>
                  </li>
                  <li data-pageindex="4" class="paging">
                    <a href="/giyim?page=4">4</a>
                  </li>
                  <li data-pageindex="5" class="paging">
                    <a href="/giyim?page=5">5</a>
                  </li>
                  <li data-pageindex="6" class="paging">
                    <a href="/giyim?page=6">6</a>
                  </li>
                  <li data-pageindex="7" class="paging">
                    <a href="/giyim?page=7">7</a>
                  </li>
                  <li data-pageindex="8" class="paging">
                    <a href="/giyim?page=8">8</a>
                  </li>
                  <li data-pageindex="9" class="paging">
                    <a href="/giyim?page=9">9</a>
                  </li>
                  <li data-pageindex="10" class="paging">
                    <a href="/giyim?page=10">10</a>
                  </li>
                  <li data-pageindex="11" class="paging">
                    <a href="/giyim?page=11">11</a>
                  </li>
                  <li data-pageindex="12" class="paging">
                    <a href="/giyim?page=12">12</a>
                  </li>
                  <li data-pageindex="13" class="paging">
                    <a href="/giyim?page=13">13</a>
                  </li>
                  <li data-pageindex="14" class="paging">
                    <a href="/giyim?page=14">14</a>
                  </li>
                  <li data-pageindex="15" class="paging">
                    <a href="/giyim?page=15">15</a>
                  </li>
                  <li data-pageindex="16" class="paging">
                    <a href="/giyim?page=16">16</a>
                  </li>
                  <li data-pageindex="17" class="paging">
                    <a href="/giyim?page=17">17</a>
                  </li>
                  <li data-pageindex="18" class="paging">
                    <a href="/giyim?page=18">18</a>
                  </li>
                  <li data-pageindex="19" class="paging">
                    <a href="/giyim?page=19">19</a>
                  </li>
                  <li data-pageindex="20" class="paging">
                    <a href="/giyim?page=20">20</a>
                  </li>
                  <li data-pageindex="21" class="paging">
                    <a href="/giyim?page=21">21</a>
                  </li>
                  <li data-pageindex="22" class="paging">
                    <a href="/giyim?page=22">22</a>
                  </li>
                  <li data-pageindex="23" class="paging">
                    <a href="/giyim?page=23">23</a>
                  </li>
                  <li data-pageindex="24" class="paging">
                    <a href="/giyim?page=24">24</a>
                  </li>
                  <li data-pageindex="25" class="paging">
                    <a href="/giyim?page=25">25</a>
                  </li>
                  <li data-pageindex="26" class="paging">
                    <a href="/giyim?page=26">26</a>
                  </li>
                  <li data-pageindex="27" class="paging">
                    <a href="/giyim?page=27">27</a>
                  </li>
                  <li data-pageindex="28" class="paging">
                    <a href="/giyim?page=28">28</a>
                  </li>
                  <li data-pageindex="29" class="paging">
                    <a href="/giyim?page=29">29</a>
                  </li>
                  <li data-pageindex="30" class="paging">
                    <a href="/giyim?page=30">30</a>
                  </li>
                  <li data-pageindex="31" class="paging">
                    <a href="/giyim?page=31">31</a>
                  </li>
                </ul>
              </div>

              <div class="cat-redirect-links">
                <div class="title">İLGİLİ KATEGORİLER</div>

                <span
                  ><a
                    class="urunliste_oncekikategori"
                    title="Twist Zone"
                    href="/twist-zone-list"
                    >Twist Zone</a
                  ></span
                >

                <span
                  ><a
                    class="urunliste_sonrakikategori"
                    title="Aksesuar"
                    href="/aksesuar"
                    >Aksesuar</a
                  ></span
                >
              </div>
            </div>
          </div>

          <div class="go-page-top ems-text-center obj-mobile">
            <a
              class="
                btn-page-top
                display-flex
                align-items-center
                justify-center
              "
              href="javascript:void(0);"
            >
              <svg class="icon-right-arrow">
                <use
                  xlink:href="/Content/Styles/base/icons.svg#right-arrow"
                ></use></svg
            ></a>
          </div>

          <div class="navigasyon urunNavigasyon">
            <ol class="olNavigasyon">
              <li class="navigasyonSeviye1 nav-home">
                <a class="homepage" href="/">
                  <span>ANASAYFA</span>
                </a>
              </li>

              <svg class="icon-drop-right">
                <use
                  xlink:href="/Content/Styles/base/icons.svg#drop-right"
                ></use>
              </svg>
              <li class="navigasyonSeviye2">
                <a href="/giyim" rel="9"> <span>Giyim</span></a>
              </li>

              
            </ol>
          </div>
        </div>
      </div>

      <div
        data-target="body"
        data-ready="sort-ready"
        data-animate="sort-animate"
        data-type="remove"
        class="vail vailSortPopup"
      ></div>

      <div
        data-target="body"
        data-ready="ems-filter-ready"
        data-animate="ems-filter-animate"
        data-type="remove"
        class="vail vailFilter"
      ></div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
import CollectionProductList from '../../components/CollectionProductList.vue'
export default {
  components: {
    Header,
    CollectionProductList,
    Footer
},
}
</script>