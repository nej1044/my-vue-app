import { mount } from "@vue/test-utils";
import Example from "./Example.vue";

test('메세지를 변경합니다.', async () => {
    const wrapper = mount(Example)
    expect(wrapper.vm.msg).toBe('Hello Vue test utils!!')
    // wrapper.vm.msg = 'Hello GRACE!!'
    await wrapper.setData({
        msg: 'Hello GRACE!!'
    })
    expect(wrapper.vm.msg).toBe('Hello GRACE!!')
    expect(wrapper.find('div').text()).toBe('Hello GRACE??')
})