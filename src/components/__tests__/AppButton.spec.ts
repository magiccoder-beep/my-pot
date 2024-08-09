import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { AppButton } from '../common';

describe('AppButton', () => {
  it('renders the button with the correct text', () => {
    const wrapper = mount(AppButton, { props: { text: 'Click Me' } });
    expect(wrapper.text()).toContain('Click Me');
  });
});
