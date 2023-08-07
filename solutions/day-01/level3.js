const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log(ages.sort()[0]);
console.log(ages.sort()[ages.length -1]);
let medianAge;
if(ages.length % 2 == 0){
    let midNum1 = Math.round(ages.length / 2);
    let midNum2 = midNum1 - 1;
    medianAge = (ages.sort()[midNum2] + ages.sort()[midNum1]) / 2;
} else {
    medianAge = ages.sort()[ages.length/2];
}
console.log(medianAge);
let aveAge = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9]) / 2;
console.log('Average Age:', aveAge);

let maxAge = ages.sort()[ages.length - 1];
let minAge = ages.sort()[0];
let range = maxAge - minAge;
console.log(Math.abs((minAge - aveAge),(maxAge-aveAge)));

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

  let firstTenSlice = countries.slice(0,11);
  console.log('firstTenSlice:', firstTenSlice);
  let midCountry;

  if(countries.length % 2 == 0){
    let midCountry = countries[countries.length / 2];
  } else {
    midCountry = [countries[Math.floor(countries.length/2 - 1)], countries[Math.floor(countries.length/2)]]
  }

  console.log(midCountry);

  console.log(Math.floor(11/2));