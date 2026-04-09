

const fetchUserData = async () => {
    console.log("🚀 Requête lancée...");

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
            // "new Error" avec un E majuscule
            throw new Error(`Utilisateur introuvable ! Statut : ${response.status}`);
        }

        // On reste DANS le try pour transformer la réponse
        const user = await response.json(); 

        // On affiche le résultat (sans guillemets autour de la commande)
        console.log(`Bonjour Name : ${user.name} `);

    } catch (error) {
        // Le catch attrape tout ce qui a échoué dans le bloc try ci-dessus
       console.log(
        "%c Erreur : " + error.message, 
        "color: red; font-weight: bold; font-size: 14px;"
    );
        console.error("Error fetching user data :", error);
    }
    // La fin de la fonction est ici
};

fetchUserData();
/* --- ANALYSE TECHNIQUE ---

   1. Pourquoi le code de départ n'a pas affiché le nom ?
   Le code de départ était synchrone. Cela signifie qu'il exécutait les lignes 
   les unes après les autres sans s'arrêter. Comme la fonction 'fetch' prend 
   du temps pour contacter le serveur, JavaScript n'a pas attendu la réponse. 
   Il a essayé de lire la variable 'user' alors qu'elle égitait encore vide.

   2. Quel est le rôle réel de 'await' ?
   Le mot-clé 'await' force JavaScript à mettre en pause l'exécution de la 
   fonction 'fetchUserData' tant que la promesse n'est pas résolue (terminée). 
   Cette pause ne bloque pas le navigateur ni le reste du site, elle suspend 
   uniquement le déroulement interne de cette fonction précise jusqu'à ce 
   que la donnée soit disponible.

   3. Pourquoi vérifier 'response.ok' en plus du try/catch ?
   Le bloc 'catch' ne s'active que si la requête échoue techniquement (par 
   exemple : coupure réseau ou URL invalide). Cependant, si le serveur 
   répond "404 Not Found", la connexion a réussi, donc le 'catch' ne 
   détectera rien. Vérifier 'response.ok' permet de confirmer que le serveur 
   a renvoyé un code de succès (200) et non un message d'erreur.
*/

