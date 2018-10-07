getCustomer(1)
  .then(customer => getTopMovies(customer))
  .then(moviesCustomer => sendEmail(moviesCustomer.customer.email, moviesCustomer.movies))
  .then(() => console.log('Email sent...'));



function getCustomer(id) {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
    resolve ({ 
      id: id, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
});
}



function getTopMovies(customer) {
  console.log('Customer: ', customer);
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
    resolve ({
      customer: customer,
      movies: ['movie1', 'movie2']});
  }, 4000);
});
}

function sendEmail(email,movies) {
  console.log('Top movies: ', movies);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve();
  }, 4000);
  });
}