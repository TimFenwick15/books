// These both work so probably use the https version

/* const options = `http://www.goodreads.com/search.xml?key=${process.env.key}&q=Ender%27s+Game`;

require('http').get(options, response => {  
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}); */


// const options_https = `https://www.goodreads.com/search.xml?key=${process.env.key}&q=Ender%27s+Game`; // book search
const options_https = `https://www.goodreads.com/shelf/list.json?key=${process.env.key}&user_id=${process.env.user_id}`; // get shelves

require('https').get(options_https, response => {  
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});



