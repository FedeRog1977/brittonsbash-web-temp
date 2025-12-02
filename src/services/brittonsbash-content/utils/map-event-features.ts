import { Events, Features } from '~/libs/types';
import { removeDuplicates } from '~/libs/utils';

export const mapEventFeatures = (events: Events): Features => {
  const countries: string[] = [];
  const cities: string[] = [];
  const airports: string[] = [];
  const accommodation: string[] = [];
  const districts: string[] = [];
  const attractions: string[] = [];
  const parks: string[] = [];
  const food: string[] = [];
  const drink: string[] = [];
  const restaurants: string[] = [];
  const bars: string[] = [];
  const cafes: string[] = [];
  const bakeries: string[] = [];
  const chocolatiers: string[] = [];
  const gelaterias: string[] = [];
  const markets: string[] = [];
  const supermarkets: string[] = [];
  const departmentStores: string[] = [];
  const clothingStores: string[] = [];
  const interiorDesignStores: string[] = [];
  const technologyStores: string[] = [];
  const audioStores: string[] = [];
  const kitchenStores: string[] = [];
  const stationeryStores: string[] = [];
  const bookStores: string[] = [];
  const japaneseStores: string[] = [];
  const bicycleStores: string[] = [];
  const outdoorStores: string[] = [];
  const tennisStores: string[] = [];
  const uniqueElements: string[] = [];
  const nostalgiaEffect: string[] = [];

  events[2024].forEach((event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.airports?.forEach((airport) => {
      airports.push(airport);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.parks?.forEach((park) => {
      parks.push(park);
    });
    event.features?.food?.forEach((foodItem) => {
      food.push(foodItem);
    });
    event.features?.drink?.forEach((drinkItem) => {
      drink.push(drinkItem);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.chocolatiers?.forEach((chocolatier) => {
      chocolatiers.push(chocolatier);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.markets?.forEach((market) => {
      markets.push(market);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.departmentStores?.forEach((departmentStore) => {
      departmentStores.push(departmentStore);
    });
    event.features?.clothingStores?.forEach((clothingStore) => {
      clothingStores.push(clothingStore);
    });
    event.features?.interiorDesignStores?.forEach((interiorDesignStore) => {
      interiorDesignStores.push(interiorDesignStore);
    });
    event.features?.technologyStores?.forEach((technologyStore) => {
      technologyStores.push(technologyStore);
    });
    event.features?.audioStores?.forEach((audioStore) => {
      audioStores.push(audioStore);
    });
    event.features?.kitchenStores?.forEach((kitchenStore) => {
      kitchenStores.push(kitchenStore);
    });
    event.features?.stationeryStores?.forEach((stationeryStore) => {
      stationeryStores.push(stationeryStore);
    });
    event.features?.bookStores?.forEach((bookStore) => {
      bookStores.push(bookStore);
    });
    event.features?.japaneseStores?.forEach((japaneseStore) => {
      japaneseStores.push(japaneseStore);
    });
    event.features?.bicycleStores?.forEach((bicycleStore) => {
      bicycleStores.push(bicycleStore);
    });
    event.features?.outdoorStores?.forEach((outdoorStore) => {
      outdoorStores.push(outdoorStore);
    });
    event.features?.tennisStores?.forEach((tennisStore) => {
      tennisStores.push(tennisStore);
    });
    event.features?.uniqueElements?.forEach((uniqueElement) => {
      uniqueElements.push(uniqueElement);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2023].forEach((event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.airports?.forEach((airport) => {
      airports.push(airport);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.parks?.forEach((park) => {
      parks.push(park);
    });
    event.features?.food?.forEach((foodItem) => {
      food.push(foodItem);
    });
    event.features?.drink?.forEach((drinkItem) => {
      drink.push(drinkItem);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.chocolatiers?.forEach((chocolatier) => {
      chocolatiers.push(chocolatier);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.markets?.forEach((market) => {
      markets.push(market);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.departmentStores?.forEach((departmentStore) => {
      departmentStores.push(departmentStore);
    });
    event.features?.clothingStores?.forEach((clothingStore) => {
      clothingStores.push(clothingStore);
    });
    event.features?.interiorDesignStores?.forEach((interiorDesignStore) => {
      interiorDesignStores.push(interiorDesignStore);
    });
    event.features?.technologyStores?.forEach((technologyStore) => {
      technologyStores.push(technologyStore);
    });
    event.features?.audioStores?.forEach((audioStore) => {
      audioStores.push(audioStore);
    });
    event.features?.kitchenStores?.forEach((kitchenStore) => {
      kitchenStores.push(kitchenStore);
    });
    event.features?.stationeryStores?.forEach((stationeryStore) => {
      stationeryStores.push(stationeryStore);
    });
    event.features?.bookStores?.forEach((bookStore) => {
      bookStores.push(bookStore);
    });
    event.features?.japaneseStores?.forEach((japaneseStore) => {
      japaneseStores.push(japaneseStore);
    });
    event.features?.bicycleStores?.forEach((bicycleStore) => {
      bicycleStores.push(bicycleStore);
    });
    event.features?.outdoorStores?.forEach((outdoorStore) => {
      outdoorStores.push(outdoorStore);
    });
    event.features?.tennisStores?.forEach((tennisStore) => {
      tennisStores.push(tennisStore);
    });
    event.features?.uniqueElements?.forEach((uniqueElement) => {
      uniqueElements.push(uniqueElement);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2022].forEach((event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.airports?.forEach((airport) => {
      airports.push(airport);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.parks?.forEach((park) => {
      parks.push(park);
    });
    event.features?.food?.forEach((foodItem) => {
      food.push(foodItem);
    });
    event.features?.drink?.forEach((drinkItem) => {
      drink.push(drinkItem);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.chocolatiers?.forEach((chocolatier) => {
      chocolatiers.push(chocolatier);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.markets?.forEach((market) => {
      markets.push(market);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.departmentStores?.forEach((departmentStore) => {
      departmentStores.push(departmentStore);
    });
    event.features?.clothingStores?.forEach((clothingStore) => {
      clothingStores.push(clothingStore);
    });
    event.features?.interiorDesignStores?.forEach((interiorDesignStore) => {
      interiorDesignStores.push(interiorDesignStore);
    });
    event.features?.technologyStores?.forEach((technologyStore) => {
      technologyStores.push(technologyStore);
    });
    event.features?.audioStores?.forEach((audioStore) => {
      audioStores.push(audioStore);
    });
    event.features?.kitchenStores?.forEach((kitchenStore) => {
      kitchenStores.push(kitchenStore);
    });
    event.features?.stationeryStores?.forEach((stationeryStore) => {
      stationeryStores.push(stationeryStore);
    });
    event.features?.bookStores?.forEach((bookStore) => {
      bookStores.push(bookStore);
    });
    event.features?.japaneseStores?.forEach((japaneseStore) => {
      japaneseStores.push(japaneseStore);
    });
    event.features?.bicycleStores?.forEach((bicycleStore) => {
      bicycleStores.push(bicycleStore);
    });
    event.features?.outdoorStores?.forEach((outdoorStore) => {
      outdoorStores.push(outdoorStore);
    });
    event.features?.tennisStores?.forEach((tennisStore) => {
      tennisStores.push(tennisStore);
    });
    event.features?.uniqueElements?.forEach((uniqueElement) => {
      uniqueElements.push(uniqueElement);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2021].forEach((event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.airports?.forEach((airport) => {
      airports.push(airport);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.parks?.forEach((park) => {
      parks.push(park);
    });
    event.features?.food?.forEach((foodItem) => {
      food.push(foodItem);
    });
    event.features?.drink?.forEach((drinkItem) => {
      drink.push(drinkItem);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.chocolatiers?.forEach((chocolatier) => {
      chocolatiers.push(chocolatier);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.markets?.forEach((market) => {
      markets.push(market);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.departmentStores?.forEach((departmentStore) => {
      departmentStores.push(departmentStore);
    });
    event.features?.clothingStores?.forEach((clothingStore) => {
      clothingStores.push(clothingStore);
    });
    event.features?.interiorDesignStores?.forEach((interiorDesignStore) => {
      interiorDesignStores.push(interiorDesignStore);
    });
    event.features?.technologyStores?.forEach((technologyStore) => {
      technologyStores.push(technologyStore);
    });
    event.features?.audioStores?.forEach((audioStore) => {
      audioStores.push(audioStore);
    });
    event.features?.kitchenStores?.forEach((kitchenStore) => {
      kitchenStores.push(kitchenStore);
    });
    event.features?.stationeryStores?.forEach((stationeryStore) => {
      stationeryStores.push(stationeryStore);
    });
    event.features?.bookStores?.forEach((bookStore) => {
      bookStores.push(bookStore);
    });
    event.features?.japaneseStores?.forEach((japaneseStore) => {
      japaneseStores.push(japaneseStore);
    });
    event.features?.bicycleStores?.forEach((bicycleStore) => {
      bicycleStores.push(bicycleStore);
    });
    event.features?.outdoorStores?.forEach((outdoorStore) => {
      outdoorStores.push(outdoorStore);
    });
    event.features?.tennisStores?.forEach((tennisStore) => {
      tennisStores.push(tennisStore);
    });
    event.features?.uniqueElements?.forEach((uniqueElement) => {
      uniqueElements.push(uniqueElement);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2020].forEach((event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.airports?.forEach((airport) => {
      airports.push(airport);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.parks?.forEach((park) => {
      parks.push(park);
    });
    event.features?.food?.forEach((foodItem) => {
      food.push(foodItem);
    });
    event.features?.drink?.forEach((drinkItem) => {
      drink.push(drinkItem);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.chocolatiers?.forEach((chocolatier) => {
      chocolatiers.push(chocolatier);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.markets?.forEach((market) => {
      markets.push(market);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.departmentStores?.forEach((departmentStore) => {
      departmentStores.push(departmentStore);
    });
    event.features?.clothingStores?.forEach((clothingStore) => {
      clothingStores.push(clothingStore);
    });
    event.features?.interiorDesignStores?.forEach((interiorDesignStore) => {
      interiorDesignStores.push(interiorDesignStore);
    });
    event.features?.technologyStores?.forEach((technologyStore) => {
      technologyStores.push(technologyStore);
    });
    event.features?.audioStores?.forEach((audioStore) => {
      audioStores.push(audioStore);
    });
    event.features?.kitchenStores?.forEach((kitchenStore) => {
      kitchenStores.push(kitchenStore);
    });
    event.features?.stationeryStores?.forEach((stationeryStore) => {
      stationeryStores.push(stationeryStore);
    });
    event.features?.bookStores?.forEach((bookStore) => {
      bookStores.push(bookStore);
    });
    event.features?.japaneseStores?.forEach((japaneseStore) => {
      japaneseStores.push(japaneseStore);
    });
    event.features?.bicycleStores?.forEach((bicycleStore) => {
      bicycleStores.push(bicycleStore);
    });
    event.features?.outdoorStores?.forEach((outdoorStore) => {
      outdoorStores.push(outdoorStore);
    });
    event.features?.tennisStores?.forEach((tennisStore) => {
      tennisStores.push(tennisStore);
    });
    event.features?.uniqueElements?.forEach((uniqueElement) => {
      uniqueElements.push(uniqueElement);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  return {
    countries: removeDuplicates(countries.sort()),
    cities: removeDuplicates(cities.sort()),
    airports: removeDuplicates(airports.sort()),
    accommodation: removeDuplicates(accommodation.sort()),
    districts: removeDuplicates(districts.sort()),
    attractions: removeDuplicates(attractions.sort()),
    parks: removeDuplicates(parks.sort()),
    food: removeDuplicates(food.sort()),
    drink: removeDuplicates(drink.sort()),
    restaurants: removeDuplicates(restaurants.sort()),
    bars: removeDuplicates(bars.sort()),
    cafes: removeDuplicates(cafes.sort()),
    bakeries: removeDuplicates(bakeries.sort()),
    chocolatiers: removeDuplicates(chocolatiers.sort()),
    gelaterias: removeDuplicates(gelaterias.sort()),
    markets: removeDuplicates(markets.sort()),
    supermarkets: removeDuplicates(supermarkets.sort()),
    departmentStores: removeDuplicates(departmentStores.sort()),
    clothingStores: removeDuplicates(clothingStores.sort()),
    interiorDesignStores: removeDuplicates(interiorDesignStores.sort()),
    technologyStores: removeDuplicates(technologyStores.sort()),
    audioStores: removeDuplicates(audioStores.sort()),
    kitchenStores: removeDuplicates(kitchenStores.sort()),
    stationeryStores: removeDuplicates(stationeryStores.sort()),
    bookStores: removeDuplicates(bookStores.sort()),
    japaneseStores: removeDuplicates(japaneseStores.sort()),
    bicycleStores: removeDuplicates(bicycleStores.sort()),
    outdoorStores: removeDuplicates(outdoorStores.sort()),
    tennisStores: removeDuplicates(tennisStores.sort()),
    uniqueElements: removeDuplicates(uniqueElements.sort()),
    nostalgiaEffect: removeDuplicates(nostalgiaEffect.sort()),
  };
};
