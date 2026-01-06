import { Features, GenericDataContent } from '~/libs/types';

export const mapEventFeaturesReadable = (features: Features): GenericDataContent[] => [
  {
    title: 'Countries',
    content: features.countries?.sort().join(', '),
  },
  {
    title: 'Cities',
    content: features.cities?.sort().join(', '),
  },
  {
    title: 'Airports',
    content: features.airports?.sort().join(', '),
  },
  {
    title: 'Transportation',
    content: features.transportation?.sort().join(', '),
  },
  {
    title: 'Accommodation',
    content: features.accommodation?.sort().join(', '),
  },
  {
    title: 'Districts And Neighborhoods',
    content: features.districts?.sort().join(', '),
  },
  {
    title: 'Attractions',
    content: features.attractions?.sort().join(', '),
  },
  {
    title: 'Parks',
    content: features.parks?.sort().join(', '),
  },
  {
    title: 'Food',
    content: features.food?.sort().join(', '),
  },
  {
    title: 'Drink',
    content: features.drink?.sort().join(', '),
  },
  {
    title: 'Restaurants',
    content: features.restaurants?.sort().join(', '),
  },
  {
    title: 'Bars',
    content: features.bars?.sort().join(', '),
  },
  {
    title: 'Cafés',
    content: features.cafes?.sort().join(', '),
  },
  {
    title: 'Bakeries And Patisseries',
    content: features.bakeries?.sort().join(', '),
  },
  {
    title: 'Chocolatiers',
    content: features.chocolatiers?.sort().join(', '),
  },
  {
    title: 'Gelaterias',
    content: features.gelaterias?.sort().join(', '),
  },
  {
    title: 'Markets',
    content: features.markets?.sort().join(', '),
  },
  {
    title: 'Supermarkets',
    content: features.supermarkets?.sort().join(', '),
  },
  {
    title: 'Department Stores',
    content: features.departmentStores?.sort().join(', '),
  },
  {
    title: 'Clothing And Accessory Stores',
    content: features.clothingStores?.sort().join(', '),
  },
  {
    title: 'Interior Design Stores',
    content: features.interiorDesignStores?.sort().join(', '),
  },
  {
    title: 'Technology Stores',
    content: features.technologyStores?.sort().join(', '),
  },
  {
    title: 'Audio Stores',
    content: features.audioStores?.sort().join(', '),
  },
  {
    title: 'Kitchen Stores',
    content: features.kitchenStores?.sort().join(', '),
  },
  {
    title: 'Stationery Stores',
    content: features.stationeryStores?.sort().join(', '),
  },
  {
    title: 'Book Stores',
    content: features.bookStores?.sort().join(', '),
  },
  {
    title: 'Japanese Stores',
    content: features.japaneseStores?.sort().join(', '),
  },
  {
    title: 'Bicycle Stores',
    content: features.bicycleStores?.sort().join(', '),
  },
  {
    title: 'Outdoor Stores',
    content: features.outdoorStores?.sort().join(', '),
  },
  {
    title: 'Tennis Stores',
    content: features.tennisStores?.sort().join(', '),
  },
  {
    title: 'Unique Elements',
    content: features.uniqueElements?.sort().join(', '),
  },
  {
    title: 'Nostalgia Effect',
    content: features.nostalgiaEffect?.sort().join(', '),
  },
];
