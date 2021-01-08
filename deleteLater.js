var formatDistance = require('date-fns/formatDistance');

var date = new Date();
var postDate = new Date(2021, 0, 7);

var result = formatDistance(postDate, date, {
  addSuffix: true,
});

console.log(date);

console.log(result);
