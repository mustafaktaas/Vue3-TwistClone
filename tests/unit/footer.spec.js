import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer/Footer.vue"


describe('Footer.vue', () => {
    it('Mesajda Twist yazı içeriği bulunmalı', () => {
        const wrapper = mount(Footer, {
            props: {
                msg: "Twist",
            },
        });
        expect(wrapper.text()).toContain("Twist");
    });
});
