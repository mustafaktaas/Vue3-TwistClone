import { mount } from "@vue/test-utils";
import UyeOl from "@/components/UyelikTabKayit.vue"


describe('UyelikTabKayit.vue', () => {
    it('Profil linki oluşturulur', () => {
        const wrapper = mount(UyeOl, {
            data() {
                return {
                    isLoggedin: true,
                };
            }
        });
        const proflink = wrapper.get('#profile');
        expect(proflink.text()).toEqual("my profile");
    });


    it('Profil linki oluşturulmamalıdır', () => {
        const wrapper = mount(UyeOl, {
            data() {
                return {
                    isLoggedin: false,
                };
            }
        });
        const proflink = wrapper.find('#profile');
        expect(proflink.exists()).toBe(false);
    });
});