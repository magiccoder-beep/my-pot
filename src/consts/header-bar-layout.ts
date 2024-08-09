import dashboardIconSrc from '@/assets/png/dashboard.png';
import assetIconSrc from '@/assets/png/asset.png';
import assessmentIconSrc from '@/assets/png/assessment.png';

export const headerBarLayoutConst = [
  {
    text: 'Dashboard',
    imgPath: dashboardIconSrc,
    status: 'header-text-active'
  },
  {
    text: 'Asset',
    imgPath: assetIconSrc,
    status: 'header-text-active',
    textWidth: '70px'
  },
  {
    text: 'Assessment',
    imgPath: assessmentIconSrc,
    status: 'header-text-active',
    textWidth: '110px'
  },
  {
    text: 'Summary',
    marginLeft: '35px',
    imgPath: assetIconSrc,
    status: 'header-text'
  },
  {
    text: 'Report',
    imgPath: assetIconSrc,
    status: 'header-text'
  }
];
