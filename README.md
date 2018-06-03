# ProjetWEB - WOA - IG3 - S6

#### Auteur :
 CAYUELAS Martin

#### Contexte :

Ce projet est réalisé dans le cadre d'un projet en architecture web à Polytech Montpellier.

WatchMe est une application web qui permet la gestion de Séries. Manipuler sa playlist et marquer à vu ses épisodes.

---
### Arborescence :

- server : contient la partie serveur du projet
- src : contient la partie client
- sauvegarde : contient les fichiers SQL pour installation ainsi que le MCD

--- 

### Installation/Compilation :

```
cd rootFolder
ng build (Pour compiler le code Angular 5)
node ./server/server.js (Pour lancer l'application)

```
-       http://localhost:4000 pour acceder à l'application

##### NB: Ne pas oubliez de modifier les variables d'environnement (process.env.VotreVariable)

---

### Technologies

#### Server
- Node.js

#### Client
- Angular 5

#### Base de Données
- MySQL

---

### Fichiers SQL


- Le fichier de création de la base de données est scriptWatchMe.sql
- Le fichier d'insertition des données est data.sql
- Le fichier triggers.sql contient les triggers
