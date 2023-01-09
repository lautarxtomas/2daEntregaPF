## IMPORTANTE!!! :
>> En los product.controller / cart.controller, comentar y descomentar las líneas respectivas para utilizar las bases de datos de Mongo DB o Firebase. (Firebase a veces no anda). Checkear la configuración de config/firebase y config/mongo. Si queremos usar otra BD en mongo, la podemos crear desde MongoDB Compass / Iniciar toda la configuración desde Mongo Atlas y seguir los pasos.


## MONGO DB:

EJEMPLO DE GET PARA PRODUCTOS

>> http://localhost:8080/api/productos 

Deberían aparecer todos los productos con sus respectivos IDS (después usar esos IDS a la hora de postear productos en el carrito)


EJEMPLO DE GET PARA CARRITOS:

>> http://localhost:8080/api/carritos/63bc22efeb340a2d298896cd/productos  (EL ID ES EL DEL CARRITO)

EJEMPLO DE POST PRODUCTO EN CARRITO:

>> PONEMOS PETICION POST A LA URL DE ARRIBA (O CAMBIANDO EL ID DE OTRO CARRITO) (http://localhost:8080/api/carritos/63bc22efeb340a2d298896cd/productos)

>> EN EL BODY LE MANDAMOS:

{
    "id": "63bc22bdeb340a2d298896ca" ---> ESTE ES EL ID DE UN PRODUCTO DE LOS QUE AGREGAMOS
}

 
