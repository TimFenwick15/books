const gr = require('./gr-api');
gr.toRead();






/*
// book search
// const options_https = `${host}search.xml?key=${process.env.key}&q=Ender%27s+Game`;

// get shelves
// const options_https = `${host}shelf/list.xml?key=${process.env.key}&user_id=${process.env.user_id}`;

// get books on the read shelf
const options_https = `${host}/review/list?v=2&id=${process.env.user_id}&key=${process.env.key}&shelf=to-read`;
//get(options_https);

// Get a Users Yearly Reading Challenge progress.
// Unfortunately, the API doesn't expose this. So the user will need to enter their target and
// we can use the books that they've read so far this year to give a progress score.
// Credit to Kelly user at http://www.goodreads.com/topic/show/17955373-mass-reading-challenges

const readThisYearURL =
  `${host}review/list?format=xml&v=2&id=${process.env.user_id}&shelf=read&per_page=200&page=1&sort=date_read&order=a&read_at=${new Date().getFullYear()}&key=${process.env.key}`;
*/
