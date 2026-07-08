import heroBreadImage from '../../assets/images/hero-bread.png'
import menuLoavesImage from '../../assets/images/menu-loaves.png'
import serveTableImage from '../../assets/images/serve-table.png'
import breadOvenBakeImage from '../../assets/images/bread-oven-bake.png'
import menuCappuccinoImage from '../../assets/images/menu-cappuccino.jpg'
import menuAmericanoImage from '../../assets/images/menu-americano.jpg'
import menuCafeMochaImage from '../../assets/images/menu-cafe-mocha.jpg'
import menuColdBrewImage from '../../assets/images/menu-cold-brew.jpg'
import menuEarlGreyImage from '../../assets/images/menu-earl-grey.jpg'
import menuButterCroissantImage from '../../assets/images/menu-butter-croissant.jpg'
import menuAlmondCroissantImage from '../../assets/images/menu-cheesecake.jpg'
import menuBrownieImage from '../../assets/images/menu-brownie.jpg'
import menuBlueberryMuffinImage from '../../assets/images/menu-blueberry-muffin.jpg'

export const MENU_SECTION = {
  label: 'The Daily Selection',
  heading: 'Made this morning.\nGone by noon.',
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
        image: menuButterCroissantImage,
        imageAlt: 'Flaky butter croissant with golden layers visible',
      },
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        description:
          'Twice-baked croissant filled with house frangipane, topped with toasted almonds.',
        price: '₹ 140',
        image: menuAlmondCroissantImage,
        imageAlt: 'Almond croissant with powdered sugar and almond slices',
      },
      {
        id: 'pain-au-chocolat',
        name: 'Pain au Chocolat',
        description:
          'Dark 70% Valrhona batons wrapped in the same laminated dough as our croissant.',
        price: '₹ 150',
        image: menuBrownieImage,
        imageAlt: 'Pain au chocolat with dark chocolate visible',
      },
      {
        id: 'morning-bun',
        name: 'Morning Bun',
        description:
          'Orange zest, cinnamon, and a light sugar crust. Best with a flat white.',
        price: '₹ 130',
        image: menuBlueberryMuffinImage,
        imageAlt: 'Morning bun with cinnamon sugar coating',
      },
    ],
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
        image: menuAmericanoImage,
        imageAlt: 'Espresso in a small ceramic cup',
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description:
          'Fresh-pulled espresso with velvety steamed milk. The one people order twice.',
        price: '₹ 160',
        image: menuCappuccinoImage,
        imageAlt: 'Cappuccino with latte art in a white cup',
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description:
          'Microfoam, precision pour, strong espresso ratio. For those who know.',
        price: '₹ 170',
        image: menuCafeMochaImage,
        imageAlt: 'Flat white coffee with microfoam art',
      },
      {
        id: 'pour-over',
        name: 'Pour Over',
        description:
          'Single-origin filter coffee, bloom and slow pour. Clean, bright, unhurried.',
        price: '₹ 180',
        image: menuEarlGreyImage,
        imageAlt: 'Pour over coffee in a glass carafe',
      },
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description:
          '18-hr steep, low-acid, smooth as silk. Served over clear ice.',
        price: '₹ 190',
        image: menuColdBrewImage,
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
        image: menuAlmondCroissantImage,
        imageAlt: 'Mango cardamom tart with a golden pastry shell',
      },
      {
        id: 'iced-matcha',
        name: 'Iced Matcha Latte',
        description:
          'Ceremonial-grade matcha, oat milk, no sugar added. Calm in a glass.',
        price: '₹ 200',
        image: menuColdBrewImage,
        imageAlt: 'Iced matcha latte in a tall glass over ice',
      },
      {
        id: 'summer-danish',
        name: 'Stone Fruit Danish',
        description:
          'Peach or plum, whichever is ripest today. Pastry cream, laminated dough.',
        price: '₹ 160',
        image: menuButterCroissantImage,
        imageAlt: 'Stone fruit danish pastry with glazed fruit topping',
      },
    ],
  },
]
