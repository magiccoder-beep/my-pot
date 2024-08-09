import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import {
  ExtendedCard,
  DropDownInput,
  DatePickerInput,
  AppTextInput
} from '../common';

describe('ExtendedCard', () => {
  it('renders the correct components based on cardFormData', () => {
    const cardFormData = [
      { type: 'TEXT', label: 'Name', placeholder: 'Enter your name' },
      {
        type: 'DROPDOWN',
        label: 'Country',
        placeholder: 'Select your country',
        options: []
      },
      { type: 'DATE', label: 'Date', placeholder: 'Select a date' }
    ];

    const wrapper = mount(ExtendedCard, {
      props: {
        cardFormData
      },
      global: {
        components: {
          AppTextInput,
          DropDownInput,
          DatePickerInput
        }
      }
    });

    expect(wrapper.findComponent(AppTextInput).exists()).toBe(true);
    expect(wrapper.findComponent(DropDownInput).exists()).toBe(true);
    expect(wrapper.findComponent(DatePickerInput).exists()).toBe(true);
  });
});
