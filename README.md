# API-REST del software de AdminHotel
Para empezar a utilizar está API Rest o empezar a colaborar en su creación se necesita clonar el repositorio a un repositorio local. Para hacer esto simplemente debe ejecutar el siguiente comando en un directorio local disponible.

<code>git clone https://github.com/DopoDev/ADMIN_HOTEL_API-REST_NODEJS.git</code>

Una vez clonado el proyecto, se deberá descargar todas las dependencias las cuales se pueden visualizar en el archivo de <code>package.json</code>, para realizar está instalación se deberá ejecutar el comando en la terminal donde se encuentran los archivos del
proyecto <code>npm i</code>.

Esta API Rest cuenta con la creación de 4 entidades, los clientes, empelados, habitaciones y usuarios. En el directorio de <code>src</code> se encuentran los archivos importantes para el funcionamiento del sistema, como <code>config.js</code> el cual se encarga de
configurar la conexión con la base de datos mediante los parametro de <code>.env</code> y define el puerto por defecto a utilizarse. El archivo de <code>db.js</code> realizamos la conexión a la base de datos PostgreSQL con la dependencia de "pg". 

El archivo de <code>index.js</code> es el de mayor utilidad, puesto que en este archivo se encuentra toda la configuración inicial para el funcionamiento de la API, se importan librerias, se inicializan las variables o constantes necesarias para utilizar las rutas
de las entidades y se configura el puerto que escuchará <code>express</code> para utilizar. 

## Directorio de Routes
Es un directorio donde se encuentran todas las rutas de las entidades para agregar las peticiones HTTP como get, post, put y delete. 

## Directorio controllers
Es un directorio donde se encuentra toda la lógica de la entidad correspondiente, aquí se generará el código funcional que será llamado en las rutas o routes. 

## Directorio database 
Aquí simplemente se encuentra la creación de la base de datos del sistema con postgreSQL. Se puede descargar el archivo <code>db.sql</code> y generar la base de datos en tu propia maquina.

## Archivo .env
fuera del directorio <code>src</code> existe un archivo llamado <code>.env.template</code> este archivo es una plantilla sobre como debe ser el archivo de las variables de entorno, donde se encontrarán los datos necesarios para realizar la conexión a la base de
datos, como el puerto, el usuario, la contraseña, el host y el nombre de la base de datos.
