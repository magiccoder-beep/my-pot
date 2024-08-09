import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ImageViewer } from '../common';

describe('ImageViewer.vue', () => {

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
  });
});
