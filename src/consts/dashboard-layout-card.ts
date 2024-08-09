import type { FormInputData } from './types';

import { INPUT_TYPES } from './common';
import imageSrc from '@/assets/png/image1.png';
import arrowDownImgSrc from '@/assets/png/down-arrow.png';
import arrowUpImgSrc from '@/assets/png/up-arrow.png.png';

export const FormDataItems_1: FormInputData[] = [
  {
    label: 'Location',
    placeholder: 'Loren lpsum',
    type: INPUT_TYPES.Text
  },
  {
    label: 'IRR',
    placeholder: 'Loren lpsum',
    type: INPUT_TYPES.Text
  },
  {
    label: 'Deal Leader / Support',
    placeholder: 'Loren lpsum',
    type: INPUT_TYPES.Text
  },
  {
    label: 'Tenant Profile',
    placeholder: 'Loren lpsum',
    type: INPUT_TYPES.Text
  },
  {
    label: 'Bid Price',
    placeholder: 'Loren lpsum',
    type: INPUT_TYPES.Text
  },
  {
    label: 'Team Votes',
    placeholder: 'Loren lpsum',
    type: INPUT_TYPES.Text
  }
];

export const FormDataItems_2: FormInputData[] = [
  {
    label: 'Asset ID',
    placeholder: '6 Forary street Yennora',
    type: INPUT_TYPES.Text
  },

  {
    label: 'Acquistion Data',
    placeholder: '07/07/2023',
    type: INPUT_TYPES.Date
  },

  {
    label: 'Address',
    placeholder: '6 Forary street',
    type: INPUT_TYPES.Text
  }
];

export const FormDataItems_3: FormInputData[] = [
  {
    label: 'Suburb',
    placeholder: 'Yennora(2161)',
    type: INPUT_TYPES.Dropdown,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  },
  {
    label: 'Sector',
    placeholder: 'Yennora(2161)',
    type: INPUT_TYPES.Dropdown,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  },
  {
    label: 'Precint',
    placeholder: 'Yennora(2161)',
    type: INPUT_TYPES.Dropdown,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  },
  {
    label: 'Fund',
    placeholder: 'Yennora(2161)',
    type: INPUT_TYPES.Dropdown,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  }
];

export const FormDataItems_4: FormInputData[] = [
  {
    label: 'Strategy',
    placeholder: 'Valude Add',
    type: INPUT_TYPES.Dropdown,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  },
  {
    label: 'Grade',
    placeholder: 'C Grade',
    type: INPUT_TYPES.Dropdown,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  },
  {
    label: 'Precint',
    placeholder: 'Sean Fleming',
    type: INPUT_TYPES.Text
  },
  {
    label: 'Value Add Strategy',
    placeholder: 'Refurbishment & Reletting',
    type: INPUT_TYPES.Dropdown,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  }
];

export const ImageUrl = imageSrc;
export const ImageAltText = 'Image';

export const StartAssessmentButtonText = 'Start Assessment';

export const downArrowImage = arrowDownImgSrc;
export const upArrowImage = arrowUpImgSrc;