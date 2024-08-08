import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ImageViewer } from '../common';

describe('ImageViewer.vue', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(ImageViewer);

    // Check the default styles for the div and img
    const div = wrapper.find('div');
    const img = wrapper.find('img');

    expect(div.attributes('style')).toContain('width: 32%');
    expect(div.attributes('style')).toContain('height: 100%');
    expect(img.attributes('style')).toContain('border-radius: 25px');
    expect(img.attributes('style')).toContain('height: 100%');
  });

  it('renders with provided props', () => {
    const props = {
      altText: 'Sample Image',
      imgPath: '/path/to/image.png',
      radius: '10px',
      imageWidth: '50%',
      imageHeight: '200px'
    };
    const wrapper = mount(ImageViewer, { props });

    // Check img attributes
    const img = wrapper.find('img');
    expect(img.attributes('alt')).toBe(props.altText);
    expect(img.attributes('src')).toBe(props.imgPath);
    expect(img.attributes('style')).toContain(`border-radius: ${props.radius}`);
    expect(img.attributes('style')).toContain(`height: ${props.imageHeight}`);

    // Check div styles
    const div = wrapper.find('div');
    expect(div.attributes('style')).toContain(`width: ${props.imageWidth}`);
    expect(div.attributes('style')).toContain(`height: ${props.imageHeight}`);
  });
});
