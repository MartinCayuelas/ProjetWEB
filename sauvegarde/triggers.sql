---TRIGGER 1

CREATE TRIGGER autoInscriptionDate BEFORE INSERT ON utilisateur 
  FOR EACH ROW 
  SET NEW.inscription = SYSDATE();



---TRIGGER 2
CREATE TRIGGER autoGestionEpisodeIncremente BEFORE INSERT ON episode
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
