(async function f(){
  const customer = await getCustomer(1);
  console.log('Customer: ', customer);
  const movies = await getTopMovies(customer);
  console.log('Top movies: ', movies);
  await sendEmail(customer.email,movies);
  console.log('Email sent...')
})();


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
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
    resolve (['movie1', 'movie2']);
  }, 4000);
});
}

function sendEmail(email,movies) {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve();
  }, 4000);
  });
}