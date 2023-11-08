-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Keyword`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Keyword` (
  `keywordId` INT NOT NULL,
  `noise` INT NULL,
  `smell` INT NULL,
  `safety` INT NULL,
  `convenience` INT NULL,
  `insect` INT NULL,
  `optionState` INT NULL,
  `trash` INT NULL,
  `lightWarm` INT NULL,
  PRIMARY KEY (`keywordId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Review` (
  `reviewId` VARCHAR(45) NOT NULL,
  `starpoint` INT NULL,
  `pros` VARCHAR(45) NULL,
  `cons` VARCHAR(45) NULL,
  `option` VARCHAR(45) NULL,
  `payment` VARCHAR(45) NULL,
  `picture` VARCHAR(45) NULL,
  `livingYear` INT NULL,
  `likedCnt` INT NULL,
  `date` DATE NULL,
  `houseType` VARCHAR(45) NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `Keyword_keywordId` INT NOT NULL,
  PRIMARY KEY (`reviewId`),
  INDEX `fk_Review_Keyword1_idx` (`Keyword_keywordId` ASC) VISIBLE,
  CONSTRAINT `fk_Review_Keyword1`
    FOREIGN KEY (`Keyword_keywordId`)
    REFERENCES `mydb`.`Keyword` (`keywordId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ChattingRoom`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ChattingRoom` (
  `chattingName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`chattingName`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Succession`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Succession` (
  `successionId` VARCHAR(45) NOT NULL,
  `fee` INT NULL,
  `area` DOUBLE NULL,
  `period` INT NULL,
  `payType` VARCHAR(45) NULL,
  `picture` VARCHAR(45) NULL,
  `option` VARCHAR(45) NULL,
  `date` DATE NULL,
  `houseType` VARCHAR(45) NULL,
  `modifying` INT NULL,
  `update` DATE NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `ChattingRoom_chattingName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`successionId`, `ChattingRoom_chattingName`),
  INDEX `fk_Succession_ChattingRoom1_idx` (`ChattingRoom_chattingName` ASC) VISIBLE,
  CONSTRAINT `fk_Succession_ChattingRoom1`
    FOREIGN KEY (`ChattingRoom_chattingName`)
    REFERENCES `mydb`.`ChattingRoom` (`chattingName`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`AIresearch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`AIresearch` (
  `userInfo` VARCHAR(45) NOT NULL,
  `keyword` VARCHAR(45) NULL,
  PRIMARY KEY (`userInfo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Chat` (
  `chat` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`chat`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `userEmail` VARCHAR(45) NOT NULL,
  `userId` VARCHAR(10) NULL,
  `password` VARCHAR(10) NULL,
  `AIresearch_userInfo` VARCHAR(45) NOT NULL,
  `Succession_successionId` VARCHAR(45) NOT NULL,
  `Chat_chat` VARCHAR(45) NOT NULL,
  `Review_reviewId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userEmail`, `Chat_chat`, `Review_reviewId`),
  INDEX `fk_User_AIresearch1_idx` (`AIresearch_userInfo` ASC) VISIBLE,
  INDEX `fk_User_Succession1_idx` (`Succession_successionId` ASC) VISIBLE,
  INDEX `fk_User_Chat1_idx` (`Chat_chat` ASC) VISIBLE,
  INDEX `fk_User_Review1_idx` (`Review_reviewId` ASC) VISIBLE,
  CONSTRAINT `fk_User_AIresearch1`
    FOREIGN KEY (`AIresearch_userInfo`)
    REFERENCES `mydb`.`AIresearch` (`userInfo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_Succession1`
    FOREIGN KEY (`Succession_successionId`)
    REFERENCES `mydb`.`Succession` (`successionId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_Chat1`
    FOREIGN KEY (`Chat_chat`)
    REFERENCES `mydb`.`Chat` (`chat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_Review1`
    FOREIGN KEY (`Review_reviewId`)
    REFERENCES `mydb`.`Review` (`reviewId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Mypage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Mypage` (
  `myInfo` VARCHAR(45) NOT NULL,
  `likedlocation` VARCHAR(45) NULL,
  `savedaddress` VARCHAR(45) NULL,
  `myreview` VARCHAR(45) NULL,
  `mysuccession` VARCHAR(45) NULL,
  `User_userEmail` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`myInfo`, `User_userEmail`),
  INDEX `fk_Mypage_User1_idx` (`User_userEmail` ASC) VISIBLE,
  CONSTRAINT `fk_Mypage_User1`
    FOREIGN KEY (`User_userEmail`)
    REFERENCES `mydb`.`User` (`userEmail`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Address` (
  `addressId` VARCHAR(45) NOT NULL,
  `generation` INT NULL,
  `household` INT NULL,
  `floor` INT NULL,
  `elevator` INT NULL,
  `buildDate` DATE NULL,
  `si` VARCHAR(45) NULL,
  `gun` VARCHAR(45) NULL,
  `gu` VARCHAR(45) NULL,
  `dong` VARCHAR(45) NULL,
  `Review_reviewId` VARCHAR(45) NOT NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `Succession_successionId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`addressId`, `Review_reviewId`, `Succession_successionId`),
  INDEX `fk_Address_Review1_idx` (`Review_reviewId` ASC) VISIBLE,
  INDEX `fk_Address_Succession1_idx` (`Succession_successionId` ASC) VISIBLE,
  CONSTRAINT `fk_Address_Review1`
    FOREIGN KEY (`Review_reviewId`)
    REFERENCES `mydb`.`Review` (`reviewId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Address_Succession1`
    FOREIGN KEY (`Succession_successionId`)
    REFERENCES `mydb`.`Succession` (`successionId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Socialauth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Socialauth` (
  `email` VARCHAR(45) NOT NULL,
  `userId` VARCHAR(45) NULL,
  `providerId` VARCHAR(45) NULL,
  `provider` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `imageUrl` VARCHAR(45) NULL,
  `attributes` VARCHAR(45) NULL,
  `ip` VARCHAR(45) NULL,
  `User_userEmail` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`email`),
  INDEX `fk_Socialauth_User1_idx` (`User_userEmail` ASC) VISIBLE,
  CONSTRAINT `fk_Socialauth_User1`
    FOREIGN KEY (`User_userEmail`)
    REFERENCES `mydb`.`User` (`userEmail`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Notification` (
  `notificationId` VARCHAR(45) NOT NULL,
  `newReview` VARCHAR(45) NULL,
  `newChat` VARCHAR(45) NULL,
  PRIMARY KEY (`notificationId`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
