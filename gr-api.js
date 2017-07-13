const {parseString} = require('xml2js');
const host = 'https://www.goodreads.com/';
const yearGoal = 35;
const {key, user_id} = process.env;
if (!key || !user_id)
  console.error('The key and user_id environment variables must be set before using');

const get = async url => {
  return new Promise((resolve, reject) => {
    const request = require('https').get( host + url );
    request.on('response', res => resolve(res) );
    request.on('error', err => reject(err) );
  });
};

const parse = (xml, prop) => parseString(xml)[prop];

// make this more fp :)
//module.exports.getToReadShelf = () => parse(get(`${host}/review/list?v=2&id=${user_id}&key=${key}&shelf=to-read`));

//module.exports.getYearGoalProgress = () => parse(get(`${host}review/list?format=xml&v=2&id=${process.env.user_id}&shelf=read&per_page=200&page=1&sort=date_read&order=a&read_at=${new Date().getFullYear()}&key=${process.env.key}`));

module.exports.test = async () => {
  try {
    let req = await get(`${host}review/list?v=2&id=${user_id}&key=${key}&shelf=to-read`);
    console.log(req);
  }
  catch (err) {}
}



/*function getToConsole(url) {
  require('https').get(url, response => {  
      response.setEncoding('utf8');
      response.on('data', console.log);
      response.on('error', console.error);
  });

}


function get(url) {
  let body = '';
  require('https').get(url, response => {  
      response.setEncoding('utf8');
      response.on('data', data => body += data);
      response.on('error', console.error);
  });
  return body;
}*/


// book search
// const options_https = `${host}search.xml?key=${process.env.key}&q=Ender%27s+Game`;

// get shelves
// const options_https = `${host}shelf/list.xml?key=${process.env.key}&user_id=${process.env.user_id}`;

// get books on the read shelf
//const options_https = `${host}/review/list?v=2&id=${process.env.user_id}&key=${process.env.key}&shelf=to-read`;
//get(options_https);

// Get a Users Yearly Reading Challenge progress.
// Unfortunately, the API doesn't expose this. So the user will need to enter their target and
// we can use the books that they've read so far this year to give a progress score.
// Credit to Kelly user at http://www.goodreads.com/topic/show/17955373-mass-reading-challenges

//const readThisYearURL =
 // `${host}review/list?format=xml&v=2&id=${process.env.user_id}&shelf=read&per_page=200&page=1&sort=date_read&order=a&read_at=${new Date().getFullYear()}&key=${process.env.key}`;

//const readThisYearURL =
//  `${host}review/list?v=2&id=${process.env.user_id}&key=${process.env.key}&shelf=read`;


//const responseData = get(readThisYearURL);

//const {parseString} = require('xml2js');

/*parseString(responseData, (err, res) => {
  console.log(res)

});
*/
// continue this. Handle async, clean code, check in
