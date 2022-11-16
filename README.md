# pruebaSolveBack
Todo el codigo se ha implementado en el fichero server.ts.

La principio tenemos las declaraciones de constantes. app, PORT, db y bodyparser

A app le damos acceso a la caracteristica de seguridad cors.

Seguido tenemos las funciones:
    - get:  Devuelve todo el contenido de la tabla 'users'
    - post: inserta en la tabla 'users' el nuevo usuario con sus respectivos items introducidos a través de json
    - delete: Elimina el usuario de la id introducida por req
    - put: actualiza el item indicado en option al valor introducido por json

Por último la funcio app.listen que nos indica en el terminal que el backend esta escuchando y por que puerto.