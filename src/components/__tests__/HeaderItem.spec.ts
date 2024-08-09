import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { HeaderItem } from '../common/header/elements'; // Adjust the path accordingly

describe('HeaderItem.vue', () => {
  it('renders props correctly', () => {
    const props = {
      text: 'Sample Text',
      imgPath: '/path/to/image.png',
      status: 'header-text-active',
      textWidth: '100px'
    };
    const wrapper = mount(HeaderItem, {
      props
    });

    // Check if the image src and alt are set correctly
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe(props.imgPath);
    expect(img.attributes('alt')).toBe(props.text);

    // Check if the span has correct class, style, and text
    const span = wrapper.find('span');
    expect(span.classes()).toContain(props.status);
    expect(span.attributes('style')).toContain(`width: ${props.textWidth}`);
    expect(span.text()).toBe(props.text);
  });

  it('applies the correct styles based on the status', () => {
    const props = {
      text: 'Active Item',
      imgPath: '/path/to/image.png',
      status: 'header-text-active',
      textWidth: '150px'
    };
    const wrapper = mount(HeaderItem, {
      props
    });

    const span = wrapper.find('span');
    expect(span.classes()).toContain('header-text-active');
    expect(span.attributes('style')).toContain('width: 150px');
  });

  it('applies default styles when no status is provided', () => {
    const props = {
      text: 'Default Item',
      imgPath: '/path/to/image.png',
      status: '',
      textWidth: '150px'
    };
    const wrapper = mount(HeaderItem, {
      props
    });

    const span = wrapper.find('span');
    expect(span.attributes('style')).toContain('width: 150px');
  });
});
