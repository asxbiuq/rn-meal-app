import Category from '../models/category'
import Meal from '../models/meal'
import { faker } from '@faker-js/faker'

faker.setLocale('zh_CN');


export const CATEGORIES = [
  {
    id : 'c1',
    title : 'Italian',
    color : faker.color.rgb(),
  },
  {
    id : 'c2',
    title : 'Quick & Easy',
    color : faker.color.rgb(),
  },
  {
    id : 'c3',
    title : 'Hamburgers',
    color : faker.color.rgb(),
  },
  {
    id : 'c4',
    title : 'German',
    color : faker.color.rgb(),
  }
]

export const MEALS = [
  {
    id: 'm1',
    categoryIds: ['c1'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl:faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
  {
    id: 'm2',
    categoryIds: ['c2'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl:faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
  {
    id: 'm3',
    categoryIds: ['c3'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl:faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
  {
    id: 'm4',
    categoryIds: ['c4'],
    title: faker.word.adjective(),
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl:faker.image.food(),
    duration: 10,
    ingredients: [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    steps: [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
]
