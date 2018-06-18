window.onload = () => {
  const btnDog = document.getElementById('dog');
  const btnCat = document.getElementById('cat');
  const btnBird = document.getElementById('bird');
  const charge = document.getElementById('loading')

  btnDog.addEventListener('click', () => {
    return obtenerDoges()
  });
  btnCat.addEventListener('click', () => {
    return obtenerGatos()
  });
};


function obtenerGatos() {
  // Fetch retorna una promesa

  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true`) //Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}

function obtenerDoges() {
  fetch (`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`)
    .then ((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error
      }  
    })
    .then ((doggesJson) => {
      const doggeReceptor = document.getElementById('dogeReceptor');
      dogesJson.forEach((jsonElement) => {
        jsonElement.forEach((dogge) => {
            const dogeImg = document.createElement("img");
            dogeImg.src = dogge;
            doggeReceptor.appendChild(doggeImg);
        });
    })
  })
    .catch((error) => {
      doggeReceptor.innerHTML = ("Lo siento no se a encontrado");
    });  
  }
