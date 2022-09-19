// ********includes*******//

// const lyrics = 'mor vabonar ki haway matalo';

// const doesExist = lyrics.includes('ki');
// console.log(doesExist);


// ********lowerCase / uppercase*******//

const lyrics = 'mor vabonar ki haway matalo';

const searchString = 'HaWay';//eitake lowercase banaite hbe age;

const forLowercase = searchString.toLowerCase();//lowercase a convert korlam;
const doesExist = lyrics.includes(forLowercase);
const searchIndex = lyrics.indexOf('mor');//index ber korar jonno;
const dummySearch = lyrics.indexOf('goru');// jodi eita exist na kore then index er value (-1) hobe;
console.log(dummySearch);
console.log(searchIndex);
console.log(doesExist);


// ******startsWith/ endsWith****//

console.log(lyrics.startsWith('tumi'));

const fileName = 'background.png';
console.log(fileName.endsWith('png'));
