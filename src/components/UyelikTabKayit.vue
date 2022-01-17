<template>
    
<main class="site-main">
        


<div class="page page-login">
  <div class="page-login-grid display-grid">
    <div class="ga1 sortable">
      <div id="validateUye">
        <div class="member-login">
          <div class="ems-tab ems-tab-login ems-tab-activeted">
            <div class="ems-header-title"><span>Hoş geldiniz</span></div>
            
            
            
            <div class="ems-tab-header display-flex">
              <div rel="tab-2" class="selected"><span><a href="javascript:void(0);">Yeni Üyelik</a></span></div>
            </div>
                    
            <div class="ems-tab-content">
                       
              <div rel="tab-2" class="ems-signup selected" id="validateYeniUyelik">
                <div class="form">
                  <div class="form-inner signup-form-container">
                  
                     
    <form class="ems-form" id="signup" action="/tr/CreateMember" method="post">
        <div class="row g-20">
           
    
                            <div class="ems-field label-anim">
                              <label class="form-label" for="Name"
                                >* Adınız</label
                              >
                              <input
                                class="
                                  form-control
                                  ems-styler-activeted
                                  act-iStyler
                                "
                                id="Name"
                                name="Name"
                                type="text"
                                v-model="fullname"
                              />
                              <div class="ems-field-feedback"></div>
                            </div>
            <div class="ems-field label-anim is-completed">
                <label class="form-label" for="Email">E-Mail</label>
                <input  v-model="email" class="form-control to-lower-case ems-styler-activeted act-iStyler" id="Email" name="Email" type="text" >
                <div class="ems-field-feedback"></div>
            </div>
            <div class="ems-field label-anim is-completed">
                <label class="form-label" for="Password">Şifre</label>
                <input v-model="password" class="form-control ems-styler-activeted act-iStyler" id="Password" name="Password" type="password">
                <div class="ems-field-feedback"></div>
            </div>
           
            <div class="ems-field">
                <button type="submit" class="btn btn-clr1 btnDefault"><span>ÜYE OL</span></button>
            </div>
            <input name="__RequestVerificationToken" type="hidden" value="" class="ems-styler-activeted act-iStyler">
            <input id="returnUrl" name="returnUrl" type="hidden" value="/tr/Widget/Get/CreateUserRaw" class="ems-styler-activeted act-iStyler">
            <input id="CountryCode" name="CountryCode" type="hidden" value="+90" class="ems-styler-activeted act-iStyler">
            
            <input id="RedirectUrl" name="RedirectUrl" type="hidden" value="/cep-telefonu-dogrulama" class="ems-styler-activeted act-iStyler">
        </div>
    </form>  


   
                    
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="ga2 sortable">
        
        



    <div data-banner="Login Page Slider" class="swiper-container login-page-swiper ems-swiper-activeted item-2 swiper-container-initialized swiper-container-horizontal ems-swiper-ready" data-swiper="widgetAuto">
    
        <div class="ems-none">
        
          <div class="swiper-button-next swiper-button-disabled" tabindex="0" role="button" aria-label="Next slide" aria-disabled="true"><span>İLERİ</span></div>
          <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="false"><span>GERİ</span></div>
          <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 2"></span></div>
  
  
        </div>
    
    
        <div class="swiper-inner">
    
        <ul class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-950px, 0px, 0px);">

                <li data-promo="Login Page Slider 0" data-promo-name="" data-promo-id="" data-promo-position="1" data-promo-creative="https://img2-twist.mncdn.com/Twist/uploads/banner/login/login_2109.jpg" class="swiper-slide sticky promo-not-trigger activeted swiper-slide-prev" data-order="0">
                
                    <div class="banner banner05 ems-animated animated fadeInUp" data-cls="fadeInUp">
                    
                            <picture class="prm-media lazy ratio ratio-gridblock activeted">
                            
                              <source class="lazy-picture" media="(max-width:0)" srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAQAAACh8pzAAAAAEElEQVR42mN8V88ABYzkMQE/CwiVDB4roAAAAABJRU5ErkJggg==">
                              
                              <source media="(max-width: 1024px)" srcset="https://img2-twist.mncdn.com/Twist/uploads/banner/login/login_m_2109.jpg 1x, https://img2-twist.mncdn.com/Twist/uploads/banner/login/login_m_2109.jpg 2x">
                              
                              <source media="(min-width: 1025px)" srcset="https://img2-twist.mncdn.com/Twist/uploads/banner/login/login_2109.jpg">
                              
                              <img class="ratio-item" src="https://img2-twist.mncdn.com/Twist/uploads/banner/login/login_m_2109.jpg" alt="">
                              
                            </picture>

                        
                        
                            
                      
                    </div>
                </li>
                <li data-promo="Login Page Slider 1" data-promo-name="" data-promo-id="" data-promo-position="2" data-promo-creative="https://img2-twist.mncdn.com/Twist/uploads/banner/login/signup_2109.jpg" class="swiper-slide sticky promo-not-trigger activeted swiper-slide-active slide-active" data-order="1">
                
                    <div class="banner banner05 ems-animated animated fadeInUp" data-cls="fadeInUp">
                    
                            <picture class="prm-media lazy ratio ratio-gridblock activeted">
                            
                              <source class="lazy-picture" media="(max-width:0)" srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAQAAACh8pzAAAAAEElEQVR42mN8V88ABYzkMQE/CwiVDB4roAAAAABJRU5ErkJggg==">
                              
                              <source media="(max-width: 1024px)" srcset="https://img2-twist.mncdn.com/Twist/uploads/banner/login/signup_m_2109.jpg 1x, https://img2-twist.mncdn.com/Twist/uploads/banner/login/signup_m_2109.jpg 2x">
                              
                              <source media="(min-width: 1025px)" srcset="https://img2-twist.mncdn.com/Twist/uploads/banner/login/signup_2109.jpg">
                              
                              <img class="ratio-item" src="https://img2-twist.mncdn.com/Twist/uploads/banner/login/signup_m_2109.jpg" alt="">
                              
                            </picture>

                        
                        
                            
                      
                    </div>
                </li>
        
    
        </ul>
        
        </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

    </div>
    
    </div>
</div>
    
    
    </main>

</template>

<script>
import firebase from "firebase/compat";
import { ref } from "vue";

export default {
  setup() {
    const fullname = ref("");
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => alert(err.message));
    };
    return {
      Register,
      fullname,
      email,
      password,
    };
  },
};
</script>