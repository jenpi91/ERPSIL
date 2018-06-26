USE [master]
GO
/****** Object:  Database [BD_ERP]    Script Date: 20/06/2018 22:15:34 ******/
CREATE DATABASE [BD_ERP]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BD_ERP', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\BD_ERP.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BD_ERP_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\BD_ERP_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [BD_ERP] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BD_ERP].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BD_ERP] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BD_ERP] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BD_ERP] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BD_ERP] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BD_ERP] SET ARITHABORT OFF 
GO
ALTER DATABASE [BD_ERP] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BD_ERP] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BD_ERP] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BD_ERP] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BD_ERP] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BD_ERP] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BD_ERP] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BD_ERP] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BD_ERP] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BD_ERP] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BD_ERP] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BD_ERP] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BD_ERP] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BD_ERP] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BD_ERP] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BD_ERP] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BD_ERP] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BD_ERP] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BD_ERP] SET  MULTI_USER 
GO
ALTER DATABASE [BD_ERP] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BD_ERP] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BD_ERP] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BD_ERP] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BD_ERP] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BD_ERP] SET QUERY_STORE = OFF
GO
USE [BD_ERP]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [BD_ERP]
GO
/****** Object:  Table [dbo].[Tbl_Cliente]    Script Date: 20/06/2018 22:15:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Cliente](
	[Id_Cliente] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido1] [varchar](50) NOT NULL,
	[Apellido2] [varchar](50) NOT NULL,
	[Tienda] [varchar](50) NOT NULL,
	[Telefono] [varchar](50) NOT NULL,
	[Direccion] [varchar](50) NOT NULL,
	[Correo_Electronico] [varchar](50) NOT NULL,
	[Desabilitado] [bit] NULL,
 CONSTRAINT [PK_Tbl_Cliente] PRIMARY KEY CLUSTERED 
(
	[Id_Cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Contabilidad]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Contabilidad](
	[Id_Cierre_DeCaja] [int] IDENTITY(1,1) NOT NULL,
	[Total_Compra] [int] NOT NULL,
	[Total_Venta] [int] NOT NULL,
	[Total_Cuentas_cobrar] [int] NOT NULL,
	[Total_Cuentas_Pagar] [int] NOT NULL,
	[Id_FCompra] [int] NOT NULL,
	[Id_FVenta] [int] NOT NULL,
 CONSTRAINT [PK_Tbl_Contabilidad] PRIMARY KEY CLUSTERED 
(
	[Id_Cierre_DeCaja] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Empleados]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Empleados](
	[Id_Empleado] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido1] [varchar](50) NOT NULL,
	[Apellido2] [varchar](50) NOT NULL,
	[Cedula] [int] NOT NULL,
	[Telefono] [int] NOT NULL,
	[Fecha_Ingreso] [date] NOT NULL,
	[Observaciones] [varchar](50) NULL,
	[Rol] [varchar](50) NOT NULL,
	[Despedido] [bit] NULL,
 CONSTRAINT [PK_Tbl_Empleados] PRIMARY KEY CLUSTERED 
(
	[Id_Empleado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Factura_Compra]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Factura_Compra](
	[Id_FCompra] [int] IDENTITY(1,1) NOT NULL,
	[Numero_Factura] [int] NOT NULL,
	[Descripcion] [varchar](50) NOT NULL,
	[Gasto] [int] NOT NULL,
	[Id_Materiales] [int] NOT NULL,
	[Estado] [bit] NOT NULL,
	[Fecha_Limite_Pago] [date] NULL,
 CONSTRAINT [PK_Tbl_Factura_Compra] PRIMARY KEY CLUSTERED 
(
	[Id_FCompra] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Factura_Ventas]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Factura_Ventas](
	[Id_FVentas] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[Detale] [varchar](50) NOT NULL,
	[Cantidad] [int] NOT NULL,
	[Precio] [int] NOT NULL,
	[Estado] [varchar](50) NOT NULL,
	[Total] [int] NOT NULL,
	[Id_Cliente] [int] NOT NULL,
	[Id_inventario] [int] NOT NULL,
	[Fecha_Limite_Pago] [date] NULL,
 CONSTRAINT [PK_Tbl_Factura_Ventas] PRIMARY KEY CLUSTERED 
(
	[Id_FVentas] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Inventario]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Inventario](
	[Id_Inventario] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Cantidad] [int] NOT NULL,
	[Fecha_venci] [date] NOT NULL,
 CONSTRAINT [PK_Tbl_Inventario] PRIMARY KEY CLUSTERED 
(
	[Id_Inventario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Materiales]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Materiales](
	[Id_Material] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Cantidad] [int] NOT NULL,
	[Caducidad] [bit] NOT NULL,
	[Fecha_Vencimiento] [date] NULL,
	[Id_Proveedor] [int] NOT NULL,
 CONSTRAINT [PK_Tbl_Materiales] PRIMARY KEY CLUSTERED 
(
	[Id_Material] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Planilla]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Planilla](
	[Id_Planilla] [int] IDENTITY(1,1) NOT NULL,
	[Id_Empleado] [int] NOT NULL,
	[Salario] [int] NOT NULL,
	[Vacaciones] [int] NOT NULL,
	[Horas_Laboradas] [int] NOT NULL,
 CONSTRAINT [PK_Tbl_Planilla] PRIMARY KEY CLUSTERED 
(
	[Id_Planilla] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Proveedor]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Proveedor](
	[Id_Proveedor] [int] IDENTITY(1,1) NOT NULL,
	[Nombre_Empresa] [varchar](50) NOT NULL,
	[Direccion] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[Desabilitado] [bit] NULL,
 CONSTRAINT [PK_Tbl_Proveedor] PRIMARY KEY CLUSTERED 
(
	[Id_Proveedor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Reportes]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Reportes](
	[Id_Reporte] [int] IDENTITY(1,1) NOT NULL,
	[Id_Empleado] [int] NOT NULL,
	[Id_Material] [int] NOT NULL,
	[Id_Cliente] [int] NOT NULL,
 CONSTRAINT [PK_Tbl_Reportes] PRIMARY KEY CLUSTERED 
(
	[Id_Reporte] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tbl_Usuario]    Script Date: 20/06/2018 22:15:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Usuario](
	[Id_Usuario] [int] IDENTITY(1,1) NOT NULL,
	[Nickname] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[Id_Empleado] [int] NOT NULL,
	[Desabilitado] [bit] NULL,
 CONSTRAINT [PK_Tbl_Usuario] PRIMARY KEY CLUSTERED 
(
	[Id_Usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Tbl_Contabilidad]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Contabilidad_Tbl_Factura_Compra] FOREIGN KEY([Id_FCompra])
REFERENCES [dbo].[Tbl_Factura_Compra] ([Id_FCompra])
GO
ALTER TABLE [dbo].[Tbl_Contabilidad] CHECK CONSTRAINT [FK_Tbl_Contabilidad_Tbl_Factura_Compra]
GO
ALTER TABLE [dbo].[Tbl_Contabilidad]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Contabilidad_Tbl_Factura_Ventas] FOREIGN KEY([Id_FVenta])
REFERENCES [dbo].[Tbl_Factura_Ventas] ([Id_FVentas])
GO
ALTER TABLE [dbo].[Tbl_Contabilidad] CHECK CONSTRAINT [FK_Tbl_Contabilidad_Tbl_Factura_Ventas]
GO
ALTER TABLE [dbo].[Tbl_Factura_Compra]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Factura_Compra_Tbl_Materiales] FOREIGN KEY([Id_Materiales])
REFERENCES [dbo].[Tbl_Materiales] ([Id_Material])
GO
ALTER TABLE [dbo].[Tbl_Factura_Compra] CHECK CONSTRAINT [FK_Tbl_Factura_Compra_Tbl_Materiales]
GO
ALTER TABLE [dbo].[Tbl_Factura_Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Factura_Ventas_Tbl_Cliente] FOREIGN KEY([Id_Cliente])
REFERENCES [dbo].[Tbl_Cliente] ([Id_Cliente])
GO
ALTER TABLE [dbo].[Tbl_Factura_Ventas] CHECK CONSTRAINT [FK_Tbl_Factura_Ventas_Tbl_Cliente]
GO
ALTER TABLE [dbo].[Tbl_Factura_Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Factura_Ventas_Tbl_Inventario] FOREIGN KEY([Id_inventario])
REFERENCES [dbo].[Tbl_Inventario] ([Id_Inventario])
GO
ALTER TABLE [dbo].[Tbl_Factura_Ventas] CHECK CONSTRAINT [FK_Tbl_Factura_Ventas_Tbl_Inventario]
GO
ALTER TABLE [dbo].[Tbl_Materiales]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Materiales_Tbl_Proveedor] FOREIGN KEY([Id_Proveedor])
REFERENCES [dbo].[Tbl_Proveedor] ([Id_Proveedor])
GO
ALTER TABLE [dbo].[Tbl_Materiales] CHECK CONSTRAINT [FK_Tbl_Materiales_Tbl_Proveedor]
GO
ALTER TABLE [dbo].[Tbl_Planilla]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Planilla_Tbl_Empleados] FOREIGN KEY([Id_Empleado])
REFERENCES [dbo].[Tbl_Empleados] ([Id_Empleado])
GO
ALTER TABLE [dbo].[Tbl_Planilla] CHECK CONSTRAINT [FK_Tbl_Planilla_Tbl_Empleados]
GO
ALTER TABLE [dbo].[Tbl_Reportes]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Reportes_Tbl_Cliente] FOREIGN KEY([Id_Cliente])
REFERENCES [dbo].[Tbl_Cliente] ([Id_Cliente])
GO
ALTER TABLE [dbo].[Tbl_Reportes] CHECK CONSTRAINT [FK_Tbl_Reportes_Tbl_Cliente]
GO
ALTER TABLE [dbo].[Tbl_Reportes]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Reportes_Tbl_Empleados] FOREIGN KEY([Id_Empleado])
REFERENCES [dbo].[Tbl_Empleados] ([Id_Empleado])
GO
ALTER TABLE [dbo].[Tbl_Reportes] CHECK CONSTRAINT [FK_Tbl_Reportes_Tbl_Empleados]
GO
ALTER TABLE [dbo].[Tbl_Reportes]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Reportes_Tbl_Materiales] FOREIGN KEY([Id_Material])
REFERENCES [dbo].[Tbl_Materiales] ([Id_Material])
GO
ALTER TABLE [dbo].[Tbl_Reportes] CHECK CONSTRAINT [FK_Tbl_Reportes_Tbl_Materiales]
GO
ALTER TABLE [dbo].[Tbl_Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Usuario_Tbl_Empleados] FOREIGN KEY([Id_Empleado])
REFERENCES [dbo].[Tbl_Empleados] ([Id_Empleado])
GO
ALTER TABLE [dbo].[Tbl_Usuario] CHECK CONSTRAINT [FK_Tbl_Usuario_Tbl_Empleados]
GO
USE [master]
GO
ALTER DATABASE [BD_ERP] SET  READ_WRITE 
GO
