import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { AppTextInput } from '@/components/common';
import { CommonLabel } from '@/components/common';

describe('AppTextInput.vue', () => {
  it('renders correctly without props', () => {
    const wrapper = mount(AppTextInput);

    // Check if the input exists and has the correct placeholder
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);

    // Check if the CommonLabel component is not rendered
    const commonLabel = wrapper.findComponent(CommonLabel);
    expect(commonLabel.exists()).toBe(false);
  });

  it('renders with provided props', () => {
    const props = {
      placeholderText: 'Enter text here',
      labelText: 'Label'
    };
    const wrapper = mount(AppTextInput, { props });

    // Check if the input has the correct placeholder
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe(props.placeholderText);

    // Check if the CommonLabel component is rendered with the correct text
    const commonLabel = wrapper.findComponent(CommonLabel);
    expect(commonLabel.exists()).toBe(true);
    expect(commonLabel.props('text')).toBe(props.labelText);
  });
});
