-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-07-2018 a las 00:26:49
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_erpsil`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversations`
--

CREATE TABLE `conversations` (
  `idConversation` int(11) UNSIGNED NOT NULL,
  `idUser` int(11) UNSIGNED NOT NULL,
  `idRecipient` int(11) UNSIGNED NOT NULL,
  `timestamp` int(11) UNSIGNED NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files`
--

CREATE TABLE `files` (
  `idFile` int(10) UNSIGNED NOT NULL,
  `md5` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` int(11) UNSIGNED NOT NULL,
  `size` int(11) UNSIGNED NOT NULL,
  `idUser` int(11) UNSIGNED NOT NULL,
  `downloadCode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileType` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lestatz_domains`
--

CREATE TABLE `lestatz_domains` (
  `idDomain` int(10) UNSIGNED NOT NULL,
  `idUser` int(10) UNSIGNED NOT NULL,
  `domain` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='A list of domains per user';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lestatz_goals`
--

CREATE TABLE `lestatz_goals` (
  `idGoal` int(10) UNSIGNED NOT NULL,
  `idUser` int(10) UNSIGNED NOT NULL,
  `goal` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` int(10) UNSIGNED NOT NULL,
  `idDomain` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='A list of goals per user';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lestatz_refs`
--

CREATE TABLE `lestatz_refs` (
  `idRef` int(10) UNSIGNED NOT NULL,
  `idUser` int(10) UNSIGNED NOT NULL,
  `ref` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` int(10) UNSIGNED NOT NULL,
  `idDomain` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='A list of refs per user';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lestatz_visit_log`
--

CREATE TABLE `lestatz_visit_log` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `timestamp` int(10) UNSIGNED NOT NULL,
  `ip` varchar(50) NOT NULL,
  `browser` varchar(15) NOT NULL,
  `lang` varchar(10) NOT NULL,
  `os` varchar(10) NOT NULL,
  `url` varchar(250) NOT NULL,
  `args` varchar(250) NOT NULL,
  `page_name` varchar(250) NOT NULL,
  `referrer` varchar(250) NOT NULL,
  `country` varchar(3) NOT NULL,
  `idRef` int(10) UNSIGNED NOT NULL COMMENT 'The refering page according to a user setting',
  `idGoal` int(10) UNSIGNED NOT NULL COMMENT 'The goal set by the user',
  `coordinates` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='The main registry of visits, this can become quite big';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `msgs`
--

CREATE TABLE `msgs` (
  `idMsg` int(11) UNSIGNED NOT NULL,
  `timestamp` int(11) UNSIGNED NOT NULL,
  `ip` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idSender` int(11) UNSIGNED NOT NULL,
  `idRecipient` int(11) UNSIGNED NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `channel` int(11) NOT NULL,
  `attachments` int(11) UNSIGNED NOT NULL,
  `idConversation` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `idSession` int(11) UNSIGNED NOT NULL,
  `idUser` int(11) UNSIGNED NOT NULL,
  `sessionKey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastAccess` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`idSession`, `idUser`, `sessionKey`, `ip`, `lastAccess`) VALUES
(0, 47, 'enpHdDRMMlhubVhpSFVUbTl4Wkhmdz09Ojp3QY3LtHtXJKTz7RLN5+yy', '::1', 1532118779);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_activo`
--

CREATE TABLE `tbl_activo` (
  `id_Activo` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `cantidad` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `vence` varchar(10) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cliente`
--

CREATE TABLE `tbl_cliente` (
  `id_cliente` int(10) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `cedula` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `saldo_maximo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `saldo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `tipo` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_clientetickets`
--

CREATE TABLE `tbl_clientetickets` (
  `id_ticket` int(10) NOT NULL,
  `id_cliente` int(10) NOT NULL,
  `stamp` int(10) NOT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `comentario` mediumtext COLLATE utf8_spanish_ci NOT NULL,
  `status` varchar(1) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cuentaspagar`
--

CREATE TABLE `tbl_cuentaspagar` (
  `id_cuentasPagar` int(10) NOT NULL,
  `id_proveedor` int(10) NOT NULL,
  `codigo_referencia` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `saldo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(1) COLLATE utf8_spanish_ci NOT NULL,
  `vence` int(10) NOT NULL,
  `descripcion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `stampfecha` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_empleado`
--

CREATE TABLE `tbl_empleado` (
  `id_empleado` int(4) NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `apellido1` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `apellido2` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(8) COLLATE utf8_spanish_ci NOT NULL,
  `cedula` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `ingreso` varchar(8) COLLATE utf8_spanish_ci NOT NULL,
  `observaciones` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `puesto` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `jornada` varchar(2) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_historialprecios`
--

CREATE TABLE `tbl_historialprecios` (
  `id_producto` int(11) NOT NULL,
  `costo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `id_proveedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_inventario`
--

CREATE TABLE `tbl_inventario` (
  `id_inventario` int(100) NOT NULL,
  `cantidad` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `unidad` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `codigo_interno` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `codigo_barras` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `categoria` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `cantidad_minima` smallint(10) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `impuesto_venta` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ganancia_minima` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `costo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `status` varchar(1) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_movimientoinventario`
--

CREATE TABLE `tbl_movimientoinventario` (
  `id_usuario` int(10) NOT NULL,
  `id_caja` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `fecha` int(10) NOT NULL,
  `razon` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `costo` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_pagos`
--

CREATE TABLE `tbl_pagos` (
  `id_pago` int(10) NOT NULL,
  `id_cuenta` int(10) NOT NULL,
  `id_usuarios` int(10) NOT NULL,
  `fecha` int(10) NOT NULL,
  `pago` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `actual` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_permisosrol`
--

CREATE TABLE `tbl_permisosrol` (
  `id_permiso` int(10) NOT NULL,
  `id_rol` int(10) NOT NULL,
  `estado` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'activo/inactivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proveedor`
--

CREATE TABLE `tbl_proveedor` (
  `id_proveedor` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(8) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `cedula` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_roles`
--

CREATE TABLE `tbl_roles` (
  `id_roles` int(10) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_roles`
--

INSERT INTO `tbl_roles` (`id_roles`, `nombre`, `descripcion`) VALUES
(1, 'algo', 'algo'),
(2, 'cosas', 'algos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipocliente`
--

CREATE TABLE `tbl_tipocliente` (
  `id_tipoCliente` int(10) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `ganancia_global` int(11) NOT NULL,
  `dias_credito` smallint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `id_usuarios` int(10) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(32) COLLATE utf8_spanish_ci NOT NULL,
  `rol` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) UNSIGNED NOT NULL,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` int(11) UNSIGNED NOT NULL,
  `lastAccess` int(11) UNSIGNED NOT NULL,
  `pwd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Any and all settings you would like to set'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `fullName`, `userName`, `email`, `about`, `country`, `status`, `timestamp`, `lastAccess`, `pwd`, `avatar`, `settings`) VALUES
(102, 'Daniel', 'ol', 'algoff@aa.com', 'abc', 'cr', '1', 1532119250, 1532122842, 'WVZjNGFWSkNZMDlaV25obGJHSkZaR2hJTXpScmVqVlBWV2t3TWtvMEszWjRVV3haVm5jcmFFRmpNakF5VGxwWFIyODRiemRsV1ZKNFIxSXdVVFJDYUZOUGNtb3dPVXB1VVd0MmQzb3JRVVpqUmxrNU5tYzlQVG82cG9XU1daaEwvMmthZ2pXUUdaNjlCQT09', '0', ''),
(101, 'Daniel222', 'olsen34332', 'algoff@a.com', 'abc', 'cr', '1', 1532118951, 1532118960, 'VHpjMloyUXZXbTVvVEZrM1NISkVXbk15YjA5WE1UQmtabnBPY1VGblJXNDBSWEJtWVhWemQzSmhTRzEwWVM5MGVrUkhURWx2V0ZCRFJUUXdlRlpaWmt4dlRUWXJkM0Z1U2psM2FGbGhSM2x5ZEZCUWVtYzlQVG82VEhNNHZBS3VvVndVT1dKYWFVTjR0UT09', '0', ''),
(100, 'Daniel3', 'olsen', 'undefined', 'abc', 'und', '1', 1532118779, 1532122848, 'VGpKME0ydHhPVEZ4ZDBGMVRVeGFZVFI0Y1c5SmJsUlZNVVpZU0RKNVdVdEZNMUJXUm1vME9WcG1iSFJLYlRBNFNHbExhSEJqSzJGcGMwd3pkMEY1ZDJrMVYyZHphRFEwU25WR2JUQnpTMjB4Y1VRM1kyYzlQVG82UmJYVEFyM0U5bW9PYk9ZUW5uem5kdz09', '0', ''),
(0, 'Daniel2', 'olsen', 'undefined', 'abc', 'und', '1', 1532117881, 1532118744, 'UjFkbkwzZ3ZkMVJyUVRZck5XMUZORkpHY0ZaR2FucGpSSHBzTkc5RFYwWmlRa2gzWVRGUU5WUmpZV3gyV0hSd2RVeEZZMVJTVGtrMlkyeFFabFEwTUhKemRHcHljMmROTVVJNGQwaEJXSFptYlRSbWVYYzlQVG82bE9PZXMvOWNRZ3pSOW1peVlKcTFLUT09', '0', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`idConversation`);

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`idFile`);

--
-- Indices de la tabla `lestatz_domains`
--
ALTER TABLE `lestatz_domains`
  ADD PRIMARY KEY (`idDomain`),
  ADD UNIQUE KEY `idDomain` (`idDomain`);

--
-- Indices de la tabla `lestatz_goals`
--
ALTER TABLE `lestatz_goals`
  ADD PRIMARY KEY (`idGoal`),
  ADD UNIQUE KEY `idGoal` (`idGoal`);

--
-- Indices de la tabla `lestatz_refs`
--
ALTER TABLE `lestatz_refs`
  ADD PRIMARY KEY (`idRef`);

--
-- Indices de la tabla `msgs`
--
ALTER TABLE `msgs`
  ADD PRIMARY KEY (`idMsg`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`idSession`),
  ADD KEY `key` (`sessionKey`(191)),
  ADD KEY `sessionKey` (`sessionKey`(191));

--
-- Indices de la tabla `tbl_activo`
--
ALTER TABLE `tbl_activo`
  ADD PRIMARY KEY (`id_Activo`);

--
-- Indices de la tabla `tbl_cliente`
--
ALTER TABLE `tbl_cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `tbl_clientetickets`
--
ALTER TABLE `tbl_clientetickets`
  ADD PRIMARY KEY (`id_ticket`);

--
-- Indices de la tabla `tbl_cuentaspagar`
--
ALTER TABLE `tbl_cuentaspagar`
  ADD PRIMARY KEY (`id_cuentasPagar`);

--
-- Indices de la tabla `tbl_empleado`
--
ALTER TABLE `tbl_empleado`
  ADD PRIMARY KEY (`id_empleado`);

--
-- Indices de la tabla `tbl_inventario`
--
ALTER TABLE `tbl_inventario`
  ADD PRIMARY KEY (`id_inventario`);

--
-- Indices de la tabla `tbl_pagos`
--
ALTER TABLE `tbl_pagos`
  ADD PRIMARY KEY (`id_pago`);

--
-- Indices de la tabla `tbl_proveedor`
--
ALTER TABLE `tbl_proveedor`
  ADD PRIMARY KEY (`id_proveedor`);

--
-- Indices de la tabla `tbl_roles`
--
ALTER TABLE `tbl_roles`
  ADD PRIMARY KEY (`id_roles`);

--
-- Indices de la tabla `tbl_tipocliente`
--
ALTER TABLE `tbl_tipocliente`
  ADD PRIMARY KEY (`id_tipoCliente`);

--
-- Indices de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`id_usuarios`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_activo`
--
ALTER TABLE `tbl_activo`
  MODIFY `id_Activo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_cliente`
--
ALTER TABLE `tbl_cliente`
  MODIFY `id_cliente` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_clientetickets`
--
ALTER TABLE `tbl_clientetickets`
  MODIFY `id_ticket` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_cuentaspagar`
--
ALTER TABLE `tbl_cuentaspagar`
  MODIFY `id_cuentasPagar` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_empleado`
--
ALTER TABLE `tbl_empleado`
  MODIFY `id_empleado` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_inventario`
--
ALTER TABLE `tbl_inventario`
  MODIFY `id_inventario` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_pagos`
--
ALTER TABLE `tbl_pagos`
  MODIFY `id_pago` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_proveedor`
--
ALTER TABLE `tbl_proveedor`
  MODIFY `id_proveedor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_roles`
--
ALTER TABLE `tbl_roles`
  MODIFY `id_roles` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_tipocliente`
--
ALTER TABLE `tbl_tipocliente`
  MODIFY `id_tipoCliente` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `id_usuarios` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
