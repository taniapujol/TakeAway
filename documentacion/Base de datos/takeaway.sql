-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 27-03-2017 a les 17:48:26
-- Versió del servidor: 10.1.21-MariaDB
-- Versió de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `takeaway`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `bebidas`
--

CREATE TABLE `bebidas` (
  `id` int(11) NOT NULL,
  `nombreBebida` varchar(100) NOT NULL,
  `precio` varchar(100) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Bolcant dades de la taula `bebidas`
--

INSERT INTO `bebidas` (`id`, `nombreBebida`, `precio`, `foto`, `id_categoria`) VALUES
(3, 'Coca-Cola', '1.50', 'cocaCola.jpg', 5),
(4, 'Coca-Cola light', '1.50', 'light.jpg', 5),
(5, 'Coca-Cola Zero', '1.50', 'zero.jpg', 5),
(6, 'Nestea', '1.50', 'nestea.jpg', 5),
(7, 'Moritz', '1.75', 'moritz.jpg', 5),
(8, 'Agua', '1.25', 'agua.jpg', 5),
(9, 'Vino Blanco', '2.75', 'viBlanc.jpg', 5),
(10, 'Vino Negro', '2.75', 'viNegre.jpg', 5),
(11, 'Vino Rosado', '2.75', 'viRosat.jpg', 5);

-- --------------------------------------------------------

--
-- Estructura de la taula `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(10) NOT NULL,
  `descripcion` text NOT NULL,
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Bolcant dades de la taula `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `descripcion`, `foto`) VALUES
(2, 'Ensalada', 'Creativas y originales ensaldas de todo tipo de ingredientes', 'ensaladas.jpg'),
(3, 'Primeros', 'Primeros platos de carne y pescado para todo tipo de cliente', 'primeros.jpg'),
(4, 'Postres', 'Postres creativos y originales para cualquier goloso, tanto adulto como niÃ±os', 'postres.jpg'),
(5, 'Bebidas', 'bebidas con alchol o refrescos', 'begudas.jpq');

-- --------------------------------------------------------

--
-- Estructura de la taula `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET latin1 NOT NULL,
  `email` varchar(100) CHARACTER SET latin1 NOT NULL,
  `telf` varchar(200) CHARACTER SET latin1 NOT NULL,
  `direccion` varchar(300) CHARACTER SET latin1 NOT NULL,
  `cp` varchar(100) CHARACTER SET latin1 NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcant dades de la taula `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `email`, `telf`, `direccion`, `cp`, `fecha`) VALUES
(1, 'Express', 'express@gmail.com', '95815.666.333', 'Ps Maritimo 57 bajos 1', '08800', '2017-02-08 17:28:58');

-- --------------------------------------------------------

--
-- Estructura de la taula `contac_form`
--

CREATE TABLE `contac_form` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) CHARACTER SET latin1 NOT NULL,
  `email` varchar(500) CHARACTER SET latin1 NOT NULL,
  `mensaje` text CHARACTER SET latin1 NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcant dades de la taula `contac_form`
--

INSERT INTO `contac_form` (`id`, `nombre`, `email`, `mensaje`, `fecha_registro`) VALUES
(1, 'jordi', 'jperez@pepe.com', 'toto loco', '2017-02-21 15:41:41'),
(2, 'jordi', 'jperez@pepe.com', 'toto loco', '2017-02-21 15:42:37'),
(3, 'Carles su nombre', 'carles@gmail.com este es su correo', '', '2017-02-21 15:52:42'),
(4, 'Carles', 'carles@gmail.com', '', '2017-02-21 15:55:24'),
(5, 'Carles', 'carles@gmail.com', '', '2017-02-21 15:55:44'),
(6, 'Carles', 'carles@gmail.com', '', '2017-02-21 15:56:56'),
(7, 'Carles', 'carles@gmail.com', 'toto kloca,sdvadfgbaer', '2017-02-21 15:58:16'),
(8, 'Carles', 'carles@gmail.com', 'toto kloca,sdvadfgbaer', '2017-02-21 16:04:28'),
(9, 'CarlesmÃ±ana', 'carles@gmail.com', 'toto kloca,sdvadfgbaer Ã± cÃ s daÃ©sd', '2017-02-21 16:05:57'),
(10, 'CarlesmÃ±ana', 'carles@gmail.com', 'toto kloca,sdvadfgbaer Ã± cÃ s daÃ©sd', '2017-02-21 16:54:12'),
(11, 'CarlesmÃ±ana', 'carles@gmail.com', 'toto kloca,sdvadfgbaer Ã± cÃ s daÃ©sd', '2017-02-21 16:58:53'),
(12, 'Carles', 'carles@gmail.com', 'jkwefneunqwefuiaerniernuiaeuiobupar', '2017-02-21 16:59:47'),
(13, 'Carles', 'carles@gmail.com', 'jkwefneunqwefuiaerniernuiaeuiobupar', '2017-02-21 17:13:59'),
(14, 'Carles', 'carles@gmail.com', 'jkwefneunqwefuiaerniernuiaeuiobupar', '2017-02-21 17:14:35'),
(15, 'dfasdf', 'adfas@fsdfsa', 'fdfasd', '2017-03-27 15:06:15');

-- --------------------------------------------------------

--
-- Estructura de la taula `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_plato` int(11) NOT NULL,
  `cantidad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de la taula `newletter`
--

CREATE TABLE `newletter` (
  `id` int(11) NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcant dades de la taula `newletter`
--

INSERT INTO `newletter` (`id`, `email`, `fecha_registro`) VALUES
(1, 'carles@gmail.com', '2017-02-21 18:35:52'),
(2, '', '2017-02-21 18:45:21'),
(3, 'carles@gmail.com', '2017-02-21 18:45:28'),
(4, 'carles@gmail.com', '2017-02-21 19:09:27'),
(5, '', '2017-02-21 19:14:24'),
(6, '', '2017-02-21 19:14:42'),
(7, 'carles@gmail.com', '2017-02-21 19:14:53'),
(8, '', '2017-02-21 19:15:31'),
(9, '', '2017-02-21 19:15:40'),
(10, '', '2017-02-21 19:18:38'),
(11, 'carles@gmail.com', '2017-02-21 19:18:48'),
(12, '', '2017-02-21 19:19:25'),
(13, '', '2017-02-21 19:19:36'),
(14, 'carles@gmail.com', '2017-02-21 19:19:42'),
(15, '', '2017-02-21 19:20:22'),
(16, '', '2017-02-21 19:20:26'),
(17, '', '2017-02-21 19:20:41'),
(18, '', '2017-02-21 19:21:35'),
(19, '', '2017-02-21 19:22:37'),
(20, 'carles@gmail.com', '2017-02-21 19:22:43'),
(21, '', '2017-02-28 15:11:45'),
(22, '', '2017-03-02 14:48:13'),
(23, '', '2017-03-02 14:50:54'),
(24, '', '2017-03-02 15:40:30');

-- --------------------------------------------------------

--
-- Estructura de la taula `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `importe` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcant dades de la taula `pedidos`
--

INSERT INTO `pedidos` (`id`, `id_cliente`, `fecha`, `importe`) VALUES
(1, 1, '2017-03-24 17:38:44', '55.00'),
(2, 1, '2017-03-24 17:38:55', '55.00'),
(3, 2, '2017-03-24 17:41:19', '66.00'),
(4, 1, '2017-03-24 17:42:50', '55.00');

-- --------------------------------------------------------

--
-- Estructura de la taula `platos`
--

CREATE TABLE `platos` (
  `id` int(11) NOT NULL,
  `nombrePlato` varchar(200) CHARACTER SET utf8 NOT NULL,
  `precioRacion` float(4,2) NOT NULL,
  `descripcion` text CHARACTER SET utf8 NOT NULL,
  `foto` varchar(200) CHARACTER SET utf8 NOT NULL,
  `activado` varchar(3) CHARACTER SET utf8 DEFAULT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Bolcant dades de la taula `platos`
--

INSERT INTO `platos` (`id`, `nombrePlato`, `precioRacion`, `descripcion`, `foto`, `activado`, `id_categoria`) VALUES
(6, 'Amanida de Arros', 3.50, 'Deliciosa i refrescant amanida de arros, on afegim uns dauets de pernil dolÃ§ i verduretes que equilibren el plat.', 'amanida_arros.jpg', NULL, 2),
(7, 'Amanida Campestre', 4.50, 'Deliciosa combinaciÃ³ gracies a la base vegetal, rica en vitamines, al pernil dolÃ§ i al formatge, que aporten proteÃ¯nes i calci al plat. El toc dolÃ§ del blat de moro i les pastanagues li donen un gust agradable en boca.', 'amanida_campestre.jpg', NULL, 2),
(8, 'Amanida de Pasta', 3.75, 'Amanida fresca amb la base de pasta Fusilli, juntament amb la tonyina i les hortalisses formen un plat complet. Acompanyat amb maionesa.', 'Amanida_pasta.jpg', NULL, 2),
(9, 'Amanida Cesar', 3.75, 'Has tastat ja la nostra amanida classica? Amb base vegetal rica en vitamines, pollastre arrebossat cruixent i formatge que ens ofereix una bona font de calci.', 'Amanida_cesar.jpg', NULL, 2),
(10, 'Bacalla al Romescu', 5.60, 'Delicios plat de peix, preparat amb la salsa tipica de romescu, atencio aquest port contenir alguns alÂ·lergens amb traces de: Crustacis, Ou, Cacauets, Soja, Llet, Api, Mostassa, Sulfits, Sesam, MolÂ·luscs.', 'bacalla_romescu.jpg', NULL, 3),
(11, 'Llom Rostit', 5.75, 'Plat molt nutritiu, el llom aromatitzat amb especies, va acompanyat amb verdures. Pots combinar-lo amb una de les nostres cremes.', 'llom_rostit.jpg', NULL, 3),
(12, 'Mandonguilles', 5.75, 'Delicios plat tipic de la terra gallega, portat a la teva taula', 'mandonguilles.jpg', NULL, 3),
(13, 'Lluc al Romani', 5.75, 'Delicios filet de lluï¿½ amb patata, oli de sansa dï¿½oliva, pebrot vermell, pebrot verd, tomï¿½quet, all, vinagre i romanï¿½.', 'lluc_romani.jpg', NULL, 3),
(15, 'Maduixa, .., nabius', 3.75, 'Postre conbinat de maduixe y nabius', 'fruta1.jpg', NULL, 4),
(16, 'Fruita del Temps', 2.75, 'Un potre delicios on trobaras la fuita mes delicioses del temps', 'fruta2.jpg', NULL, 4),
(17, 'Pastis Kit Kat', 3.75, 'Pastis de la deliciossa chocolata kit kat amb una base de pÃ  de pasic', 'pastis_kit_kat.jpg', NULL, 4),
(18, 'Crumble de Poma', 4.00, 'Poma cuita amb nabius i cruixent de galeta, civada i canyella.', 'Crumble_poma.jpg', NULL, 4);

--
-- Indexos per taules bolcades
--

--
-- Index de la taula `bebidas`
--
ALTER TABLE `bebidas`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `contac_form`
--
ALTER TABLE `contac_form`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `newletter`
--
ALTER TABLE `newletter`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Index de la taula `platos`
--
ALTER TABLE `platos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `bebidas`
--
ALTER TABLE `bebidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT per la taula `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT per la taula `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT per la taula `contac_form`
--
ALTER TABLE `contac_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT per la taula `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT per la taula `newletter`
--
ALTER TABLE `newletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT per la taula `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT per la taula `platos`
--
ALTER TABLE `platos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
