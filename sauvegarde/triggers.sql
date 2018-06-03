--Mise à jour automatique de la date d'inscription
CREATE TRIGGER autoInscriptionDate BEFORE INSERT ON Utilisateur 
  FOR EACH ROW 
  BEGIN
  SET NEW.inscription = SYSDATE();
  END;

-- gestion du numero de l'épisode en fonction des episodes de la série déjà existant et de la saison

CREATE TRIGGER autoGestionEpisodeIncremente BEFORE INSERT ON Episode
  FOR EACH ROW
  BEGIN
    DECLARE existe integer;
    DECLARE nbMaxinteger integer;
    DECLARE saisonM integer;

    SELECT COUNT(*) INTO existe
    FROM episode
    WHERE idSerie = NEW.idSerie;

    IF existe > 0 THEN
      SELECT MAX(saison) INTO saisonM
      FROM episode
        WHERE idSerie = NEW.idSerie;
      IF NEW.saison > saisonM THEN
        SET NEW.numeroEpisode = 1;
      ELSE
        Select MAX(numeroEpisode) INTO nbMaxinteger
      FROM Episode
      WHERE idSerie = NEW.idSerie AND saison = NEW.saison;

        SET NEW.numeroEpisode = nbMaxinteger +1;
      END IF;

    ELSE
      SET NEW.numeroEpisode = 1;
    end if;

  end;
