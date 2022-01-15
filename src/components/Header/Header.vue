<template>
  <header class="site-header sticky">
    <div class="site-header-grid display-grid align-items-center">
      <div class="ga1">
        <div class="header-logo obj-desktop align-center">
          <h1 class="inline-block">
            <router-link to="/"
              ><img
                alt="Twist"
                title="Twist"
                src="https://img2-twist.mncdn.com/Twist/frontend/images/logo.svg"
            /></router-link>
          </h1>
        </div>
      </div>

      <div class="ga2">
        <div
          class="
            header-mobile
            display-flex
            justify-between
            align-items-center
            obj-mobile
          "
        >
          <div class="ga0 hs-back">
            <a class="back-page" href="javascript:history.go(-1)">
              <svg class="icon-drop-left">
                <use
                  xlink:href="/Content/Styles/base/icons.svg#drop-left"
                ></use></svg
            ></a>
          </div>

          <div class="ga1">
            <a
              class="open-search ems-search-trigger"
              href="javascript:void(0);"
            >
              <svg class="icon-search">
                <use
                  xlink:href="/Content/Styles/base/icons.svg#search"
                ></use></svg
            ></a>
          </div>

          <div class="ga2">
            <a class="header-mobile-logo" href="/"
              ><img
                alt="Twist"
                title="Twist"
                src="https://img2-twist.mncdn.com/Twist/frontend/images/logo.svg" /></a
            ><a href="/"> <div class="mobilePageTitle"></div></a>
          </div>

          <div class="ga3">
            <a
              class="go-cart display-flex justify-between align-items-center"
              href="/sepet"
            >
              <svg class="icon-basket">
                <use
                  xlink:href="/Content/Styles/base/icons.svg#basket"
                ></use></svg
              ><b class="qty shopping-cart-qty">0</b></a
            >
          </div>

          <div class="ga4">
            <a
              data-target="body"
              data-ready="menu-ready"
              data-animate="menu-animate"
              data-type="toggle"
              class="open-menu"
              href="javascript:void(0);"
            >
              <svg class="icon-menu">
                <use
                  xlink:href="/Content/Styles/base/icons.svg#menu"
                ></use></svg
            ></a>
          </div>
        </div>

        <div class="menu ems-menu main-menu ems-menu-activeted">
          <div class="menu-top obj-mobile">
            <div class="menu-basket">
              <a
                class="go-cart display-flex justify-between align-items-center"
                href="/sepet"
              >
                <svg class="icon-basket">
                  <use
                    xlink:href="/Content/Styles/base/icons.svg#basket"
                  ></use></svg
                ><b class="qty shopping-cart-qty">0</b></a
              >
            </div>

            <div
              data-target="body"
              data-ready="menu-ready"
              data-animate="menu-animate"
              data-type="remove"
              class="menu-close"
            >
              <a class="menu-overlay" href="javascript:void(0)">
                <svg class="icon icon-close">
                  <use
                    xlink:href="/Content/Styles/base/icons.svg#close"
                  ></use></svg
              ></a>
            </div>
          </div>

          <ul class="lvl-1 display-flex">

            <li class="sub-items" style="order: 0">
              
              <router-link
                target="_self"
                class="header-height relative align-items-center display-flex"
                to="/NewProducts"
                rel=" "
                >YEPYENİ
              </router-link>
              <div class="sub absolute transition animated fadeIn faster">
                <ul class="lvl-2 columnCount2">
                  <li class="" style="order: 0">
                    <a target="_self" class="" href="/en-yeniler" rel=" "
                      >Yepyeni <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 1">
                    <a target="_self" class="" href="/elbise-modelleri" rel=" "
                      >Elbise <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 2">
                    <a target="_self" class="" href="/bluz-modelleri" rel=" "
                      >Bluz <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 3">
                    <a
                      target="_self"
                      class=""
                      href="/kadin-pantolon-modelleri"
                      rel=" "
                      >Pantolon <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 4">
                    <a target="_self" class="" href="/ayakkabi" rel=" "
                      >Ayakkabı <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 5">
                    <a target="_self" class="" href="/aksesuar" rel=" "
                      >Aksesuar <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 6">
                    <a target="_self" class="" href="/ultra-cool" rel=" "
                      >ULTRA COOL <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 7">
                    <a target="_self" class="" href="/yeni-akim" rel=" "
                      >YENİ AKIM <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 8">
                    <a target="_self" class="" href="/dama-oyunu" rel=" "
                      >DAMA OYUNU <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 9">
                    <a target="_self" class="" href="/yeni-normal" rel=" "
                      >YENİ NORMAL
                      <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 10">
                    <a target="_self" class="" href="/parizyen-akim" rel=" "
                      >PARİZYEN AKIM
                      <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 11">
                    <a target="_self" class="" href="/yesil-otesi" rel=" "
                      >YEŞİL VE ÖTESİ
                      <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="sub-items" style="order: 1">
              <router-link
                target="_self"
                class="header-height relative align-items-center display-flex"
                to="/Collection"
                rel=" "
                >KOLEKSİYON
              </router-link>

              <div class="sub absolute transition animated fadeIn faster">
                <ul class="lvl-2 columnCount3">
                  <li class="showSubLVL sub-items" style="order: 0">
                    <a
                      target="_self"
                      class=""
                      href="javascript:void(0);"
                      rel=" "
                      >Temalar <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >

                    <ul class="lvl-3 columnCount1">
                      <li class="" style="order: 1">
                        <a target="_self" class="" href="/ultra-cool" rel=" "
                          >ULTRA COOL
                        </a>
                      </li>
                      <li class="" style="order: 2">
                        <a target="_self" class="" href="/yeni-akim" rel=" "
                          >YENİ AKIM
                        </a>
                      </li>
                      <li class="" style="order: 3">
                        <a target="_self" class="" href="/parizyen-akim" rel=" "
                          >PARİZYEN AKIM
                        </a>
                      </li>
                      <li class="" style="order: 4">
                        <a target="_self" class="" href="/dama-oyunu" rel=" "
                          >DAMA OYUNU
                        </a>
                      </li>
                      <li class="" style="order: 5">
                        <a target="_self" class="" href="/yeni-normal" rel=" "
                          >YENİ NORMAL
                        </a>
                      </li>
                      <li class="" style="order: 6">
                        <a target="_self" class="" href="/yesil-otesi" rel=" "
                          >YEŞİL VE ÖTESİ
                        </a>
                      </li>
                      <li class="" style="order: 7">
                        <a
                          target="_self"
                          class=""
                          href="/haftanin-favorisi"
                          rel=" "
                          >BEST SELLERS
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="showSubLVL sub-items" style="order: 1">
                    <a target="_self" class="" href="/giyim" rel=" "
                      >Giyim <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >

                    <ul class="lvl-3 columnCount2">
                      <li class="" style="order: 0">
                        <a
                          target="_self"
                          class=""
                          href="/elbise-modelleri"
                          rel=" "
                          >Elbise
                        </a>
                      </li>
                      <li class="" style="order: 1">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-triko-kazak"
                          rel=" "
                          >KAZAK
                        </a>
                      </li>
                      <li class="" style="order: 2">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-sweatshirt-modelleri"
                          rel=" "
                          >SWEATSHIRT
                        </a>
                      </li>
                      <li class="" style="order: 3">
                        <a
                          target="_self"
                          class=""
                          href="/kot-pantolon-modelleri"
                          rel=" "
                          >JEAN
                        </a>
                      </li>
                      <li class="" style="order: 4">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-gomlek-modelleri"
                          rel=" "
                          >GÖMLEK
                        </a>
                      </li>
                      <li class="" style="order: 4">
                        <a
                          target="_self"
                          class=""
                          href="/bluz-modelleri"
                          rel=" "
                          >BLUZ
                        </a>
                      </li>
                      <li class="" style="order: 5">
                        <a
                          target="_self"
                          class=""
                          href="/etek-modelleri"
                          rel=" "
                          >ETEK
                        </a>
                      </li>
                      <li class="hideSubLVL" style="order: 7">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-yelek-modelleri"
                          rel=" "
                          >Yelek
                        </a>
                      </li>
                      <li class="" style="order: 8">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-ceket-modelleri"
                          rel=" "
                          >CEKET
                        </a>
                      </li>
                      <li class="" style="order: 9">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-tshirt-modelleri"
                          rel=" "
                          >T-SHIRT
                        </a>
                      </li>
                      <li class="" style="order: 10">
                        <a
                          target="_self"
                          class=""
                          href="/tulum-modelleri"
                          rel=" "
                          >TULUM
                        </a>
                      </li>
                      <li class="" style="order: 11">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-pantolon-modelleri"
                          rel=" "
                          >PANTOLON
                        </a>
                      </li>
                      <li class="" style="order: 12">
                        <a
                          target="_self"
                          class=""
                          href="/kadin-jogger-pantolon-modelleri"
                          rel=" "
                        >
                          JOGGER PANTOLON
                        </a>
                      </li>
                      <li class="" style="order: 13">
                        <a target="_self" class="" href="/kadin-sort" rel=" ">
                          ŞORT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="hideSubLVL" style="order: 3">
                    <a target="_self" class="" href="/dis-giyim" rel=" "
                      >Dış Giyim <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="hideSubLVL" style="order: 14">
                    <a target="_self" class="" href="/ayakkabi" rel=" "
                      >Ayakkabı <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="hideSubLVL" style="order: 14">
                    <a target="_self" class="" href="/taki" rel=" "
                      >Takı <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="hideSubLVL" style="order: 15">
                    <a target="_self" class="" href="/aksesuar" rel=" "
                      >Aksesuar <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="hideLVL" style="order: 2">
              <router-link
                target="_self"
                class="header-height relative align-items-center display-flex"
                to="/ShopByLook"
                rel=" "
                >SHOP BY LOOK
              </router-link>
            </li>
            <li class="" style="order: 3">
              <router-link
                target="_self"
                class="header-height relative align-items-center display-flex"
                to="/TwistZone"
                rel=" "
                >TWIST ZONE
              </router-link>
            </li>
            <li class="hideLVL twisterpicks-button" style="order: 4">
              <a
                target="_self"
                class="header-height relative align-items-center display-flex"
                href="/twisterpicks"
                rel=" "
              >
                #TWISTERSPICKS
              </a>
            </li>
            <li class="sub-items" style="order: 4">
              <router-link
                target="_self"
                class="header-height relative align-items-center display-flex"
                to="/Outlet"
                rel=" "
                >Outlet
              </router-link>

              <div class="sub absolute transition animated fadeIn faster">
                <ul class="lvl-2 columnCount3">
                  <li class="showSubLVL sub-items" style="order: 0">
                    <a target="_self" class="" href="/outlet-giyim" rel=" "
                      >Giyim <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >

                    <ul class="lvl-3 columnCount2">
                      <li class="" style="order: 1">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-elbise-modelleri"
                          rel=" "
                          >Elbise
                        </a>
                      </li>
                      <li class="" style="order: 2">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kadin-ceket-modelleri"
                          rel=" "
                          >Ceket
                        </a>
                      </li>
                      <li class="" style="order: 3">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-tulum-modelleri"
                          rel=" "
                          >TULUM
                        </a>
                      </li>
                      <li class="" style="order: 4">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kadin-triko-kazak"
                          rel=" "
                          >Kazak
                        </a>
                      </li>
                      <li class="" style="order: 5">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kadin-tshirt-modelleri"
                          rel=" "
                          >T-Shirt
                        </a>
                      </li>
                      <li class="" style="order: 6">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kadin-sweatshirt-modelleri"
                          rel=" "
                          >Sweatshirt
                        </a>
                      </li>
                      <li class="" style="order: 7">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-bluz-modelleri"
                          rel=" "
                          >Bluz
                        </a>
                      </li>
                      <li class="" style="order: 8">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kadin-gomlek-modelleri"
                          rel=" "
                          >Gömlek
                        </a>
                      </li>
                      <li class="" style="order: 9">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kadin-sort"
                          rel=" "
                          >Şort
                        </a>
                      </li>
                      <li class="" style="order: 10">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-etek-modelleri"
                          rel=" "
                          >Etek
                        </a>
                      </li>
                      <li class="" style="order: 11">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kot-pantolon-modelleri"
                          rel=" "
                          >Jean
                        </a>
                      </li>
                      <li class="" style="order: 12">
                        <a
                          target="_self"
                          class=""
                          href="/outlet-kadin-pantolon-modelleri"
                          rel=" "
                          >Pantolon
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="hideSubLVL" style="order: 0">
                    <a target="_self" class="" href="/outlet-dis-giyim" rel=" "
                      >Dış Giyim <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="hideSubLVL" style="order: 1">
                    <a target="_self" class="" href="/outlet-ayakkabi" rel=" "
                      >Ayakkabı <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="hideSubLVL" style="order: 2">
                    <a target="_self" class="" href="/outlet-taki" rel=" "
                      >Takı <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                  <li class="" style="order: 3">
                    <a target="_self" class="" href="/outlet-aksesuar" rel=" "
                      >Aksesuar <span class="lvl-close lvl-close-plus">+</span
                      ><span class="lvl-close lvl-close-minus">-</span></a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="hideLVL m-bttm-15 m-top-30 corplvl obj-mobile"
              style="order: 5"
            >
              <a
                target="_self"
                class="header-height relative align-items-center display-flex"
                href="/bddk-bilgi-icerigi"
                rel=" "
                >BDDK ONAYI
              </a>
            </li>
            <li class="hideLVL corplvl m-bttm-15 obj-mobile" style="order: 6">
              <a
                target="_blank"
                class="header-height relative align-items-center display-flex"
                href="https://mths.ttr.com.tr/firmabilgileri.aspx?mersis=4790044094000012"
                rel="noreferrer nofollow "
                >BİLGİ TOPLUMU HİZMETLERİ
              </a>
            </li>
            <li class="hideLVL corplvl m-bttm-15 obj-mobile" style="order: 7">
              <a
                target="_self"
                class="header-height relative align-items-center display-flex"
                href="/gizlilik-bildirgesi/"
                rel=" "
                >VERİLERİN KORUNMASI
              </a>
            </li>
            <li class="hideLVL corplvl m-bttm-15 obj-mobile" style="order: 8">
              <a
                target="_self"
                class="header-height relative align-items-center display-flex"
                href="/gizlilik-bildirgesi/"
                rel=" "
                >GİZLİLİK BİLDİRGESİ
              </a>
            </li>
            <li class="hideLVL corplvl m-bttm-60 obj-mobile" style="order: 9">
              <a
                target="_self"
                class="header-height relative align-items-center display-flex"
                href="/kullanim-kosullari/"
                rel=" "
                >KULLANIM SÖZLEŞMESİ
              </a>
            </li>
            <li class="hideLVL corplvl m-bttm-30 obj-mobile" style="order: 10">
              <a
                target="_blank"
                class="header-height relative align-items-center display-flex"
                href="https://twitter.com/TwistTurkiye"
                rel="noreferrer nofollow "
                >TWITTER
              </a>
            </li>
            <li class="hideLVL corplvl m-bttm-30 obj-mobile" style="order: 12">
              <a
                target="_blank"
                class="header-height relative align-items-center display-flex"
                href="https://www.facebook.com/twist.turkiye"
                rel="nofollow noreferrer "
                >FACEBOOK
              </a>
            </li>
            <li class="hideLVL corplvl m-bttm-30 obj-mobile" style="order: 13">
              <a
                target="_blank"
                class="header-height relative align-items-center display-flex"
                href="https://www.instagram.com/twistturkiye/"
                rel="nofollow noreferrer "
                >INSTAGRAM
              </a>
            </li>
          </ul>

          <ul class="menu-user-info obj-mobile display-flex align-items-center">
            <div class="homeBtn"><a href="/">ANASAYFA</a></div>

            <li class="ems-obj-logoff">
              <a
                class="btn-menu-title"
                href="javascript:document.location.href='/giris?returnUrl=' + window.location.pathname;"
                >ÜYE GİRİŞİ / YENİ ÜYELİK</a
              >
            </li>

            <li class="ems-obj-login sub-items">
              <a
                data-target="body"
                data-ready="mini-user-ready"
                data-animate="mini-user-animate"
                data-type="toggle"
                class="btn-menu-title"
                href="javascript:void(0);"
              >
                <svg class="icon icon-drop-left">
                  <use
                    xlink:href="/Content/Styles/base/icons.svg#drop-left"
                  ></use>
                </svg>
                HESABIM</a
              >

              <div class="sub memberLogonMobi"></div>
            </li>
          </ul>
          <div class="top-menu-append obj-mobile"></div>
        </div>
      </div>
      <div class="ga3">
        <div class="mini-lang obj-desktop dropdown">
          <div class="dropdown-header header-height">
            <span id="multiIcon-tr-TR"
              ><img border="0" /><b class="emos_invisible"></b
            ></span>
          </div>
          <ul class="sub">
            <!-- /default.aspx?lang=en-US -->

            <li>
              <a class="multiLink-tr-TR selected" href="/"
                ><span id="multiIcon-tr-TR"
                  ><img border="0" /><b class="emos_invisible"></b></span
              ></a>
            </li>
          </ul>
          <div class="mod-lang-footer"></div>
        </div>
      </div>
      <div class="ga4"></div>

      <div>
          <div class="ga5">
    <div class="mini-search ems-search ems-search-activeted">
      <div
        data-target="body"
        data-ready="mini-search-ready"
        data-animate="mini-search-animate"
        data-type="remove"
        class="ems-overlay mini-search-overlay"
      ></div>

      <div
        class="
          mini-search-info
          ems-search-trigger
          obj-desktop
          header-height
          display-flex
          align-items-center
        "
        id="plhAramaHeader"
      >
      <router-link to="/UserPage">
        <span>GİRİŞ YAP</span>
      </router-link>
      </div>

      <div class="mini-search-sub absolute transition">
        <span>
          <a
            class="sub-close"
            href="javascript:void(0);"
            data-target="body"
            data-ready="mini-search-ready"
            data-animate="mini-search-animate"
            data-type="remove"
          >
            <svg class="icon-close obj-desktop">
              <use xlink:href="/Content/Styles/base/icons.svg#close"></use>
            </svg>
            <svg class="icon-drop-left obj-mobile">
              <use
                xlink:href="/Content/Styles/base/icons.svg#drop-left"
              ></use></svg
          ></a>
        </span>

        <div class="form">
          <div class="form-inner">
            <div
              class="
                mini-search-input
                display-flex
                justify-between
                flex-field-wrap
              "
            >
              <div class="field field-single">
                <div class="form-label obj-desktop" id="plhFreeLabel1">
                  <span></span>
                </div>
                <div class="form-obj search-input ems-search-input">
                  <input
                    id="txtARM_KEYWORD"
                    name="txtARM_KEYWORD"
                    type="text"
                    maxlength="55"
                    autocomplete="off"
                    data-max="3"
                    value=""
                    placeholder="Arama yapmak için tıklayınız"
                    class="ems-styler-activeted act-iStyler"
                  />

                  <div
                    class="mini-search-btn ems-search-submit-button"
                    id="plhBtnAra"
                  >
                    <a class="btnDefault btnArama" href="javascript:void(0);">
                      <span>
                        <svg class="icon-search">
                          <use
                            xlink:href="/Content/Styles/base/icons.svg#search"
                          ></use></svg
                      ></span>
                    </a>
                  </div>

                  <div
                    class="searchSuggestDiv ems-search-results"
                    id="search_suggest"
                  ></div>
                </div>
              </div>
            </div>
            <div class="field no-result" rel="lbfSonuc0"></div>
            <div class="field popular-search-words-append">
              <div class="popular-search-words" banner-id="id-18012">
                <div class="ems-section-wrapper">
                  <div class="ems-section-inner">
                    <div class="ems-section-title">POPÜLER ARAMALAR</div>
                  </div>
                </div>
                <div
                  class="swiper-container not-trigger"
                  data-duration="0"
                  data-swiper="widgetAuto"
                  data-total="$prmDataUriQty$"
                >
                  <div class="swiper-inner">
                    <ul class="swiper-wrapper">
                      <li class="swiper-slide sticky">
                        <a target="_self" href="/arama?q=ayakkabi" rel=" "
                          >Ayakkabı
                        </a>
                      </li>
                      <li class="swiper-slide sticky">
                        <a target="_self" href="/arama?q=elbise" rel=" "
                          >Elbise
                        </a>
                      </li>
                      <li class="swiper-slide sticky">
                        <a target="_self" href="/arama?q=aksesuar" rel=" "
                          >Aksesuar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>

      <div>
         <div class="ga6">
    <div id="validateLogin">
      <div class="mini-user relative obj-desktop">
        <div
          data-target="body"
          data-ready="mini-user-ready"
          data-animate="mini-user-animate"
          data-type="remove"
          class="ems-overlay mini-user-overlay"
        ></div>

        <div class="obj-logoff">
          <div
            class="mini-user-info header-height display-flex align-items-center"
            id="plhUyeGirisHeader"
          >
          <router-link to="/UserPageKayit">
            <span>ÜYE OL</span>
          </router-link>
          </div>
        </div>

        <div class="obj-login">
          <div
            class="mini-user-info header-height display-flex align-items-center"
            id="plhHesabimHeader"
          >
            <span class="memberLogon">
              <span class="signinHeader none">HESABIM</span>
            </span>
          </div>

          <div class="mini-user-sub absolute transition memberMenu"></div>
        </div>
      </div>
    </div>
  </div>
      </div>


      <div>
    <div class="ga7">
    <div class="mini-cart obj-desktop">
      <div
        data-target="body"
        data-ready="mini-cart-ready"
        data-animate="mini-cart-animate"
        data-type="toggle"
        class="
          ems-cart-trigger
          mini-cart-info
          header-height
          display-flex
          align-items-center
        "
      >
        <a>
          <div>
            <span >SEPETİM</span>
           
          </div>
        </a>
        <a id="sepetButton" href="/User/UserPage">
          <span class="qty shopping-cart-qty" id="lblUrunAdet">0</span>
        </a>
      </div>
    </div>
  </div>
      </div>
    </div>
  </header>
</template>

<style>
#buttonCartSidebar {
  font-size: 12.2px;
}

#sidebar-right {
  width: 500px;
}

#cartNameProperty {
  margin-top: 50px;
  margin-left: 40px;
  font-weight: 300;
  font-size: 35px;
}
</style>

