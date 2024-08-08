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
      CONST_CARD_INFO.Location
    );
    expect(extendedCards[0].props('gap')).toBe('10%');
    expect(extendedCards[0].props('cardWidth')).toBe('66%');

    expect(extendedCards[1].props('cardFormData')).toBe(
      CONST_CARD_INFO.AssetID
    );
    expect(extendedCards[2].props('cardFormData')).toBe(CONST_CARD_INFO.Suburb);
    expect(extendedCards[3].props('cardFormData')).toBe(
      CONST_CARD_INFO.Strategy
    );
  });

  it('renders AppButton with correct text', () => {
    const wrapper = mount(DashBoardLayout);
    const appButton = wrapper.findComponent(AppButton);
    expect(appButton.exists()).toBe(true);
    expect(appButton.props('text')).toBe('Start Assessment');
  });

  it('applies correct styles', () => {
    const wrapper = mount(DashBoardLayout);

    // Check styles for the first column
    const firstCol = wrapper.findAll('.col')[0];
    expect(firstCol.attributes('style')).toContain('height: 310px');

    // Check styles for the second column
    const secondCol = wrapper.findAll('.col')[1];
    expect(secondCol.attributes('style')).toContain('height: 480px');

    // Check styles for the button column
    const buttonCol = wrapper.findAll('.col')[2];
    expect(buttonCol.attributes('style')).toContain('height: 150px');
  });
});
