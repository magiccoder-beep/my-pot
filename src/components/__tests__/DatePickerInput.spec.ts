import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { CommonLabel, DatePickerInput } from '@/components/common';

describe('DatePickerInput.vue', () => {
  it('renders correctly without props', () => {
    const wrapper = mount(DatePickerInput);

    // Check if the input exists and has the correct placeholder
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);

    // Check if the CommonLabel component is not rendered
    const commonLabel = wrapper.findComponent(CommonLabel);
    expect(commonLabel.exists()).toBe(false);
  });

  it('renders with provided props', () => {
    const props = {
      placeholderText: 'Select a date',
      labelText: 'Date Picker'
    };
    const wrapper = mount(DatePickerInput, { props });

    // Check if the input has the correct placeholder
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe(props.placeholderText);

    // Check if the CommonLabel component is rendered with the correct text
    const commonLabel = wrapper.findComponent(CommonLabel);
    expect(commonLabel.exists()).toBe(true);
    expect(commonLabel.props('text')).toBe(props.labelText);
  });

  it('opens and closes the calendar', async () => {
    const wrapper = mount(DatePickerInput);

    // Check if the calendar is initially closed
    expect(wrapper.find('.calendar').exists()).toBe(false);

    // Click the input to open the calendar
    await wrapper.find('input').trigger('click');
    expect(wrapper.find('.calendar').exists()).toBe(true);

    // Click the input again to close the calendar
    await wrapper.find('input').trigger('click');
    expect(wrapper.find('.calendar').exists()).toBe(false);
  });

  it('selects a date', async () => {
    const wrapper = mount(DatePickerInput);

    // Open the calendar
    await wrapper.find('input').trigger('click');

    // Find and click the date (e.g., the 15th of the month)
    const day = wrapper.find('.calendar-day');
    await day.trigger('click');

    // Check if the input value is updated with the selected date
    const input = wrapper.find('input');
    expect(input.element.value).toMatch(/\d{2}\/\d{2}\/\d{4}/); // Verify the date format
  });

  it('applies correct styles', async () => {
    const wrapper = mount(DatePickerInput);

    // Open the calendar
    await wrapper.find('input').trigger('click');

    // Check if the input has the correct styles
    const input = wrapper.find('input');
    expect(input.classes()).toContain('date-picker-input');
  });
});
