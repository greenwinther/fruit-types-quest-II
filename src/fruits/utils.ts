import { fruits, FruitType } from "./fruits";

// använd fruits-arrayen och returnera det fruit-objekt som matchar name
// finns det ingen sådan fruit så returnera undefined
export const getFruit = (name: string): FruitType | undefined => {
  let matchingFruit: FruitType | undefined;

  fruits.forEach((fruit) => {
    if (!matchingFruit && fruit.name.toLowerCase() === name.toLowerCase()) {
      matchingFruit = fruit;
    }
  });
  return matchingFruit;
};

export const getFruits = (name: string): FruitType[] | undefined => {
  return fruits.filter((f) => f.name.includes(name.toLowerCase()));
};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getIcon = (icon: string): FruitType | undefined => {
  return fruits.find(
    (fruit) => fruit.icon.toLowerCase() === icon.toLowerCase()
  );
};

// använd fruits-arrayen och returnera färgen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getColor = (color: string): FruitType | undefined => {
  return fruits.find(
    (fruit) => fruit.color.toLowerCase() === color.toLowerCase()
  );
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
// find fruit.name, but returns fruit.category?
export const getCategoryByName = (name: string): string | undefined => {
  const fruit = fruits.find(
    (fruit) => fruit.name.toLowerCase() === name.toLowerCase()
  );
  return fruit ? fruit.category : undefined;
};

// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
// finns det inga frukter av den färgen så svara 0
export const numberOfColoredFruits = (color: string): number => {
  return fruits.filter(
    (fruit) => fruit.color.toLowerCase() === color.toLowerCase()
  ).length;
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori
export const numberOfCategoryFruits = (category: string): number => {
  return fruits.filter(
    (fruit) => fruit.category.toLowerCase() === category.toLowerCase()
  ).length;
};

// använd fruits-arrayen
// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
export const getFruitsByCategory = (category: string): FruitType[] => {
  return fruits.filter(
    (fruit) => fruit.category.toLowerCase() === category.toLowerCase()
  );
};

// gör en getFruitsByColor också
export const getFruitsByColor = (color: string): FruitType[] => {
  return fruits.filter(
    (fruit) => fruit.color.toLowerCase() === color.toLowerCase()
  );
};

export const getIconsByCategory = (category) => {
  // använd fruits-arrayen
  // ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
};

// gör en getIconsByColor också

// gör en getCategories som returnerar en array av alla kategorier
// gör en getColors som returnerar en array av alla färger
