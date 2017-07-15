const {parseString} = require('xml2js');
const {get} = require('request-promise');
const {key, user_id} = process.env;
const host = 'https://www.goodreads.com/';
const yearGoal = 35;
if (!key || !user_id)
  console.error('The key and user_id environment variables must be set before using');

module.exports.toRead = async () => {
  try {
    const req = await get(`${host}review/list?v=2&id=${user_id}&key=${key}&shelf=to-read`);
    parseString(req, (err, jsonResponse) => {
      if (err)
        throw err;
      let books = [];
      jsonResponse.GoodreadsResponse.reviews[0].review.forEach(x => books.push(x.book[0].title));
      console.log(books);
    });
  }
  catch (err) {
    console.error('to-read fail', err);
  }
}

//module.exports.getYearGoalProgress = () => parse(get(`${host}review/list?format=xml&v=2&id=${process.env.user_id}&shelf=read&per_page=200&page=1&sort=date_read&order=a&read_at=${new Date().getFullYear()}&key=${process.env.key}`));

