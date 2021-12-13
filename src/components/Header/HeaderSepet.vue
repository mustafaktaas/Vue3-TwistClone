<template>
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
            <span v-b-toggle.sidebar-right id="buttonCartSidebar">SEPETİM</span>
            <b-sidebar
              id="sidebar-right"
              right
              shadow
              backdrop
              backdrop-variant="secondary"
              bg-variant="white"
            >
              <div class="px-3 py-2">
                <p></p>
                <div id="cartNameProperty">Sepet</div>
              </div>
            </b-sidebar>
          </div>
        </a>
        <a id="sepetButton" href="/User/UserPage">
          <span class="qty shopping-cart-qty" id="lblUrunAdet">0</span>
        </a>
      </div>
    </div>
  </div>
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