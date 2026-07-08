import interiorWideImage from '../../assets/images/6.jpeg'
import interiorSeatingImage from '../../assets/images/7.jpeg'
import interiorCornerImage from '../../assets/images/10.jpeg'
import interiorTablesImage from '../../assets/images/11.jpeg'

export const COMMUNITY_SECTION = {
  label: 'Gatherings',
  heading: 'A local living room.',
  subheading:
    'Books, study sessions, and slow hours that make this outlet feel like a neighborhood home.',
}

export const COMMUNITY_CARDS = [
  {
    id: 'book-club',
    title: 'Weekly Book Club',
    description:
      'Settle in with a short read, a hot cup of mocha, and quiet company.',
    icon: 'book',
    image: interiorCornerImage,
  },
  {
    id: 'study-evenings',
    title: 'Study Evenings',
    description:
      'Focused hours in cozy seating and soft lighting after classes end.',
    icon: 'study',
    image: interiorWideImage,
  },
  {
    id: 'coffee-meetups',
    title: 'Neighborhood Meetups',
    description:
      'Familiar tables where friends connect over long conversations and cappuccinos.',
    icon: 'meet',
    image: interiorSeatingImage,
  },
  {
    id: 'freelancer-fridays',
    title: 'Freelancer Fridays',
    description:
      'A warm, quiet space for creators and remote workers before the weekend starts.',
    icon: 'study',
    image: interiorTablesImage,
  },
  {
    id: 'weekend-conversations',
    title: 'Sunday Mornings',
    description:
      'Slow starts with coffee, books, and long talks that linger into the afternoon.',
    icon: 'weekend',
    image: interiorWideImage,
  },
]
