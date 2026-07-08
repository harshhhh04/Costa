import heroBreadImage   from '../../assets/images/hero-bread.png'
import serveTableImage  from '../../assets/images/serve-table.png'
import { SIRDOUGH_IMAGES } from './contact.js'

export const GALLERY_SECTION = {
  label: 'Made Here',
  heading: 'Made here,\nevery morning.',
  subheading:
    'From the first score to the last slice. A few frames from inside.',
}

export const GALLERY_IMAGES = [
  {
    id: 'gallery-interior-warm',
    src: SIRDOUGH_IMAGES.warmInterior,
    alt: 'Sir Dough warm interior with ambient lighting and seating',
  },
  {
    id: 'gallery-bread-fresh',
    src: heroBreadImage,
    alt: 'Freshly baked artisan sourdough loaf with dark crust',
  },
  {
    id: 'gallery-spacious',
    src: SIRDOUGH_IMAGES.spaciousLayout,
    alt: 'Spacious Sir Dough cafe layout with natural light',
  },
  {
    id: 'gallery-outdoor',
    src: SIRDOUGH_IMAGES.outdoorSeating,
    alt: 'Outdoor seating area at Sir Dough',
  },
  {
    id: 'gallery-hero-shot',
    src: SIRDOUGH_IMAGES.heroImg,
    alt: 'Sir Dough signature coffee and pastry',
  },
  {
    id: 'gallery-serve-table',
    src: serveTableImage,
    alt: 'Sliced sourdough on wooden table with coffee and butter',
  },
]
