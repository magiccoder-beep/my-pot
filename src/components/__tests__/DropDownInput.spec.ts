import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { CommonLabel, DropDownInput } from '@/components/common';

describe('DropDownInput.vue', () => {
  it('renders correctly without props', () => {
    const wrapper = mount(DropDownInput);

    // Check if the input exists and has the correct placeholder
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);

    // Check if the CommonLabel component is not rendered
    const commonLabel = wrapper.findComponent(CommonLabel);
    expect(commonLabel.exists()).toBe(false);
  });

  it('renders with provided props', () => {
    const props = {
      placeholderText: 'Select an option',
      labelText: 'Dropdown'
    };
    const wrapper = mount(DropDownInput, {
      props: {
        ...props,
        options: []
      }
    });

    // Check if the input has the correct placeholder
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe(props.placeholderText);

    // Check if the CommonLabel component is rendered with the correct text
    const commonLabel = wrapper.findComponent(CommonLabel);
    expect(commonLabel.exists()).toBe(true);
    expect(commonLabel.props('text')).toBe(props.labelText);
  });

  it('toggles the dropdown', async () => {
    const wrapper = mount(DropDownInput, {
      props: {
        options: [{ label: 'Option 1', value: '1' }]
      }
    });

    // Check if the dropdown is initially closed
    expect(wrapper.find('.custom-select-options').exists()).toBe(false);

    // Click the dropdown content to open the dropdown
    await wrapper.find('.dropdown-content').trigger('click');
    expect(wrapper.find('.custom-select-options').exists()).toBe(true);
    expect(wrapper.find('.dropdown-arrow-icon').attributes('src')).toBe(
      '/src/assets/png/up-arrow.png'
    );

    // Click the dropdown content again to close the dropdown
    await wrapper.find('.dropdown-content').trigger('click');
    expect(wrapper.find('.custom-select-options').exists()).toBe(false);
    expect(wrapper.find('.dropdown-arrow-icon').attributes('src')).toBe(
      '/src/assets/png/down-arrow.png'
    );
  });

  it('selects an option', async () => {
    const wrapper = mount(DropDownInput, {
      props: {
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' }
        ]
      }
    });
    await wrapper.find('.dropdown-content').trigger('click');
    await wrapper.findAll('.custom-select-option')[0].trigger('click');

    // Check if the selected option is displayed in the input
    const input = wrapper.find('input');
    expect(input.element.value).toBe('Option 1');
    expect(wrapper.find('.custom-select-options').exists()).toBe(false);
    expect(wrapper.find('.dropdown-arrow-icon').attributes('src')).toBe(
      '/src/assets/png/down-arrow.png'
    );
  });

  it('applies correct styles', () => {
    const wrapper = mount(DropDownInput, {
      props: {
        options: [{ label: 'Option 1', value: '1' }]
      }
    });
  });
});
