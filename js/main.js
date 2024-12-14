const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain="https://fakestoreapi.com/products/";

function getData(){
    fetch(URLMain).then( (response) => {
        console.log(response);     
        response.json().then( (res) => {
           createCards(res);        
        });          
    }).catch((err) => {
        alertError.innerText=`Problema al traer la informacion ${err}`;
        alertError.style.display="block";        
    });
}//getData


function truncateDescription(description, maxLength) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
}

function createCards(res) {
  const row = document.querySelector('.row');
  row.innerHTML = '';

  res.forEach(articulo => {
    const card = document.createElement('div');
    card.classList.add('col-md-3', 'card', 'mb-4');

    const truncatedDescription = truncateDescription(articulo.description, 100);

    card.innerHTML = `
      <img src="${articulo.image}" class="card-img-top" alt="${articulo.title}">
      <div class="card-body">
        <h5 class="card-title">${articulo.title}</h5>
        <p class="card-text">${truncatedDescription}</p>
        <a href="#" class="btn btn-primary">Me Interesa</a>
      </div>
    `;

    row.appendChild(card);
  });
}
getData();