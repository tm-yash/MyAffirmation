import {Images} from '../../utils/Images';

export const EditMenu = [
  {icon: Images.pencilEdit, name: 'Add Text', id: 0},
  {
    icon: Images.cropImage,
    name: 'Aspect Ratio',
    id: 1,
  },

  {
    icon: Images.fontChangeIcon,
    name: 'Change Style',
    id: 2,
  },
  {icon: Images.colorBucketIcon, name: 'Add Color', id: 3},
  {
    icon: Images.verticleLineSpace,
    name: 'Change Size',
    id: 4,
  },

  {
    icon: Images.horizontleLineSpace,
    name: 'Letter Spacing',
    id: 5,
  },
  {
    icon: Images.lineHeight,
    name: 'Line Height',
    id: 6,
  },
  {
    icon: Images.textAlighIcon,
    name: 'Change Align',
    id: 7,
  },
];
export const RATIO = [
  {
    icon: Images.square,
    height: 300,
    width: 300,
    text: 'square',
  },
  {
    icon: Images.height,
    height: 512,
    width: 384,
    text: '3:4',
  },
  {
    icon: Images.rac,
    height: 360,
    width: 540,
    text: '3:2',
  },
  {
    icon: Images.racTangle,
    height: 360,
    width: 640,
    text: '16:9',
  },
];

export const TEXT = 'add your quote';
export const WHITE = '#FFF';
export const LEFT = 'left';
export const RIGHT = 'right';
export const CENTER = 'center';
export const ALIGNS = [
  {name: 0, icon: Images.alignLeft},
  {name: 1, icon: Images.alignCenter},
  {name: 2, icon: Images.alignRight},
];
