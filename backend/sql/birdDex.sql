DROP DATABASE IF EXISTS `birdDex`;
CREATE DATABASE `birdDex`;
USE `birdDex`;

DROP TABLE IF EXISTS `bird`;
CREATE TABLE `bird` (
  `bird_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` TEXT,
  `food`TEXT,
  `size` varchar(20),
  `weight` varchar(20),
  `song` varchar(255),
  `type_id` integer,
  `picture_id` integer,
  `is_protected` integer
);

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `type_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255)
);

DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture` (
  `picture_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `image` TEXT
);

ALTER TABLE `bird` ADD FOREIGN KEY (`type_id`) REFERENCES `type` (`type_id`);
ALTER TABLE `bird` ADD FOREIGN KEY (`picture_id`) REFERENCES `picture` (`picture_id`);

INSERT INTO type (name) 
VALUES 
("Canard"),
("Echassier"),
("Mouette"),
("Rapace"),
("Gallinacés"),
("pigeon"),
("passereau à bec large"),
("passereau à bec long"),
("passereau à bec fin"),
("passereau à bec conique");


INSERT INTO bird (name, description, food, size, weight, song, type_id, is_protected)
VALUES 
("Cygne chanteur", "plume blanc, profil triangulaire, bec à base jaune, bout noir. Pas de tubercule sur le bec. Pattes noires jeune. Grisâtre, bec rose foncé.
Son nid se limite à un monticule d'herbes et de roseaux installé au sol, près de l'eau. Jusqu'à 6 oeufs sont couvés 1 mois et demi. Les jeunes, nidifuges, s'envolent après trois mois.", 
"Constitué de végétaux aquatiques, d'herbes et de petits invertébrés.", "140-165cm", "8-11kg", "Sons puissants enroués ou sifflants composés de plusieurs notes, ressemblant parfois aux bruits d'un klaxon poire.", 1, 1),
("Sterne caugek", " Bec long, fin et noir à pointe jaune. Dos gris clair. Frint et calotte noirs, jusqu'à la nuque. Calotte finissant en huppe sur la nuque (pas toujour visible). Dessous blanc et pattes noires. En vol: parait très blanche, y compris le bout des iales. Croupion blanc.", 
"Se nourrit exclusivement de poissons.", "38-46cm", "210-260g", "Cris aigus et stridents, répétés sans cesse en vol, incisifs, roulés, kirouet ou kirouek; ils s'entendent de très loin, même par gros temps avec de fortes vagues!", 3, 1),
("Chevêche d'Athéna", "Petite chouette. Au repos: attitude dréssée, grosse tête ronde enfoncée dans les épaules. Oeil jaune entouré de noir. Plumage marron brun tacheté de gris-beige. Dessus de la tête marron strié de beige clair. Sourcil blanc. Pattes beige clair.", "Nombreuses petites proie (petits oiseaux, micromammifères, lézard et insectes.",  "21-23cm", "150-200g", "Hululement wèhou, hou interrogatifs et sonores et divers petits sons aigus perçants ou sifflants.", 4, 0),
("Poule d'eau", "Dessus noir-brun foncé. Dessous, poitrine et tête gris-noir. Trait blanc sur le flanc. Bec rouge à pointe jaune prolongé par une plaque frontale rouge. Pattes jaunâtres à verdâtres, long doigts non palmés. Dessous de la queue blanc, avec bande centrale noire.", "Végétaux et graines aquatiques, mollusques et insectes.",  "50-55cm", "250-375g", "Sons puissants et clairs, explosifs, Kroû ou pidit", 5, 0);

