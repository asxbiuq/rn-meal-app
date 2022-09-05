import Category from "../models/category";
import Meal from '../models/meal'


export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff')
]

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread'
    ],
    true,
    false,
    true,
    false
  )
]