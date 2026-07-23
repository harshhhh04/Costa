import heroBreadImage from '../../assets/images/hero-bread.png'
import menuLoavesImage from '../../assets/images/menu-loaves.png'
import serveTableImage from '../../assets/images/serve-table.png'
import breadOvenBakeImage from '../../assets/images/bread-oven-bake.png'

import img1 from '../../assets/images/1.jpeg'
import img2 from '../../assets/images/2.jpeg'
import img3 from '../../assets/images/3.jpeg'
import img4 from '../../assets/images/4.jpeg'
import img5 from '../../assets/images/5.jpeg'
import img6 from '../../assets/images/6.jpeg'
import img7 from '../../assets/images/7.jpeg'
import img8 from '../../assets/images/8.jpeg'
import img9 from '../../assets/images/9.jpeg'
import img10 from '../../assets/images/10.jpeg'
import img11 from '../../assets/images/11.jpeg'

export const MENU_SECTION = {
  label: 'The Daily Selection',
  heading: 'Made this morning.\nGone by afternoon.',
  subheading:
    'Everything is baked in small batches before sunrise. When it\'s gone, it\'s gone.',
}

export const MENU_CATEGORIES = [
  {
    id: 'bread',
    label: 'Bread',
    items: [
      {
        id: 'sourdough-country',
        name: 'Sourdough Country Loaf',
        description:
          '72-hr cold ferment, open honeycomb crumb, deep-scored crust. Our signature loaf.',
        price: '₹ 280',
        image: heroBreadImage,
        imageAlt: 'Sir Dough sourdough country loaf, dark crust, just baked',
      },
      {
        id: 'seeded-rye',
        name: 'Seeded Rye',
        description:
          'Caraway, sunflower, and sesame on a dense, tangy rye base. Pairs with any sharp cheese.',
        price: '₹ 260',
        image: menuLoavesImage,
        imageAlt: 'Seeded rye loaf with visible seeds on crust',
      },
      {
        id: 'focaccia',
        name: 'Focaccia al Rosmarino',
        description:
          'Poolish base, olive oil brine, fresh rosemary, sea salt. Airy and cloud-like inside.',
        price: '₹ 220',
        image: breadOvenBakeImage,
        imageAlt: 'Focaccia bread with rosemary on top',
      },
      {
        id: 'einkorn-batard',
        name: 'Einkorn Batard',
        description:
          'Ancient grain, mild nuttiness, thin crust. Limited to eight loaves each morning.',
        price: '₹ 300',
        image: menuLoavesImage,
        imageAlt: 'Einkorn batard loaf with a soft golden crust',
      },
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries',
    items: [
      {
        id: 'butter-croissant',
        name: 'Butter Croissant',
        description:
          '3-day lamination. 27 layers. French-style AOP butter. Shatters at the first bite.',
        price: '₹ 120',
        image: img1,
        imageAlt: 'Flaky butter croissant with golden layers visible',
      },
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        description:
          'Twice-baked croissant filled with house frangipane, topped with toasted almonds.',
        price: '₹ 140',
        image: img2,
        imageAlt: 'Almond croissant with powdered sugar and almond slices',
      },
      {
        id: 'pain-au-chocolat',
        name: 'Pain au Chocolat',
        description:
          'Dark 70% Valrhona batons wrapped in the same laminated dough as our croissant.',
        price: '₹ 150',
        image: img3,
        imageAlt: 'Pain au chocolat with dark chocolate visible',
      },
      {
        id: 'morning-bun',
        name: 'Morning Bun',
        description:
          'Orange zest, cinnamon, and a light sugar crust. Best with a flat white.',
        price: '₹ 130',
        image: img4,
        imageAlt: 'Morning bun with cinnamon sugar coating',
      },
    ],
  },
  {
    id: 'pizzas-pastas',
    label: 'Pizzas & Pastas',
    items: [
      {
        id: 'mushroom-olives-pizza',
        name: 'Mushroom & Olives Pizza (12" Inch)',
        description: 'Classic handcrafted pizza topped with fresh mushrooms and premium olives.',
        price: '₹ 895',
        image: img5,
        imageAlt: 'Mushroom and olives pizza',
      },
      {
        id: 'penne-arrabbiata',
        name: 'Penne Arrabbiata-red Sauce',
        description: 'Penne pasta in a spicy garlic and tomato arrabbiata sauce.',
        price: '₹ 690',
        image: img6,
        imageAlt: 'Penne arrabbiata pasta',
      },
      {
        id: 'pesto-chicken-pasta',
        name: 'Skinny Pesto Pasta Chicken',
        description: 'Light pesto sauce with tender chicken and pasta.',
        price: '₹ 650',
        image: img7,
        imageAlt: 'Pesto pasta with chicken',
      },
      {
        id: 'truffle-fettuccine',
        name: 'Truffle Fettuccine Pasta Chicken',
        description: 'Rich truffle infused fettuccine with chicken.',
        price: '₹ 795',
        image: img8,
        imageAlt: 'Truffle fettuccine pasta',
      },
    ],
  },
  {
    id: 'chefs-travels',
    label: "Chef's Travels & Quick Bites",
    items: [
      {
        id: 'paneer-wrap',
        name: 'Paneer Wrap',
        description: 'Soft paneer tikka wrapped with fresh veggies and mint chutney.',
        price: '₹ 445',
        image: img9,
        imageAlt: 'Paneer wrap',
      },
      {
        id: 'chicken-momos',
        name: 'Chicken Momos',
        description: 'Steamed chicken dumplings served with spicy chili sauce.',
        price: '₹ 425',
        image: img10,
        imageAlt: 'Chicken momos',
      },
      {
        id: 'keema-pav',
        name: 'Keema Pav',
        description: 'Spiced minced meat served with soft buttered pav.',
        price: '₹ 550',
        image: img11,
        imageAlt: 'Keema pav',
      },
      {
        id: 'mushroom-stroganoff',
        name: 'Mushroom Broccoli Stroganoff',
        description: 'Creamy mushroom and broccoli stroganoff served warm.',
        price: '₹ 600',
        image: img1,
        imageAlt: 'Mushroom stroganoff',
      }
    ],
  },
  {
    id: 'comfort-bowls',
    label: 'Traditional Sandwiches & Comfort Bowls',
    items: [
      {
        id: 'paneer-tikka-sandwich',
        name: 'Paneer Tikka Sandwich',
        description: 'Grilled sandwich with spiced paneer tikka filling.',
        price: '₹ 525',
        image: img2,
        imageAlt: 'Paneer tikka sandwich',
      },
      {
        id: 'katsu-curry-chicken',
        name: 'Katsu Curry Chicken',
        description: 'Crispy chicken katsu served with rich Japanese curry and rice.',
        price: '₹ 775',
        image: img3,
        imageAlt: 'Chicken katsu curry',
      },
      {
        id: 'thai-green-curry',
        name: 'Thai Green Curry Veg',
        description: 'Authentic Thai green curry with vegetables and steamed rice.',
        price: '₹ 575',
        image: img4,
        imageAlt: 'Thai green curry',
      }
    ]
  },
  {
    id: 'coffee',
    label: 'Coffee',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        description:
          'Double ristretto. Single-origin beans, micro-roasted in small batches.',
        price: '₹ 120',
        image: img5,
        imageAlt: 'Espresso in a small ceramic cup',
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description:
          'Fresh-pulled espresso with velvety steamed milk. The one people order twice.',
        price: '₹ 160',
        image: img6,
        imageAlt: 'Cappuccino with latte art in a white cup',
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description:
          'Microfoam, precision pour, strong espresso ratio. For those who know.',
        price: '₹ 170',
        image: img7,
        imageAlt: 'Flat white coffee with microfoam art',
      },
      {
        id: 'pour-over',
        name: 'Pour Over',
        description:
          'Single-origin filter coffee, bloom and slow pour. Clean, bright, unhurried.',
        price: '₹ 180',
        image: img8,
        imageAlt: 'Pour over coffee in a glass carafe',
      },
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description:
          '18-hr steep, low-acid, smooth as silk. Served over clear ice.',
        price: '₹ 190',
        image: img9,
        imageAlt: 'Cold brew coffee over ice in a tall glass',
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    items: [
      {
        id: 'sourdough-toast',
        name: 'Sourdough Toast',
        description:
          'Thick-cut country loaf, house-cultured butter, seasonal jam. Simple and right.',
        price: '₹ 180',
        image: serveTableImage,
        imageAlt: 'Sourdough toast with butter and jam on wooden board',
      },
      {
        id: 'seasonal-tartine',
        name: 'Seasonal Tartine',
        description:
          'Open-face toast with today\'s seasonal topping. Changes weekly. Ask us what\'s on.',
        price: '₹ 220',
        image: serveTableImage,
        imageAlt: 'Open face tartine with seasonal toppings',
      },
      {
        id: 'poached-eggs',
        name: 'Poached Eggs on Sourdough',
        description:
          'Two farm eggs, soft herbs, crème fraîche, on a thick slice of country loaf.',
        price: '₹ 240',
        image: serveTableImage,
        imageAlt: 'Poached eggs on sourdough with herbs',
      },
    ],
  },
  {
    id: 'seasonal',
    label: 'Seasonal',
    items: [
      {
        id: 'mango-tart',
        name: 'Mango Cardamom Tart',
        description:
          'Alphonso mango curd, cardamom crème, fluted butter pastry shell. Summer only.',
        price: '₹ 180',
        image: img10,
        imageAlt: 'Mango cardamom tart with a golden pastry shell',
      },
      {
        id: 'iced-matcha',
        name: 'Iced Matcha Latte',
        description:
          'Ceremonial-grade matcha, oat milk, no sugar added. Calm in a glass.',
        price: '₹ 200',
        image: img11,
        imageAlt: 'Iced matcha latte in a tall glass over ice',
      },
      {
        id: 'summer-danish',
        name: 'Stone Fruit Danish',
        description:
          'Peach or plum, whichever is ripest today. Pastry cream, laminated dough.',
        price: '₹ 160',
        image: img1,
        imageAlt: 'Stone fruit danish pastry with glazed fruit topping',
      },
    ],
  },
]
