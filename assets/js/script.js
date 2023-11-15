console.log("test");

function mettreAJourHeure() {
    var maintenant = new Date();
    var heures = maintenant.getHours();
    var minutes = maintenant.getMinutes();
    var secondes = maintenant.getSeconds();

    // Ajouter un zéro devant les chiffres inférieurs à 10
    heures = (heures < 10) ? "0" + heures : heures;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    secondes = (secondes < 10) ? "0" + secondes : secondes;

    // Construire la chaîne de l'heure
    var heureCourante = heures + ":" + minutes + ":" + secondes;

    // Mettre à jour le contenu du conteneur de l'horloge
    document.getElementById("horloge").innerHTML = heureCourante;
  }

  // Mettre à jour l'heure chaque seconde
  setInterval(mettreAJourHeure, 1000);

  // Appeler la fonction une première fois pour afficher l'heure dès le chargement de la page
  mettreAJourHeure();