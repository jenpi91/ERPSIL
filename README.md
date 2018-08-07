# ERPSIL
Trabajo Universitario de Sistema de Planificación de Recursos Empresariales

Compañeros de trabajo:
Jenniffer Pérez
Daniel Olsen Yu
Roberto Wong
Sofía Tenorio

Descripción del proyecto:
Para la automatización de un sistema ERP de la empresa Flores de Relleno San Isidro Labrador, se implementara un sistema, con bases de datos y que sea manejable por los empleados de la PYMES como usuarios finales, que les permita el control y manejo de un inventario centralizado de los materiales tanto que entran como salen del almacén, además de la automatización de la parte de recursos humanos, planillas y otros que le brinden a la empresa mayor flexibilidad, orden y actualización, con facilidades propias de la época actual y el lugar.
El software contará con permisos y privilegios por usuario, en donde se mantendrá el control de la información y que no se filtre nada confidencial.
  
Su modalidad será adaptable según los privilegios que se le brinde a cada usuario que se le dé acceso al programa, permitiéndoles acceder al programa desde cualquier computador con conexión a internet y siempre y cuando cuenten con un usuario y contraseña previamente autorizados.	
  
Las áreas de contabilidad y de recursos humanos se reorganizarán en módulos aptos para cada área permitiendo la claridad de funciones y movimientos dentro de la misma empresa sin necesidad de revisar bitácoras u documentación física que se pueda tergiversar o perder.
  
Este software tendrá la facilidad de impresiones de reportes de cada uno de los módulos, facilitando el acceso a la información con mayor rapidez en caso de una auditoría o simples informes brindados al dueño de la empresa.
Como parte de un plus dentro del ERP también se implementará la facturación digital, la cual es parte de la actualización anteriormente mencionada.

#Prerequisitos de instalacion: 
+ Descargar e instalar Xampp.
+ Descargar e instsalar phpMyAdmin.
+ Clonar el proyecto del repositorio.

#Instalacion del sistema:
+Ingresar las carpetas ERPSIL_fe y ERPSIL_be dentro de htdocs.
+Importarla base de datos a phpMyAdmin.
+Correr el sistema en http://localhost:8080/ERPSIL_fe
+En caso de no correr el sistema verificar la posicion correcta de la carpeta api, dentro de ERPSIL_be/www/settings.php, linea 36.

#Despliegue:
+En caso de querer desplegar una nueva version puede hacerla siemper y cuando genere pull request en el branch dev_merges.
