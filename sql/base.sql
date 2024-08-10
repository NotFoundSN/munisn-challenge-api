--
-- Creo la tabla administradores
--

DROP TABLE IF EXISTS `administradores`;

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;


--
-- Creo la tabla usuarios
--

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `DNI` bigint(20) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`DNI`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


LOCK TABLES `administradores` WRITE;
INSERT INTO municipalidad.administradores (id,usuario,pass,nombre) VALUES (1,'admin','$2a$10$JbB.xT5fCEQf1cbMcXrde.XDjXrj9XeG3XvtwfciZOOqMCF4011SS','administrador');
INSERT INTO municipalidad.administradores (id,usuario,pass,nombre) VALUES (2,'julio','$2a$10$JbB.xT5fCEQf1cbMcXrde.XDjXrj9XeG3XvtwfciZOOqMCF4011SS','Julio Maldonado');

UNLOCK TABLES;


