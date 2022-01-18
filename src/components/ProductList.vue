<template>
    
       <li v-for="product in products" :key="product.id"
                  data-category-name="Mont"
                  data-product-id="10347"
                  data-product-code="TW6210012018002"
                  class="prd ems-prd activeted"
                >
                  <div class="prd-inner" >
                    <router-link
                      class="prd-lnk"
                      to="/UrunSayfasi"
                      rel=""
                    ></router-link>
                    <div class="prd-code none" id="plhUrun_UrnKod" 
                    
                    >10347</div>

                    <div class="prd-image">
                      <div class="prm-media prd-image-org">
                        <img
                          v-bind:src="product.img"
                          alt="Uzun şişme mont"
                          title="Uzun şişme mont"
                          class="activeted"
                        />
                      </div>

                      <div class="prdd-fvr" id="plhUrun_btnFavoriEkle">
                        <div class="urunListe_favoriEkle" id="pnlFavoriEkle">
                          <a
                            class="btnDefault btnFavoriEkle add-to-fav-btn"
                            id="btnFavoriEkle"
                            style="cursor: pointer"
                            onclick="favorite.clicked(this);"
                            ><span>
                              <svg class="icon-favori">
                                <use
                                  xlink:href="/Content/Styles/base/icons.svg#favori"
                                ></use>
                              </svg>
                              <svg class="icon-favori-fill">
                                <use
                                  xlink:href="/Content/Styles/base/icons.svg#favori-fill"
                                ></use></svg></span
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="prd-body">
                      <div class="prd-name">
                       {{product.name}}

                      <div class="prd-badge">
                                
                                        <div class="ems-prd-badge1 urunListe_yeniUrun"><span>{{product.durumu}}</span></div>
                                
                                </div>
                        
                      </div>

                      <div class="prd-price display-flex">
                        <div class="first is-empty">
                          <div class="first-inner display-flex">
                            <div class="urunListe_satisFiyat">{{product.price}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

</template>

<script>
import { useLoadproducts } from "../main";
export default {
  setup() {
    const products = useLoadproducts();
    return { products };
  },
};
</script>