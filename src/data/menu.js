import coffeeItem1 from '../../assets/images/coffee-item-1.jpeg'
import coffeeItem2 from '../../assets/images/coffee-item-2.jpeg'

export const MENU_SECTION = {
  label: 'Menu',
  heading: 'Hot, Cold, and Cozy',
  subheading:
    'A curated Costa Coffee selection for workdays, weekends, and everything in between.',
}

export const MENU_CATEGORIES = [
  {
    id: 'hot-coffee',
    label: 'Hot Coffee',
    items: [
      {
        id: 'caffe-latte',
        name: 'Caffe Latte',
        description: 'Velvety espresso with silky steamed milk and a gentle crema.',
        price: 'Rs 299',
        image: coffeeItem1,
        imageAlt: 'A warm cup of caffe latte',
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Classic foam-topped espresso—balanced, aromatic, and comforting.',
        price: 'Rs 279',
        image: coffeeItem2,
        imageAlt: 'Foam-topped cappuccino in a ceramic cup',
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Smooth espresso stretched with hot water for a clean, rich sip.',
        price: 'Rs 249',
        image: coffeeItem1,
        imageAlt: 'Americano coffee in a warm mug',
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
        description: 'Chilled espresso, fresh milk, and a smooth, refreshing finish.',
        price: 'Rs 329',
        image: coffeeItem2,
        imageAlt: 'Iced latte with a creamy swirl',
      },
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description: 'Slow-steeped coffee concentrate for a bold, low-acid taste.',
        price: 'Rs 349',
        image: coffeeItem1,
        imageAlt: 'Cold brew coffee served over ice',
      },
      {
        id: 'vanilla-iced',
        name: 'Vanilla Iced Coffee',
        description: 'Vanilla notes with rich coffee—sweetened just right.',
        price: 'Rs 379',
        image: coffeeItem2,
        imageAlt: 'Vanilla iced coffee with vanilla tones',
      },
    ],
  },
  {
    id: 'tea',
    label: 'Tea',
    items: [
      {
        id: 'english-breakfast',
        name: 'English Breakfast',
        description: 'Strong, malty tea with a comforting, full-bodied finish.',
        price: 'Rs 199',
        image: coffeeItem1,
        imageAlt: 'A cup of black tea',
      },
      {
        id: 'green-tea',
        name: 'Green Tea',
        description: 'Fresh, light, and gently aromatic—perfect for calm moments.',
        price: 'Rs 189',
        image: coffeeItem2,
        imageAlt: 'A cup of green tea',
      },
      {
        id: 'chai',
        name: 'Spiced Chai',
        description: 'Warm spices with creamy notes for cozy sipping.',
        price: 'Rs 229',
        image: coffeeItem1,
        imageAlt: 'Masala chai in a warm cup',
      },
    ],
  },
  {
    id: 'refreshers',
    label: 'Refreshers',
    items: [
      {
        id: 'mango-sparkler',
        name: 'Mango Sparkler',
        description: 'Tropical mango with a crisp, sparkling finish.',
        price: 'Rs 249',
        image: coffeeItem2,
        imageAlt: 'Mango refresher drink',
      },
      {
        id: 'citrus-cooler',
        name: 'Citrus Cooler',
        description: 'Bright citrus blend for an energizing, clean sip.',
        price: 'Rs 239',
        image: coffeeItem1,
        imageAlt: 'Citrus refresher with ice',
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
        description: 'Flaky layers with rich butter aroma—fresh and buttery.',
        price: 'Rs 219',
        image: coffeeItem1,
        imageAlt: 'A flaky croissant on a plate',
      },
      {
        id: 'banana-bread',
        name: 'Banana Bread',
        description: 'Moist, fragrant slices with a warm caramel note.',
        price: 'Rs 259',
        image: coffeeItem2,
        imageAlt: 'Banana bread slices',
      },
      {
        id: 'almond-danish',
        name: 'Almond Danish',
        description: 'Toasted almonds with a delicate, pastry-perfect bite.',
        price: 'Rs 299',
        image: coffeeItem1,
        imageAlt: 'Almond danish pastry',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        id: 'tiramisu',
        name: 'Tiramisu',
        description: 'Classic layers of espresso-soaked comfort and creamy cocoa.',
        price: 'Rs 399',
        image: coffeeItem2,
        imageAlt: 'Tiramisu dessert in a glass dish',
      },
      {
        id: 'affogato',
        name: 'Affogato',
        description: 'Espresso poured over vanilla gelato—simple, rich, unforgettable.',
        price: 'Rs 349',
        image: coffeeItem1,
        imageAlt: 'Affogato dessert with espresso shot',
      },
      {
        id: 'choco-fudge',
        name: 'Chocolate Fudge Cake',
        description: 'Deep cocoa intensity with a soft, indulgent center.',
        price: 'Rs 429',
        image: coffeeItem2,
        imageAlt: 'Chocolate fudge cake slice',
      },
    ],
  },
]

