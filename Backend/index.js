mongoose
  .connect('mongodb://localhost:27017/Signin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection successful......');
    // Start the server after the database connection is established
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.log('No Connection: ', err);
  });