// var formatDistance = require('date-fns/formatDistance');

// var date = new Date();
// var postDate = new Date(2021, 0, 7);

// var result = formatDistance(postDate, date, {
//   addSuffix: true,
// });

// console.log(date);
// console.log(postDate);

// console.log(result);

let tags = ['testing, testing2', 'hey you bitch'];

tags.map((tag) => {
  let includeComma = false;
  let newString = '';
  if (tag.includes(',')) includeComma = true;
  if (includeComma) {
    // eslint-disable-next-line no-unused-vars
    if (tag.charAt(0)) newString = tag.slice(1);
  }
  return tag;
});
