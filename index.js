const host = 'https://www.goodreads.com/';

// book search
// const options_https = `${host}search.xml?key=${process.env.key}&q=Ender%27s+Game`;

// get shelves
// const options_https = `${host}shelf/list.xml?key=${process.env.key}&user_id=${process.env.user_id}`;

// get books on the read shelf
const options_https = `${host}/review/list?v=2&id=${process.env.user_id}&key=${process.env.key}&shelf=to-read`;

require('https').get(options_https, response => {  
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});

