  function accederProtegido() {
    const passCorrecta = "Tutor_55_Luis"; 

    const login = prompt("Introduce la contraseña para acceder:");

    if (login === passCorrecta) {
      window.location.href = "inde.html";
    } else {
      alert("Contraseña incorrecta.");
    }
  }
