import latteGlassImage from '../../assets/images/2.jpeg'
import coffeeCroissantImage from '../../assets/images/3.jpeg'
import redVelvetCakeImage from '../../assets/images/8.jpeg'
import icedCoffeeMuffinImage from '../../assets/images/9.jpeg'

export const MENU_SECTION = {
  label: 'Menu',
  heading: 'What Chandigarh Keeps Ordering',
  subheading:
    'Popular picks at Costa Coffee Sector 35C, from cappuccino breaks to evening desserts.',
}

export const MENU_CATEGORIES = [
  {
    id: 'hot-coffee',
    label: 'Hot Coffee',
    items: [
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description:
          'The branch favorite: rich espresso with thick, velvety foam and a balanced roast.',
        price: 'Rs 245',
        image: latteGlassImage,
        imageAlt: 'Costa cappuccino served in a white cup',
      },
      {
        id: 'americano',
        name: 'Americano',
        description:
          'Smooth and straightforward for long work sessions and quiet morning reading.',
        price: 'Rs 220',
        image: coffeeCroissantImage,
        imageAlt: 'A hot americano placed on a wooden table',
      },
      {
        id: 'cafe-mocha',
        name: 'Cafe Mocha',
        description:
          'A crowd-pleasing blend of espresso and chocolate, finished with creamy warmth.',
        price: 'Rs 275',
        image: coffeeCroissantImage,
        imageAlt: 'Cafe mocha with chocolate notes',
      },
    ],
  },
  {
    id: 'cold-coffee',
    label: 'Cold Coffee',
    items: [
      {
        id: 'iced-latte',
        name: 'Iced Latte',
        description:
          'Clean espresso over ice and milk, ideal for Chandigarh afternoons.',
        price: 'Rs 255',
        image: icedCoffeeMuffinImage,
        imageAlt: 'Iced latte served chilled',
      },
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description:
          'Slow-steeped and low-acid, with a deep roast profile and smooth finish.',
        price: 'Rs 265',
        image: icedCoffeeMuffinImage,
        imageAlt: 'Cold brew coffee served over ice',
      },
    ],
  },
  {
    id: 'tea',
    label: 'Tea',
    items: [
      {
        id: 'earl-grey',
        name: 'Earl Grey Tea',
        description:
          'Light bergamot aroma and a smooth body for slow, relaxed conversations.',
        price: 'Rs 185',
        image: latteGlassImage,
        imageAlt: 'Hot earl grey tea',
      },
      {
        id: 'green-tea',
        name: 'Green Tea',
        description:
          'A clean and gentle cup preferred by regulars during quieter mornings.',
        price: 'Rs 175',
        image: latteGlassImage,
        imageAlt: 'A cup of green tea',
      },
    ],
  },
  {
    id: 'refreshers',
    label: 'Refreshers',
    items: [
      {
        id: 'lemon-iced-refresher',
        name: 'Lemon Iced Refresher',
        description:
          'Citrus-forward and refreshing, a popular non-coffee order in summer.',
        price: 'Rs 210',
        image: icedCoffeeMuffinImage,
        imageAlt: 'Lemon based cafe refresher with ice',
      },
    ],
  },
  {
    id: 'bakery',
    label: 'Bakery',
    items: [
      {
        id: 'butter-croissant',
        name: 'Butter Croissant',
        description:
          'Freshly baked layers that pair perfectly with cappuccino and mocha.',
        price: 'Rs 195',
        image: coffeeCroissantImage,
        imageAlt: 'A flaky croissant on a plate',
      },
      {
        id: 'blueberry-muffin',
        name: 'Blueberry Muffin',
        description:
          'Soft crumb with fruit notes, often picked for quick takeaway breakfasts.',
        price: 'Rs 205',
        image: icedCoffeeMuffinImage,
        imageAlt: 'Blueberry muffin served in cafe style',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        id: 'new-york-cheesecake',
        name: 'New York Cheesecake',
        description:
          'Creamy and balanced, a favorite with evening coffee meetups.',
        price: 'Rs 285',
        image: redVelvetCakeImage,
        imageAlt: 'Cheesecake slice in a cafe',
      },
      {
        id: 'choco-brownie',
        name: 'Chocolate Brownie',
        description:
          'Rich cocoa and a soft center, usually ordered warm with coffee.',
        price: 'Rs 230',
        image: redVelvetCakeImage,
        imageAlt: 'Warm chocolate brownie dessert',
      },
    ],
  },
]

