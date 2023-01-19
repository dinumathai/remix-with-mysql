# remix-with-mysql

A sample remix program that take some data from mysql and remders in the UI.

## One time setup

### Create DB tables
```
CREATE TABLE `airport` (
  `airport_id` int NOT NULL AUTO_INCREMENT,
  `airport_name` varchar(255) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`airport_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

```
```
INSERT INTO `airport` (`airport_id`,`airport_name`,`city`,`country`) VALUES (1,'CIAL International Airport, Nedumbashery','Cochi','IN');
INSERT INTO `airport` (`airport_id`,`airport_name`,`city`,`country`) VALUES (2,'Trivandrum International Airport','Trivandrum','IN');
```
## Run locally 
Update the `.env` file with credentails.
```
npm run dev
```
Site will be available at 
http://localhost:3000/
