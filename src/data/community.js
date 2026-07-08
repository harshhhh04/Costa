import interiorWideImage from '../../assets/images/6.jpeg'
import interiorSeatingImage from '../../assets/images/7.jpeg'
import interiorCornerImage from '../../assets/images/10.jpeg'
import interiorTablesImage from '../../assets/images/11.jpeg'

export const COMMUNITY_SECTION = {
  label: 'Community',
  heading: 'The Heart of Sector 35C',
  subheading:
    'More than a coffee stop, this Costa is where readers, students, freelancers, and friends naturally gather.',
}

export const COMMUNITY_CARDS = [
  {
    id: 'book-club',
    title: 'Weekly Book Club',
    description:
      'A relaxed reading circle where regulars discuss one short read over cappuccino and mocha.',
    icon: 'book',
    image: interiorCornerImage,
  },
  {
    id: 'study-evenings',
    title: 'Study Evenings',
    description:
      'Students settle in after classes for focused prep in comfortable seating and a calm vibe.',
    icon: 'study',
    image: interiorWideImage,
  },
  {
    id: 'coffee-meetups',
    title: 'Coffee Meetups',
    description:
      'Small social tables where people from the neighborhood connect over coffee and conversation.',
    icon: 'meet',
    image: interiorSeatingImage,
  },
  {
    id: 'freelancer-fridays',
    title: 'Freelancer Fridays',
    description:
      'Remote workers and creators use the café as a soft coworking spot before heading into the weekend.',
    icon: 'study',
    image: interiorTablesImage,
  },
  {
    id: 'weekend-conversations',
    title: 'Weekend Conversations',
    description:
      'Slow mornings with books, laptops, and long catch-ups that make this outlet feel like a local living room.',
    icon: 'weekend',
    image: interiorWideImage,
  },
]

