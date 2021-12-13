<template>
  <div class="ems-page-error">
    <div class="ems-page-error-grid ems-grid">
      <div class="ga1 sortable">
        <div class="marquee-wrp">
          <picture style="position: relative">
            <source
              media="(max-width: 1024px)"
              srcset="
                https://img2-twist.mncdn.com/Twist/frontend/images/file-not-found-mobile.jpg 1x,
                https://img2-twist.mncdn.com/Twist/frontend/images/file-not-found-mobile.jpg 2x
              "
            />
            <source
              media="(min-width: 1025px)"
              srcset="
                https://img2-twist.mncdn.com/Twist/frontend/images/file-not-found-mobile.jpg
              "
            />
            <img
              class="notFound-background"
              src="https://img2-twist.mncdn.com/Twist/frontend/images/file-not-found.jpg"
            />
          </picture>
          <div
            data1="LET'S FIND THE PRODUCT YOU'RE LOOKING FOR &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;"
            class="marquee marquee-header"
          ></div>

          <div class="errorsearch">
              Search on Twist
          </div>

           <div class="errorsearch2" >
              Search here to discover products you can try.
          </div>
          
            <a href="/" class="btn btn-secondary btn-error"
              ><span>Return to Home Page</span></a
            >
          </div>
        </div>
      </div>
    </div>
  
</template>

<style>

.errorsearch
{
    margin-top: 50px;
    margin-left: 850px;
}

.errorsearch2
{
    margin-top: 50px;
    margin-left: 750px;
}


</style>