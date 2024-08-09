import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { DashBoardLayout } from '../layouts';
import {
  Header,
  AppButton,
  ImageViewer,
  ExtendedCard
} from '@/components/common';
import * as CONST_CARD_INFO from '../../consts';

describe('DashBoardLayout.vue', () => {
  it('renders Header component', () => {
    const wrapper = mount(DashBoardLayout);
    const header = wrapper.findComponent(Header);
    expect(header.exists()).toBe(true);
  });

  it('renders ImageViewer with correct props', () => {
    const wrapper = mount(DashBoardLayout);
    const imageViewer = wrapper.findComponent(ImageViewer);
    expect(imageViewer.exists()).toBe(true);
    expect(imageViewer.props('altText')).toBe('Image');
    expect(imageViewer.props('imgPath')).toBe('/src/assets/png/image1.png');
  });

  it('renders ExtendedCard components with correct props', () => {
    const wrapper = mount(DashBoardLayout);

    // Check if ExtendedCard components are rendered with correct props
    const extendedCards = wrapper.findAllComponents(ExtendedCard);
    expect(extendedCards).toHaveLength(4);

    // Verify props for each ExtendedCard
    expect(extendedCards[0].props('colCount')).toBe(2);
    expect(extendedCards[0].props('cardFormData')).toBe(
      CONST_CARD_INFO.FormDataItems_1
    );

    expect(extendedCards[1].props('cardFormData')).toBe(
      CONST_CARD_INFO.FormDataItems_2
    );
    expect(extendedCards[2].props('cardFormData')).toBe(CONST_CARD_INFO.FormDataItems_3);
    expect(extendedCards[3].props('cardFormData')).toBe(
      CONST_CARD_INFO.FormDataItems_4
    );
  });

  it('renders AppButton with correct text', () => {
    const wrapper = mount(DashBoardLayout);
    const appButton = wrapper.findComponent(AppButton);
    expect(appButton.exists()).toBe(true);
    expect(appButton.props('text')).toBe('Start Assessment');
  });
});
