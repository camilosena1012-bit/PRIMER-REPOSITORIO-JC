## P0. 

*Cliente:* es el navegador que usamos en nuestro computador o celular, porque es quien solicita la página.

*Servidor:* es el equipo donde está guardada la página web y que responde a la solicitud.

*Entrada:* viaja la solicitud que hacemos, por ejemplo, la dirección de la página que queremos abrir.

*Salida:* viaja la respuesta del servidor, como el código HTML, CSS, JavaScript, imágenes y demás elementos necesarios para mostrar la página.

## P1. 

creo que  en las tres rutas vamos a ver lo mismo osea "hola desde el servidos "

Porque el código del servidor no está revisando por cuál ruta entra el usuario; simplemente responde lo mismo con res.end() sin importar qué le pidan.

## P2 

Aunque abra una sola página, creo que en la terminal van a salir dos peticiones (o más de una).

porque el servidor va a pedir cosas que aun no tiene por ejemplo el icono etc. 

## P3

Seguro que las dos me van a tirar error 404 ("Ruta no encontrada").

Porque el código compara el texto exacto con el ===. Si le pongo un slash de más al final (/actividades/) o lo escribo en mayúsculas (/ACTIVIDADES), ya no es idéntico a lo que pide el if, así que nos manda derecho al else.