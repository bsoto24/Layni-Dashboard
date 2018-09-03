var config = {
    apiKey: "AIzaSyA0HnxcKySLJ0RuBOauh918be3PgOBK9R0",
    authDomain: "layni-213406.firebaseapp.com",
    databaseURL: "https://layni-213406.firebaseio.com",
    projectId: "layni-213406",
    storageBucket: "layni-213406.appspot.com",
    messagingSenderId: "1050422226048"
  };
  firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  var tabla = document.getElementById('table');

  db.collection("Reserva").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().cursos}</td>
            <td>${doc.data().horario}</td>
            <td>${doc.data().lugar}</td>
            <td>${doc.data().nivel}</td>
            <td>${doc.data().tutor}</td>
            <td><span class="badge badge-warning">${doc.data().estado}</span></td>
            <td><button class="btn btn-success" onClick="confirmar('${doc.id}')">Confirmar</button></td>
            <td><button class="btn btn-danger" onClick="cancelar('${doc.id}')">Cancelar</button></td>
        </tr>
        `
        Console.log(`${doc.data().tutor}`);
    });
  });

  function cancelar(id){
    var washingtonRef = db.collection("Reserva").doc(id);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        estado: "Cancelado"
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }

  function confirmar(id){
    var washingtonRef = db.collection("Reserva").doc(id);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        estado: "Confirmado"
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }