#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Serie
#------------------------------------------------------------

CREATE TABLE Serie(
        idSerie           int (11) Auto_increment  NOT NULL ,
        titre             Varchar (25) NOT NULL ,
        dateSortie        Date ,
        nomRealisateur    Varchar (25) ,
        prenomRealisateur Varchar (25) ,
        nbEpisodes        Int ,
        nbSaisons         Int ,
        description       Longtext ,
        imageSerie        Varchar (150) ,
        PRIMARY KEY (idSerie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Utilisateur
#------------------------------------------------------------

CREATE TABLE Utilisateur(
        idUser      int (11) Auto_increment  NOT NULL ,
        login       Varchar (25) NOT NULL ,
        prenom      Varchar (25) NOT NULL ,
        nom         Varchar (25) NOT NULL ,
        password    Varchar (2000) NOT NULL ,
        email       Varchar (50) NOT NULL ,
        inscription Date ,
        avatar      Varchar (50) ,
        role        TinyINT NOT NULL ,
        PRIMARY KEY (idUser )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Episode
#------------------------------------------------------------

CREATE TABLE Episode(
        idEpisode     int (11) Auto_increment  NOT NULL ,
        nomEpisode    Varchar (25) NOT NULL ,
        numeroEpisode Int NOT NULL ,
        saison        Int NOT NULL ,
        idSerie       Int ,
        PRIMARY KEY (idEpisode )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Critique
#------------------------------------------------------------

CREATE TABLE Critique(
        idCritique  int (11) Auto_increment  NOT NULL ,
        note        Int NOT NULL ,
        commentaire Text NOT NULL ,
        idUser      Int NOT NULL ,
        idSerie     Int ,
        PRIMARY KEY (idCritique )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: regarder
#------------------------------------------------------------

CREATE TABLE regarder(
        idSerie Int NOT NULL ,
        idUser  Int NOT NULL ,
        PRIMARY KEY (idSerie ,idUser )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: visionne
#------------------------------------------------------------

CREATE TABLE visionne(
        idUser    Int NOT NULL ,
        idEpisode Int NOT NULL ,
        PRIMARY KEY (idUser ,idEpisode )
)ENGINE=InnoDB;

ALTER TABLE Episode ADD CONSTRAINT FK_Episode_idSerie FOREIGN KEY (idSerie) REFERENCES Serie(idSerie);
ALTER TABLE Critique ADD CONSTRAINT FK_Critique_idUser FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser);
ALTER TABLE Critique ADD CONSTRAINT FK_Critique_idSerie FOREIGN KEY (idSerie) REFERENCES Serie(idSerie);
ALTER TABLE regarder ADD CONSTRAINT FK_regarder_idSerie FOREIGN KEY (idSerie) REFERENCES Serie(idSerie);
ALTER TABLE regarder ADD CONSTRAINT FK_regarder_idUser FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser);
ALTER TABLE visionne ADD CONSTRAINT FK_visionne_idUser FOREIGN KEY (idUser) REFERENCES Utilisateur(idUser);
ALTER TABLE visionne ADD CONSTRAINT FK_visionne_idEpisode FOREIGN KEY (idEpisode) REFERENCES Episode(idEpisode);

