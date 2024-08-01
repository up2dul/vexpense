import { describe, expect, it } from 'vitest';

import Home from '@/views/Home.vue';
import { mount } from '@vue/test-utils';

describe('Home', () => {
  it('renders properly', () => {
    const wrapper = mount(Home, { props: { msg: 'Home' } });
    expect(wrapper.text()).toContain('Home');
  });
});
