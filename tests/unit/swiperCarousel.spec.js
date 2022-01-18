import { mount } from "@vue/test-utils";
import swipercarousel from "@/components/SwiperCarousel.vue"

describe('SwiperCarousel.vue', () => {
    it('Carouselin dıştaki div in class ı carousel slide carousel-fade olmalı', () => {
        const wrapper = mount(swipercarousel);
        const carosel = wrapper.find('#carouselVideoExample');
        expect(carosel.attributes()['class']).toBe('carousel slide carousel-fade');
    });

});