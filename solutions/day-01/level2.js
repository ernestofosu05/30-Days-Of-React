let text =
  'I love teaching and empowering people I teach HTML CSS JS React Python'
let words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ['Milt','Coffee','Tea','Honey'];
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart.push('Sugar'));
let indexOfHoney = shoppingCart.indexOf('Honey');
console.log(shoppingCart.splice(indexOfHoney));
let indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = 'Green Tea';

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];

  if(countries.indexOf('ETHIOPIA') == -1){
    countries.push('Ethopia');
  }
  console.log(countries);

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  webTechs.indexOf('Sass') != -1?
    'Sass is a CSS preprocess':
    webTechs.push('Sass');

  console.log(webTechs);

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
  const backEnd = ['Node', 'Express', 'MongoDB'];
  const fullStack = frontEnd.concat(backEnd);

  console.log(fullStack)