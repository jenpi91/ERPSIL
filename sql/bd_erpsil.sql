-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2018 a las 03:21:15
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

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
-- Estructura Stand-in para la vista `ptueba`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `ptueba` (
`SUM(total_factura+total_pagar+total_planilla)` decimal(34,0)
);

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
(35, 142, 'OGp0b050eUZzQWVkZjJ6OGg2RHpOZz09Ojp8lDPUDHRRwpwccpBfVlNJ', '::1', 1540178070),
(79, 143, 'RVhtcUdkZS8vL2JBaXNSZ3doOGFhdz09OjoTAbwQuAXkNNHLJoBdnqxf', '::1', 1540181105),
(96, 144, 'Uk1od3B2K0hXYnY0STYyY2sxaTJoUT09Ojo2icYw22EmQ3FpbUupqrXx', '::1', 1540181271),
(102, 141, 'dkpGckhtd0ZYNmZqMDdEMHEyZjdEZz09OjppIdwFOOu52s3yjLqXXo65', '::1', 1542575396);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `suma_contabilidad`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `suma_contabilidad` (
`contabilidad_total` decimal(34,0)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `suma_facturas`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `suma_facturas` (
`facturas` decimal(65,0)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `suma_pagos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `suma_pagos` (
`pagos` double
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `suma_planilla`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `suma_planilla` (
`planilla` decimal(32,0)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_activo`
--

CREATE TABLE `tbl_activo` (
  `id_activo` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `cantidad` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `vence` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_activo`
--

INSERT INTO `tbl_activo` (`id_activo`, `nombre`, `cantidad`, `vence`) VALUES
(12, 'q', 'q', 'q'),
(13, 'w', 'w', 'w'),
(14, 'e', 'e', 'e'),
(17, 'danielaaaa', '3', '5'),
(18, 'das', 'undefined', '2018-11-01');

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

--
-- Volcado de datos para la tabla `tbl_cliente`
--

INSERT INTO `tbl_cliente` (`id_cliente`, `nombre`, `cedula`, `email`, `direccion`, `telefono`, `descripcion`, `saldo_maximo`, `saldo`, `tipo`) VALUES
(3, 'daniel', '2', '2', '2', '2', '2', '2', '2', 2),
(4, 'daniel', '2', '2', '2', '2', '2', '2', '2', 2),
(5, 'x', 'q', 'q', 'q', 'q', 'q', 'q', '1', 1),
(6, 'lindo', 'q', 'q', 'q', 'q', 'q', 'q', '1', 1),
(8, 'canelo', '2', '3', '2', '2', '2', '23', '2', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_clientetickets`
--

CREATE TABLE `tbl_clientetickets` (
  `id_ticket` int(10) NOT NULL,
  `id_cliente` int(10) NOT NULL,
  `stamp` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `comentario` mediumtext COLLATE utf8_spanish_ci NOT NULL,
  `status` varchar(10) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_clientetickets`
--

INSERT INTO `tbl_clientetickets` (`id_ticket`, `id_cliente`, `stamp`, `titulo`, `comentario`, `status`) VALUES
(1, 2, '2', '2', '2', '4'),
(2, 2, '2', '2', '2', '2'),
(18, 5, '1533518172', 'nuevo', 'nuevo', 'n'),
(21, 8, '1534394818', 'canelos', 'canelossssss', '9'),
(22, 3, '2018-11-03', 'e', 'e', '123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_contabilidad`
--

CREATE TABLE `tbl_contabilidad` (
  `id_contabilidad` int(10) NOT NULL,
  `total_factura` int(10) NOT NULL,
  `total_pagar` int(10) NOT NULL,
  `total_planilla` int(10) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_contabilidad`
--

INSERT INTO `tbl_contabilidad` (`id_contabilidad`, `total_factura`, `total_pagar`, `total_planilla`, `total`) VALUES
(1, 0, 4, 5, 0),
(2, 4, 0, 5, 0),
(41, 10000, 1368, 3500, 0),
(42, 10000, 1368, 3500, 0),
(43, 10000, 1368, 3500, 0),
(44, 10000, 1368, 3500, 0),
(45, 10000, 1368, 3500, 59490),
(46, 10000, 1368, 3500, 14868);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cuentaspagar`
--

CREATE TABLE `tbl_cuentaspagar` (
  `id_cuentasPagar` int(10) NOT NULL,
  `id_proveedor` int(10) NOT NULL,
  `codigo_referencia` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `saldo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `vence` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `stampfecha` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_cuentaspagar`
--

INSERT INTO `tbl_cuentaspagar` (`id_cuentasPagar`, `id_proveedor`, `codigo_referencia`, `saldo`, `estado`, `vence`, `descripcion`, `stampfecha`) VALUES
(1, 1, '1', '1', '1', '1', '1', 1),
(2, 1, '123', '10000', '1', '1', '1', 0),
(3, 1, '123', '123', '3', '3', '3', 0),
(5, 1, '123', '123', '3', '333', 'algos', 0),
(6, 1, '158', '1200', '1', '2018-11-01', 'algo', 0);

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
  `ingreso` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `observacion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `puesto` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `jornada` varchar(2) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_empleado`
--

INSERT INTO `tbl_empleado` (`id_empleado`, `nombre`, `apellido1`, `apellido2`, `telefono`, `cedula`, `direccion`, `ingreso`, `observacion`, `puesto`, `jornada`) VALUES
(1, 'daniel', 'olsen', 'yu', '123', '123', 'ad', 'asd', 'asd', 'asd', 'as'),
(4, 'fqwe', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f'),
(5, 'eE', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'),
(6, 'coco', 'coco', 'coco', '12313123', '123', 'asdasd2', '2018-11-02', 'asd', 'asd', 'un'),
(7, 'c', 'c', 'c', '2', '2', 'd', '2018-10-04', 'asd', 'asd', 'un');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_factura`
--

CREATE TABLE `tbl_factura` (
  `id_factura` int(10) NOT NULL,
  `id_cliente` int(10) NOT NULL,
  `stamp` varchar(10) NOT NULL,
  `precio_unidad` int(100) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `total` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_factura`
--

INSERT INTO `tbl_factura` (`id_factura`, `id_cliente`, `stamp`, `precio_unidad`, `cantidad`, `descripcion`, `total`) VALUES
(1, 3, 'xxxx', 5000, 2, 'xxxx', 10000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_historialprecios`
--

CREATE TABLE `tbl_historialprecios` (
  `id_historialPrecio` int(11) NOT NULL,
  `id_inventario` int(11) NOT NULL,
  `costo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `id_proveedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_historialprecios`
--

INSERT INTO `tbl_historialprecios` (`id_historialPrecio`, `id_inventario`, `costo`, `fecha`, `id_proveedor`) VALUES
(6, 1, '2', '1533519977', 1),
(8, 1, '2', '2018-11-01', 1),
(9, 1, '3', '2018-11-01', 1);

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
  `status` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_inventario`
--

INSERT INTO `tbl_inventario` (`id_inventario`, `cantidad`, `unidad`, `codigo_interno`, `codigo_barras`, `categoria`, `cantidad_minima`, `descripcion`, `impuesto_venta`, `ganancia_minima`, `costo`, `status`) VALUES
(1, '2', '3', '4', '5', '6', 7, '8', '9', '10', '11', '1'),
(2, '11', '1', '1', '1', '1', 1, '1', '1', '1', '1', '1'),
(3, '3', 'q', 'q', 'q', 'q', 1, 'q', 'q', 'q', 'q', '1'),
(5, '1', '1', '12', '1', '1', 1, '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_movimientoinventario`
--

CREATE TABLE `tbl_movimientoinventario` (
  `id_movInv` int(100) NOT NULL,
  `id_usuario` int(100) NOT NULL,
  `id_caja` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `fecha` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `razon` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `costo` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_movimientoinventario`
--

INSERT INTO `tbl_movimientoinventario` (`id_movInv`, `id_usuario`, `id_caja`, `id_producto`, `fecha`, `razon`, `descripcion`, `costo`) VALUES
(1, 106, 1, 1, '1534481368', '123', 'qwe', '123'),
(2, 106, 1, 1, '1534481475', 'as', 'as', '1'),
(3, 106, 1, 1, '1534481753', 'w', 'w', '1'),
(4, 106, 1, 1, '1534481815', 'w', 'w', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_pagos`
--

CREATE TABLE `tbl_pagos` (
  `id_pago` int(10) NOT NULL,
  `id_cuenta` int(10) NOT NULL,
  `id_usuarios` int(10) NOT NULL,
  `fecha` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `pago` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `actual` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_pagos`
--

INSERT INTO `tbl_pagos` (`id_pago`, `id_cuenta`, `id_usuarios`, `fecha`, `pago`, `actual`) VALUES
(1, 1, 1, '123', '123', '123'),
(2, 1, 107, '123', '1234', '12355'),
(3, 1, 141, '1541111469', '1', '1'),
(4, 1, 141, '', '5', '5'),
(5, 1, 141, '2018-11-01', '5', '5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_pedidos`
--

CREATE TABLE `tbl_pedidos` (
  `id_pedido` int(4) NOT NULL,
  `id_cliente` int(4) NOT NULL,
  `stamp_pedido` varchar(11) NOT NULL,
  `stamp_entrega` varchar(11) NOT NULL,
  `cant_rollos` int(5) NOT NULL,
  `status` int(1) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_pedidos`
--

INSERT INTO `tbl_pedidos` (`id_pedido`, `id_cliente`, `stamp_pedido`, `stamp_entrega`, `cant_rollos`, `status`, `descripcion`, `precio`) VALUES
(1, 3, '3', '3', 3, 3, '3', '4000'),
(3, 6, '123', '321', 123, 1, 'rosas', '10002'),
(4, 3, '2018-11-01', '2018-11-03', 100, 1, 'rosas', '1000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_permisosrol`
--

CREATE TABLE `tbl_permisosrol` (
  `id_permiso` int(100) NOT NULL,
  `id_rol` int(10) NOT NULL,
  `estado` varchar(20) COLLATE utf8_spanish_ci NOT NULL COMMENT 'activo/inactivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_permisosrol`
--

INSERT INTO `tbl_permisosrol` (`id_permiso`, `id_rol`, `estado`) VALUES
(1, 1, '1'),
(2, 1, '1'),
(3, 0, '7'),
(6, 1, 'buenos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_planilla`
--

CREATE TABLE `tbl_planilla` (
  `id_planilla` int(10) NOT NULL,
  `id_empleado` int(10) NOT NULL,
  `salario_bruto` int(10) NOT NULL,
  `ccss` varchar(10) NOT NULL,
  `rebaja` int(10) NOT NULL,
  `salario_neto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_planilla`
--

INSERT INTO `tbl_planilla` (`id_planilla`, `id_empleado`, `salario_bruto`, `ccss`, `rebaja`, `salario_neto`) VALUES
(1, 1, 5000, '420', 100, 3500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proveedor`
--

CREATE TABLE `tbl_proveedor` (
  `id_proveedor` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `apellido1` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `apellido2` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `cedula` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(8) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_proveedor`
--

INSERT INTO `tbl_proveedor` (`id_proveedor`, `nombre`, `apellido1`, `apellido2`, `cedula`, `direccion`, `telefono`, `descripcion`) VALUES
(1, '$nombre', '$apellido1', '$apellido2', '$cedula', '$direccion', '$telefon', '$descripcion'),
(3, '3', '3', '3', '3', '3', '3', '3'),
(7, '3', '33', '3', '3', '3', '3', '3');

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
(2, 'cosas', 'algoss'),
(3, 'd', '3'),
(5, 'd', 'd'),
(6, 'd', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipocliente`
--

CREATE TABLE `tbl_tipocliente` (
  `id_tipoCliente` int(10) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ganancia_global` int(11) NOT NULL,
  `dias_credito` smallint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_tipocliente`
--

INSERT INTO `tbl_tipocliente` (`id_tipoCliente`, `nombre`, `descripcion`, `ganancia_global`, `dias_credito`) VALUES
(1, 'nombre', '1', 1, 1),
(2, 'Daniel', '1', 1, 1),
(3, '3', '3', 0, 0),
(4, '3', '3', 3, 3),
(5, 'd', 'd', 4, 4);

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
(141, 'Daniel', 'ol', 'algo@aa.com', 'abc', 'cr', '1', 1534828112, 1542575396, 'VkZFeE0zSnliM0ZZVkhwMlZHNWhNRGd5ZFdVdk4wODBjSEZ5YlZwS1dYVXlkRXBxWjBFeVVITnZRVFozVEdzNU9FaERRMWxsUkd0a1RreEpSRFYyUTBWUFlUbDBhRWwxVFRGb2VqSmhSbFZwT0ZoVVZYYzlQVG82cjd3YmpaOU1ETXlCZnE3cWswdm5zUT09', '0', ''),
(142, 'qwe', 'eqweq', 'qweqwe', 'qwee', 'qwe', '1', 1540178070, 1540178070, 'T0RrdmFWUm1jR0o0VkdwUVFYa3pUR2xxTDBod1J6RkRZVFF5V0RRek1VNHhLeTlUUWs5WE0wd3pZWHBTVEM5NE1uUkhRblZKT1hKQ1VVMWpSVFp5YUVWQk5VcExPVEUwZWxFM1JVNXJkaTlsTkM5dFNYYzlQVG82N1F6M3BscldiOG5LL2paZW1rZnNjUT09', '0', ''),
(143, 'w', 'rt', 'rt', 'rt', 'rt', '1', 1540181104, 1540181105, 'T0dKUVpFSnFWbFZIWW1vNVpVVnVaM0JEVGpsdloyMWxibEZ0YlU1WmJHSnpNRVZ2ZEVkak9XWjRVRWxMZFVKS1V6aDRNVEJxVUd0bGFIZEdUVWxZUmxCdFRXUjZZVGhxY0RRdlYySTFkR3BwY3pSU00xRTlQVG82Z1Q2Z2NocStuSnNBNEdXS24ydG5FQT09', '0', ''),
(144, 'kk', 'kk', 'kk', 'kk', 'kk', '1', 1540181269, 1540181271, 'UkRsQ2QwUmxOVVZZTkU1NFlYSnhaWHBzTWtFcmJGRlplbFF4YlRWbWFEZHZSMUp3YjFaR1lVbG1WVzB4TmpCUmFXVnhZelJ0YjJKbmNXVktkbkpoVEZFd1RFVTVRMFp4WjB0M1dtaFlOak5xWXpWdFRFRTlQVG82ck82YWlFK3AwNWNHYWhETmtvZVZvQT09', '0', '');

-- --------------------------------------------------------

--
-- Estructura para la vista `ptueba`
--
DROP TABLE IF EXISTS `ptueba`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ptueba`  AS  select sum(((`tbl_contabilidad`.`total_factura` + `tbl_contabilidad`.`total_pagar`) + `tbl_contabilidad`.`total_planilla`)) AS `SUM(total_factura+total_pagar+total_planilla)` from `tbl_contabilidad` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `suma_contabilidad`
--
DROP TABLE IF EXISTS `suma_contabilidad`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `suma_contabilidad`  AS  select sum(((`tbl_contabilidad`.`total_factura` + `tbl_contabilidad`.`total_pagar`) + `tbl_contabilidad`.`total_planilla`)) AS `contabilidad_total` from `tbl_contabilidad` order by `tbl_contabilidad`.`id_contabilidad` desc limit 1 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `suma_facturas`
--
DROP TABLE IF EXISTS `suma_facturas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `suma_facturas`  AS  select sum(`tbl_factura`.`total`) AS `facturas` from `tbl_factura` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `suma_pagos`
--
DROP TABLE IF EXISTS `suma_pagos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `suma_pagos`  AS  select sum(`tbl_pagos`.`pago`) AS `pagos` from `tbl_pagos` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `suma_planilla`
--
DROP TABLE IF EXISTS `suma_planilla`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `suma_planilla`  AS  select sum(`tbl_planilla`.`salario_neto`) AS `planilla` from `tbl_planilla` ;

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
  ADD PRIMARY KEY (`id_activo`);

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
-- Indices de la tabla `tbl_contabilidad`
--
ALTER TABLE `tbl_contabilidad`
  ADD PRIMARY KEY (`id_contabilidad`);

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
-- Indices de la tabla `tbl_factura`
--
ALTER TABLE `tbl_factura`
  ADD PRIMARY KEY (`id_factura`);

--
-- Indices de la tabla `tbl_historialprecios`
--
ALTER TABLE `tbl_historialprecios`
  ADD PRIMARY KEY (`id_historialPrecio`);

--
-- Indices de la tabla `tbl_inventario`
--
ALTER TABLE `tbl_inventario`
  ADD PRIMARY KEY (`id_inventario`);

--
-- Indices de la tabla `tbl_movimientoinventario`
--
ALTER TABLE `tbl_movimientoinventario`
  ADD PRIMARY KEY (`id_movInv`);

--
-- Indices de la tabla `tbl_pagos`
--
ALTER TABLE `tbl_pagos`
  ADD PRIMARY KEY (`id_pago`);

--
-- Indices de la tabla `tbl_pedidos`
--
ALTER TABLE `tbl_pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `tbl_permisosrol`
--
ALTER TABLE `tbl_permisosrol`
  ADD PRIMARY KEY (`id_permiso`);

--
-- Indices de la tabla `tbl_planilla`
--
ALTER TABLE `tbl_planilla`
  ADD PRIMARY KEY (`id_planilla`);

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
-- AUTO_INCREMENT de la tabla `conversations`
--
ALTER TABLE `conversations`
  MODIFY `idConversation` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `idFile` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lestatz_domains`
--
ALTER TABLE `lestatz_domains`
  MODIFY `idDomain` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sessions`
--
ALTER TABLE `sessions`
  MODIFY `idSession` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT de la tabla `tbl_activo`
--
ALTER TABLE `tbl_activo`
  MODIFY `id_activo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `tbl_cliente`
--
ALTER TABLE `tbl_cliente`
  MODIFY `id_cliente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tbl_clientetickets`
--
ALTER TABLE `tbl_clientetickets`
  MODIFY `id_ticket` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `tbl_contabilidad`
--
ALTER TABLE `tbl_contabilidad`
  MODIFY `id_contabilidad` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `tbl_cuentaspagar`
--
ALTER TABLE `tbl_cuentaspagar`
  MODIFY `id_cuentasPagar` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tbl_empleado`
--
ALTER TABLE `tbl_empleado`
  MODIFY `id_empleado` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tbl_factura`
--
ALTER TABLE `tbl_factura`
  MODIFY `id_factura` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbl_historialprecios`
--
ALTER TABLE `tbl_historialprecios`
  MODIFY `id_historialPrecio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tbl_inventario`
--
ALTER TABLE `tbl_inventario`
  MODIFY `id_inventario` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tbl_movimientoinventario`
--
ALTER TABLE `tbl_movimientoinventario`
  MODIFY `id_movInv` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tbl_pagos`
--
ALTER TABLE `tbl_pagos`
  MODIFY `id_pago` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tbl_pedidos`
--
ALTER TABLE `tbl_pedidos`
  MODIFY `id_pedido` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tbl_permisosrol`
--
ALTER TABLE `tbl_permisosrol`
  MODIFY `id_permiso` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tbl_planilla`
--
ALTER TABLE `tbl_planilla`
  MODIFY `id_planilla` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbl_proveedor`
--
ALTER TABLE `tbl_proveedor`
  MODIFY `id_proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tbl_roles`
--
ALTER TABLE `tbl_roles`
  MODIFY `id_roles` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tbl_tipocliente`
--
ALTER TABLE `tbl_tipocliente`
  MODIFY `id_tipoCliente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `id_usuarios` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
