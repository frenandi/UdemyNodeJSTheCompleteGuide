
getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies).then(
        console.log('Email sent...'));
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve();
  }, 4000);
  });
}