<template>
  <div class="NewProducts">


    <Header/>

    <main class="site-main">
      <div data-type-id="9" data-category-id="0" class="page-list display-grid">
        <div class="ga2">
         <div class="categories-append obj-desktop">
            <div
              data-swiper="widgetAuto"
              class="swiper-container swiper-categories"
            >
              <div class="swiper-header">
                <a href="javascript:void(0);" class="typeInfo">
                  <h1>YENİ</h1>
                </a>
              </div>
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
                            href="/en-yeniler?sort=date_asc"
                            ><span>Yeniler</span></a
                          >

                          <a
                            class="urunKiyaslamaOzellik"
                            href="/en-yeniler?sort=price_asc"
                            ><span>Artan Fiyat</span></a
                          >

                          <a
                            class="urunKiyaslamaOzellik"
                            href="/en-yeniler?sort=price_desc"
                            ><span>Azalan Fiyat</span></a
                          >

                          <a
                            class="urunKiyaslamaOzellik"
                            href="/en-yeniler?sort=discount_desc"
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
                            title="38"
                            href="/en-yeniler?beden=beden38"
                          >
                            <span>38</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="36"
                            href="/en-yeniler?beden=beden36"
                          >
                            <span>36</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="40"
                            href="/en-yeniler?beden=beden40"
                          >
                            <span>40</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="34"
                            href="/en-yeniler?beden=beden34"
                          >
                            <span>34</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="1"
                            href="/en-yeniler?beden=beden1"
                          >
                            <span>1</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="S"
                            href="/en-yeniler?beden=s"
                          >
                            <span>S</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="M"
                            href="/en-yeniler?beden=m"
                          >
                            <span>M</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="L"
                            href="/en-yeniler?beden=l"
                          >
                            <span>L</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="42"
                            href="/en-yeniler?beden=beden42"
                          >
                            <span>42</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="39"
                            href="/en-yeniler?beden=beden39"
                          >
                            <span>39</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="37"
                            href="/en-yeniler"
                          >
                            <span>37</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="2"
                            href="/en-yeniler?beden=2_48"
                          >
                            <span>2</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="XS"
                            href="/en-yeniler?beden=xs"
                          >
                            <span>XS</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="XL"
                            href="/en-yeniler?beden=xl"
                          >
                            <span>XL</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="44"
                            href="/en-yeniler"
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
                            href="/en-yeniler?renk=siyah_198"
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
                            href="/en-yeniler?renk=mavi"
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
                            title="Sari"
                            href="/en-yeniler?renk=sari_363"
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
                            title="Gri"
                            href="/en-yeniler?renk=gri"
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
                            href="/en-yeniler?renk=ekru"
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
                            href="/en-yeniler?renk=beyaz"
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
                            title="Yesil"
                            href="/en-yeniler?renk=yesil_362"
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
                            title="Metalik"
                            href="/en-yeniler?renk=metalik"
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
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Bej"
                            href="/en-yeniler?renk=bej"
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
                            title="Pembe"
                            href="/en-yeniler?renk=pembe"
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
                            title="Turuncu"
                            href="/en-yeniler?renk=turuncu"
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
                            title="Kahverengi"
                            href="/en-yeniler?renk=kahverengi"
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
                            title="Kirmizi"
                            href="/en-yeniler?renk=kirmizi_364"
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
                            title="Mor"
                            href="/en-yeniler?renk=mor"
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
                            title="Haki"
                            href="/en-yeniler?renk=haki"
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
                            title="Diger"
                            href="/en-yeniler?renk=diger_365"
                          >
                            <span>Diger</span>
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
                            href="/en-yeniler?sezon-kodu=fw-2122"
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
                            href="/en-yeniler?kategori=kazak"
                          >
                            <span>Kazak</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="T-shirt"
                            href="/en-yeniler?kategori=t-shirt"
                          >
                            <span>T-shirt</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Küpe"
                            href="/en-yeniler?kategori=kupe"
                          >
                            <span>Küpe</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Elbise"
                            href="/en-yeniler?kategori=elbise"
                          >
                            <span>Elbise</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Gömlek"
                            href="/en-yeniler?kategori=gomlek"
                          >
                            <span>Gömlek</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Pantolon"
                            href="/en-yeniler?kategori=pantolon"
                          >
                            <span>Pantolon</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Çanta"
                            href="/en-yeniler?kategori=canta"
                          >
                            <span>Çanta</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kolye"
                            href="/en-yeniler?kategori=kolye"
                          >
                            <span>Kolye</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Mont"
                            href="/en-yeniler?kategori=mont"
                          >
                            <span>Mont</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Sweatshirt"
                            href="/en-yeniler?kategori=sweatshirt"
                          >
                            <span>Sweatshirt</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Jean"
                            href="/en-yeniler?kategori=jean"
                          >
                            <span>Jean</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Bluz"
                            href="/en-yeniler?kategori=bluz"
                          >
                            <span>Bluz</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Etek"
                            href="/en-yeniler?kategori=etek"
                          >
                            <span>Etek</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kemer"
                            href="/en-yeniler?kategori=kemer"
                          >
                            <span>Kemer</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Bot"
                            href="/en-yeniler?kategori=bot"
                          >
                            <span>Bot</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kaban"
                            href="/en-yeniler?kategori=kaban"
                          >
                            <span>Kaban</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Ceket"
                            href="/en-yeniler?kategori=ceket"
                          >
                            <span>Ceket</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Sneaker"
                            href="/en-yeniler?kategori=sneaker"
                          >
                            <span>Sneaker</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Yüzük"
                            href="/en-yeniler?kategori=yuzuk"
                          >
                            <span>Yüzük</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Toka"
                            href="/en-yeniler?kategori=toka"
                          >
                            <span>Toka</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Blazer"
                            href="/en-yeniler?kategori=blazer"
                          >
                            <span>Blazer</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Jogger Pantolon"
                            href="/en-yeniler?kategori=jogger-pantolon"
                          >
                            <span>Jogger Pantolon</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Tulum"
                            href="/en-yeniler?kategori=tulum"
                          >
                            <span>Tulum</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Şapka"
                            href="/en-yeniler?kategori=sapka"
                          >
                            <span>Şapka</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Fular-şal"
                            href="/en-yeniler?kategori=fular-sal"
                          >
                            <span>Fular-şal</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Bere"
                            href="/en-yeniler?kategori=bere"
                          >
                            <span>Bere</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Bilezik"
                            href="/en-yeniler?kategori=bilezik"
                          >
                            <span>Bilezik</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Yelek"
                            href="/en-yeniler?kategori=yelek"
                          >
                            <span>Yelek</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Kartvizitlik"
                            href="/en-yeniler?kategori=kartvizitlik"
                          >
                            <span>Kartvizitlik</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Saç Bandı"
                            href="/en-yeniler?kategori=sac-bandi"
                          >
                            <span>Saç Bandı</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Şort"
                            href="/en-yeniler?kategori=sort"
                          >
                            <span>Şort</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Düz Ayakkabı"
                            href="/en-yeniler?kategori=duz-ayakkabi"
                          >
                            <span>Düz Ayakkabı</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Broş"
                            href="/en-yeniler?kategori=bros"
                          >
                            <span>Broş</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Terlik"
                            href="/en-yeniler?kategori=terlik"
                          >
                            <span>Terlik</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Atkı"
                            href="/en-yeniler?kategori=atki"
                          >
                            <span>Atkı</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Trençkot"
                            href="/en-yeniler?kategori=pardosu"
                          >
                            <span>Trençkot</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Çizme"
                            href="/en-yeniler?kategori=cizme"
                          >
                            <span>Çizme</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Panço"
                            href="/en-yeniler?kategori=panco"
                          >
                            <span>Panço</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Topuklu Ayakkabı"
                            href="/en-yeniler?kategori=topuklu-ayakkabi"
                          >
                            <span>Topuklu Ayakkabı</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Eşarp"
                            href="/en-yeniler?kategori=esarp"
                          >
                            <span>Eşarp</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Parka"
                            href="/en-yeniler?kategori=parka"
                          >
                            <span>Parka</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Eldiven"
                            href="/en-yeniler?kategori=eldiven"
                          >
                            <span>Eldiven</span>
                          </a>
                        </li>
                        <li class="urunKiyaslamaOzellik_ozellik">
                          <a
                            class="urunKiyaslamaOzellik"
                            title="Trençkot"
                            href="/en-yeniler?kategori=trenckot"
                          >
                            <span>Trençkot</span>
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
                            href="/en-yeniler?marka=twist"
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
                            href="/en-yeniler?cinsiyet=kadin"
                          >
                            <span>Kadın</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="prd-list-filter none">
                    <div id="plhUrunSira_chkTemin">
                      <a class="ajx-button" href="/en-yeniler?stk=true">
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
                      <a class="ajx-button" href="/en-yeniler?ind=true">
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
                      <a class="ajx-button" href="/en-yeniler?ynu=true">
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
                    <a
                      class="urunKiyaslamaOzellik"
                      href="/en-yeniler?sort=date_asc"
                      >Yeniler</a
                    >

                    <a
                      class="urunKiyaslamaOzellik"
                      href="/en-yeniler?sort=price_asc"
                      ><span>Artan Fiyat</span></a
                    >

                    <a
                      class="urunKiyaslamaOzellik"
                      href="/en-yeniler?sort=price_desc"
                      ><span>Azalan Fiyat</span></a
                    >

                    <a
                      class="urunKiyaslamaOzellik"
                      href="/en-yeniler?sort=discount_desc"
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
              

            <ProductList/>
            


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
                    <a href="/en-yeniler?page=1">1</a>
                  </li>
                  <li data-pageindex="2" class="paging">
                    <a href="/en-yeniler?page=2">2</a>
                  </li>
                  <li data-pageindex="3" class="paging">
                    <a href="/en-yeniler?page=3">3</a>
                  </li>
                  <li data-pageindex="4" class="paging">
                    <a href="/en-yeniler?page=4">4</a>
                  </li>
                  <li data-pageindex="5" class="paging">
                    <a href="/en-yeniler?page=5">5</a>
                  </li>
                  <li data-pageindex="6" class="paging">
                    <a href="/en-yeniler?page=6">6</a>
                  </li>
                  <li data-pageindex="7" class="paging">
                    <a href="/en-yeniler?page=7">7</a>
                  </li>
                  <li data-pageindex="8" class="paging">
                    <a href="/en-yeniler?page=8">8</a>
                  </li>
                  <li data-pageindex="9" class="paging">
                    <a href="/en-yeniler?page=9">9</a>
                  </li>
                  <li data-pageindex="10" class="paging">
                    <a href="/en-yeniler?page=10">10</a>
                  </li>
                  <li data-pageindex="11" class="paging">
                    <a href="/en-yeniler?page=11">11</a>
                  </li>
                  <li data-pageindex="12" class="paging">
                    <a href="/en-yeniler?page=12">12</a>
                  </li>
                  <li data-pageindex="13" class="paging">
                    <a href="/en-yeniler?page=13">13</a>
                  </li>
                  <li data-pageindex="14" class="paging">
                    <a href="/en-yeniler?page=14">14</a>
                  </li>
                  <li data-pageindex="15" class="paging">
                    <a href="/en-yeniler?page=15">15</a>
                  </li>
                  <li data-pageindex="16" class="paging">
                    <a href="/en-yeniler?page=16">16</a>
                  </li>
                  <li data-pageindex="17" class="paging">
                    <a href="/en-yeniler?page=17">17</a>
                  </li>
                  <li data-pageindex="18" class="paging">
                    <a href="/en-yeniler?page=18">18</a>
                  </li>
                  <li data-pageindex="19" class="paging">
                    <a href="/en-yeniler?page=19">19</a>
                  </li>
                  <li data-pageindex="20" class="paging">
                    <a href="/en-yeniler?page=20">20</a>
                  </li>
                  <li data-pageindex="21" class="paging">
                    <a href="/en-yeniler?page=21">21</a>
                  </li>
                  <li data-pageindex="22" class="paging">
                    <a href="/en-yeniler?page=22">22</a>
                  </li>
                  <li data-pageindex="23" class="paging">
                    <a href="/en-yeniler?page=23">23</a>
                  </li>
                  <li data-pageindex="24" class="paging">
                    <a href="/en-yeniler?page=24">24</a>
                  </li>
                  <li data-pageindex="25" class="paging">
                    <a href="/en-yeniler?page=25">25</a>
                  </li>
                  <li data-pageindex="26" class="paging">
                    <a href="/en-yeniler?page=26">26</a>
                  </li>
                  <li data-pageindex="27" class="paging">
                    <a href="/en-yeniler?page=27">27</a>
                  </li>
                  <li data-pageindex="28" class="paging">
                    <a href="/en-yeniler?page=28">28</a>
                  </li>
                  <li data-pageindex="29" class="paging">
                    <a href="/en-yeniler?page=29">29</a>
                  </li>
                  <li data-pageindex="30" class="paging">
                    <a href="/en-yeniler?page=30">30</a>
                  </li>
                  <li data-pageindex="31" class="paging">
                    <a href="/en-yeniler?page=31">31</a>
                  </li>
                  <li data-pageindex="32" class="paging">
                    <a href="/en-yeniler?page=32">32</a>
                  </li>
                  <li data-pageindex="33" class="paging">
                    <a href="/en-yeniler?page=33">33</a>
                  </li>
                  <li data-pageindex="34" class="paging">
                    <a href="/en-yeniler?page=34">34</a>
                  </li>
                  <li data-pageindex="35" class="paging">
                    <a href="/en-yeniler?page=35">35</a>
                  </li>
                  <li data-pageindex="36" class="paging">
                    <a href="/en-yeniler?page=36">36</a>
                  </li>
                  <li data-pageindex="37" class="paging">
                    <a href="/en-yeniler?page=37">37</a>
                  </li>
                  <li data-pageindex="38" class="paging">
                    <a href="/en-yeniler?page=38">38</a>
                  </li>
                  <li data-pageindex="39" class="paging">
                    <a href="/en-yeniler?page=39">39</a>
                  </li>
                  <li data-pageindex="40" class="paging">
                    <a href="/en-yeniler?page=40">40</a>
                  </li>
                  <li data-pageindex="41" class="paging">
                    <a href="/en-yeniler?page=41">41</a>
                  </li>
                  <li data-pageindex="42" class="paging">
                    <a href="/en-yeniler?page=42">42</a>
                  </li>
                  <li data-pageindex="43" class="paging">
                    <a href="/en-yeniler?page=43">43</a>
                  </li>
                  <li data-pageindex="44" class="paging">
                    <a href="/en-yeniler?page=44">44</a>
                  </li>
                  <li data-pageindex="45" class="paging">
                    <a href="/en-yeniler?page=45">45</a>
                  </li>
                  <li data-pageindex="46" class="paging">
                    <a href="/en-yeniler?page=46">46</a>
                  </li>
                </ul>
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
              <li
                class="navigasyonSeviye1 nav-home"
                itemprop="itemListElement"
                itemscope="itemscope"
                itemtype="http://schema.org/ListItem"
              >
                <a class="homepage" itemprop="item" href="/">
                  <span itemprop="name">ANASAYFA</span>
                </a>
                <meta itemprop="position" content="1" />
              </li>
              <svg class="icon-drop-right">
                <use
                  xlink:href="/Content/Styles/base/icons.svg#drop-right"
                ></use>
              </svg>
              <li
                class="navigasyonSeviye2"
                itemprop="itemListElement"
                itemscope="itemscope"
                itemtype="http://schema.org/ListItem"
              >
                <span itemprop="name"></span>
                <meta itemprop="position" content="2" />
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

   
    <Footer/>

  </div>
</template>

<script>

import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
import ProductList from '../../components/ProductList.vue'

export default {
  components: {
    Header,
    Footer,
    ProductList
},

}

</script>