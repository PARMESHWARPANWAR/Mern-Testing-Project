#Here are some examples of route paths based on strings.

#This route path will match requests to the root route, /.

app.get('/', (req, res) => {
  res.send('root')
})
This route path will match requests to /about.

app.get('/about', (req, res) => {
  res.send('about')
})
This route path will match requests to /random.text.

app.get('/random.text', (req, res) => {
  res.send('random.text')
})
Here are some examples of route paths based on string patterns.

This route path will match acd and abcd.

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
This route path will match abcd, abbcd, abbbcd, and so on.

app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})
This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})
This route path will match /abe and /abcde.

app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})
Examples of route paths based on regular expressions:

This route path will match anything with an “a” in it.

app.get(/a/, (req, res) => {
  res.send('/a/')
})
This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})
Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})