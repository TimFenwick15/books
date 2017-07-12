This is a test of the Goodreads API.

To run this, you will need the key and a secret key that Goodreads provides, as well as your user id that can be found in the URL from your books page. Set these values to environment variables with the following names:
- key
- secret
- user_id

I am setting these as environment variables when launching index.js and accessing them through process.env.

Ideas for use:
- Make a progress meter for the yearly challenge - NeoPixel display?
- Personal site with book ratings listed
- IOT: Barcode scanner - lookup my star rating, read/not read status, display with NeoPixels? ( Pimoroni doens't have any :( )
  - If I could find a way to barcode scan (and by extension, conver result to an ISBN number, I could add books to my to read list with this!
    Doesn't necessarily make sense to do this when you could use an app at home. As check-in/out it could be useful

