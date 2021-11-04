CREATE DATABASE IF NOT EXISTS `desafio`;
USE `desafio`;
CREATE TABLE IF NOT EXISTS `people` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(225) DEFAULT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB;