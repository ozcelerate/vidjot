if(process.env.NODE_ENV === 'production'){
  console.log("we have production");
  module.exports = {mongoURI: process.env.MONGODB_URI};
} else {
  console.log("local deployment");
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
