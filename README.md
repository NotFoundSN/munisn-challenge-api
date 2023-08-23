# munisn-challenge-api
parte backend desarrollada en node.js solicitada en un challenge

[Ir al frontend](https://github.com/NotFoundSN/munisn-challenge-ui)

## consigna
El challenge consiste en realizar una pantalla con un formulario de registro para usuarios con un rol normal/no administrador. Por otro lado una pantalla de login para un usuario con rol administrador el cuál no es necesario registrar mediante la página, puede estar seteado en la base de datos.

- En el caso de registro de usuarios los datos personales que deben solicitarse son: 
  - Nombre
  - Apellido
  - Número de DNI
  - Número de Teléfono
  - E-mail
  - Domicilio
- Cuando se registre debe desplegarse en el centro de la pantalla un modal con un mensaje de éxito o error si lo hubiese.

- En cuanto al login en el caso de éxito redirigir al admin a una página protegida (solo puede acceder el admin) donde se listen todos los usuarios normales ya registrados en una tabla. En el caso de error, un mensaje de las mismas características que el del usuario en el punto anterior.

## funciones

corre en el puerto 4000
los entry point se usan con metodo POST y son
 - /api/login
 - /api/register
 - /api/view
 
### /api/view
  - Debe recibir un token en el header de la consulta
  - devuelve un array vacio, o un array con todos los registros previos
  
### /api/register
  - Debe recibir los datos en el body del request 
  - puede devolver:
    - un array de errores si los datos no tienen el formato deseado.
    - un mensaje de error, junto con un nombre, si el registro ya esta en la base de datos.
    - un mensaje de error, si por algun motivo falla la conexion con la base de datos.
    - un mensaje de exito, junto con el nombre, si el registro fue satisfactorio
  
### /api/login
  - Debe recibir los datos en el body del request 
  - puede devolver:
    - un mensaje de error, si el usuario o la contraseña son invalidos
    - un token junto con el nombre del usuario, si el logeo fue posible
