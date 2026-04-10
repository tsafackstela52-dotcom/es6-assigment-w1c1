

const fetchUserData = async () => {
    console.log(" Requête lancée...");

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
          
            throw new Error(`Utilisateur introuvable ! Statut : ${response.status}`);
        }

        const user = await response.json(); 

      
        console.log(`Bonjour Name : ${user.name} `);

    } catch (error) {

       console.log(
        "%c Erreur : " + error.message, 
        "color: red; font-weight: bold; font-size: 14px;"
    );
        console.error("Error fetching user data :", error);
    }

};

fetchUserData();
fetchUserData();


const getFastData = async () => {
    console.log(" Requête lancée...");

    try {
        const response = await Promise.all ([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1"),
        ]);

        if (!response.ok) {
         
            throw new Error(`Utilisateur introuvable ! Statut : ${response.status}`);
        }

   
           const user = await userResponse.json ();
           const post = await postResponse.json ();
        ; 

        
        console.log(`Les deux requetes sont terminées  `);
        console.log(`Nom : ${user.name}`);
          console.log(`Titre : ${post.title}`);


    } catch (error) {
   
       console.log(
        "%c Erreur : " + error.message, 
        "color: red; font-weight: bold; font-size: 14px;"
    );
        console.error("Error fetching user data :", error);
    }
    console.log('requete terminée');
   
};

GetFastData();
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

