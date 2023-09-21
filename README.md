# Piedra - Papel - Tijera 

Este proyecto trata sobre el clásico juego de "piedra, papel o tijera" ejecutado en html que permite al usuario jugar partidas contra la computadora.
 
## Instrucciones 📋 

<code><pre>

### 1. Iniciar el juego:

* Ingresa tu nombre en el campo de texto.
* Haz clic en el botón **"Iniciar"**.
* Si dejas el campo vacío, verás la alerta **"Por favor, ingrese su nombre"** y el juego no comenzará.

### 2. Comienza la partida:

* Una vez validado tu nombre, se iniciará el juego.
* Verás tu nombre y el del rival que será **"Computadora"** en la pantalla.
* La puntuación comenzará en 0 para ambos jugadores.

### 3. Jugando una ronda:

* En la pantalla se mostrarán dos imágenes de manos enfrentadas listas para iniciar la partida.
* Debajo, encontrarás tres botones para seleccionar tu jugada: Piedra, Papel o Tijeras.
* Haz clic en el botón de tu elección para iniciar la ronda.

### 4. Ganador de la ronda:

* Después de tu elección, la computadora hará su jugada automáticamente y de manera aleatoria.
* Se determinará el ganador según las reglas clásicas: Piedra vence a Tijeras, Tijeras vencen a Papel, Papel vence a Piedra.
* La puntuación se actualizará según el resultado de la ronda:
    * El ganador de la ronda sumará un punto a su marcador.  
    * En caso de empate el marcador no se verá modificado.

### 5. Ganar el juego:

* El jugador que primero logré sumar 3 puntos será el ganador.

### 6. Volver a jugar:
* En caso de que una partida no haya sido suficiente aparecerá un botón en la parte inferior de la pantalla que te permitirá comenzar un nuevo juego.

#### **¡A jugar y que gane el mejor!**

</pre></code>


## Ejecutando las pruebas ⚙️

Antes de lanzar el juego, es fundamental asegurarse de que todas las funcionalidades operen sin problemas. A continuación, se detallan los resultados de las pruebas realizadas:

### 1. Inicio del Juego sin ingresar nombre:

* __Prueba:__ Al hacer clic en el botón "Iniciar" sin ingresar un nombre.
* __Resultado Esperado:__ Debería aparecer una alerta solicitando ingresar un nombre.
* __Resultado Obtenido:__ La alerta se muestra correctamente. _("Por favor, Ingrese su nombre")_   

### 2. Iniciar Juego con Nombre:

* __Prueba:__ Ingresar un nombre en el campo de texto y hacer clic en "Iniciar".
* __Resultado Esperado:__ El juego debe comenzar, mostrando el nombre a la izquierda del marcador.
* __Resultado Obtenido:__ El juego inicia correctamente y el nombre elegido se visualiza correctamente a la izquierda del marcador.   

### 3. Selección de Jugada:

* __Prueba:__ Hacer clic en uno de los tres botones de jugada (Piedra, Papel, Tijeras) después de iniciar el juego.
* __Resultado Esperado:__ Deben mostrarse en pantalla las elecciones hechas por el jugador y la computadora, junto con las imágenes correspondientes y el detalle de ambas jugadas por escrito.
* __Resultado Obtenido:__ Las elecciones, imágenes y registro de jugadas se presentan como se espera.   

#### Pruebas:✒️

* __Elección:__ Selecciono el botón con la imagen de la piedra.    
__Resultado Esperado:__ Se debe mostrar la imagen correspondiente a la piedra y el detalle por escrito de lo elegido.    
__Resultado Obtenido:__ Aparece correctamente la selección realizada y el detalle por escrito.        

* __Elección:__ Selecciono el botón con la imagen del papel.    
__Resultado Esperado:__ Se debe mostrar la imagen correspondiente al  papel y el detalle por escrito de lo elegido.    
__Resultado Obtenido:__ Aparece correctamente la selección realizada y el detalle por escrito.     

* __Elección:__ Selecciono el botón con la imagen de la tijera.    
__Resultado Esperado:__ Se debe mostrar la imagen correspondiente a la tijera y el detalle por escrito de lo elegido.    
__Resultado Obtenido:__ Aparece correctamente la selección realizada y el detalle por escrito.   

* __Elección:__ Selecciono el botón con la imagen del papel.    
__Resultado Esperado:__ Se debe mostrar la imagen correspondiente al papel y el detalle por escrito de lo elegido.    
__Resultado Obtenido:__ Aparece correctamente la selección realizada y el detalle por escrito.   

* __Elección:__ Selecciono el botón con la imagen de la tijera.   
__Resultado Esperado:__ Se debe mostrar la imagen correspondiente a la tijera y el detalle por escrito de lo elegido.   
__Resultado Obtenido:__ Aparece correctamente la selección realizada y el detalle por escrito.       

* __Elección:__ Selecciono el botón con la imagen de la piedra.   
__Resultado Esperado:__ Se debe mostrar la imagen correspondiente a la piedra y el detalle por escrito de lo elegido.   
__Resultado Obtenido:__ Aparece correctamente la selección realizada y el detalle por escrito.              
         
### 4. Puntuación y Resultados:

_Recodatorios:_

```
    Se determinará el ganador según las reglas clásicas: Piedra vence a Tijeras, Tijeras vencen a Papel, Papel vence a Piedra.

    La elección que haga la computadora no se puede saber de antemano ya que se realiza en el momento de manera automática y aleatoria por lo que no se puede anticipar ningún resultado.

    En caso de que alguno de los participantes logren acumular 3 puntos se dará por finalizada la partida informando por pantalla al vencedor correspondiente.
```

* __Prueba:__ Realizar varias rondas de juego y verificar cómo se actualiza la puntuación.
* __Resultado Esperado:__ El marcador debe actualizarse correctamente para reflejar los puntos ganados por el jugador y la computadora, al momento en que cualquier competidor llegue a 3 puntos el juego debe finalizar.
* __Resultado Obtenido:__ La puntuación se actualiza adecuadamente y se informa de manera correcta por pantalla.

#### Prueba N1:✒️

* __Elección:__ Selecciono el botón con la imagen de la piedra.   
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.   
__Resultado Obtenido:__ La computadora elige piedra y por pantalla se informa correctamente de un empate, no hay cambios en el marcador (0-0).   

* __Elección:__ Selecciono el botón con la imagen del papel.   
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.   
__Resultado Obtenido:__ La computadora elige piedra y por pantalla se informa correctamente la victoria del usuario, sumando el punto correspondiende en el marcador (1-0).    

* __Elección:__ Selecciono el botón con la imagen de la tijera.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige papel y por pantalla se informa correctamente la victoria del usuario, sumando el punto correspondiende en el marcador (2-0).        

* __Elección:__ Selecciono el botón con la imagen del papel.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige tijera y por pantalla se informa correctamente la victoria de la computadora, sumando el punto correspondiende en el marcador (2-1).         
       
* __Elección:__ Selecciono el botón con la imagen de la tijera.   
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige piedra y por pantalla se informa correctamente la victoria de la computadora, sumando el punto correspondiende en el marcador (2-2).                 

* __Elección:__ Selecciono el botón con la imagen de la piedra.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige tijera y por pantalla se informa correctamente la victoria del usuario, sumando el punto correspondiende en el marcador (3-2) y la finalización de la partida dando como ganador al usuario a través del mensaje de victoria correspondiente.       


#### Prueba N2:✒️
        
* __Elección:__ Selecciono el botón con la imagen del papel.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige piedra y por pantalla se informa correctamente la victoria del usuario, sumando el punto correspondiende en el marcador (1-0).    
>
* __Elección:__ Selecciono el botón con la imagen del papel.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige papel y por pantalla se informa correctamente de un empate, no hay cambios en el marcador (1-0).      

* __Elección:__ Selecciono el botón con la imagen de la tijera.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige piedra y por pantalla se informa correctamente la victoria de la computadora, sumando el punto correspondiende en el marcador (1-1).        

* __Elección:__ Selecciono el botón con la imagen de la piedra.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige piedra y por pantalla se informa correctamente de un empate, no hay cambios en el marcador (1-1).       
       
* __Elección:__ Selecciono el botón con la imagen de la tijera.   
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige piedra y por pantalla se informa correctamente la victoria de la computadora, sumando el punto correspondiende en el marcador (1-2).               

* __Elección:__ Selecciono el botón con la imagen de la piedra.    
__Resultado Esperado:__ Según la elección de la computadora se debe informar si hay un ganador o un empate.    
__Resultado Obtenido:__ La computadora elige papel y por pantalla se informa correctamente la victoria de la computadora, sumando el punto correspondiende en el marcador (1-3) y la finalización de la partida dando como ganadora a la computadora a través del mensaje de victoria correspondiente.         
    
### 5. Volver a jugar

* __Prueba:__ Hacer clic en el botón **"Volver a jugar"** y comprobar que se reinicie el juego para iniciar una nueva partida contra la computadora.
* __Resultado Esperado:__ Al hacer click el juego tiene que estar disponible y limpio para empezar una nueva partida desde 0 contra la computadora manteniendo el nombre de usuario elegido. 
* __Resultado Obtenido:__ El juego se reinicia de manera correcta, los nombres se mantienen, los marcadores vuelven a 0 y las imágenes iniciales se restablecen, desaparece de manera esperada el botón para volver a jugar, desaparece el mensaje informando de la última jugada realizada y desaparece el mensaje de victoria que apareció al final de la partida anterior, vuelven a mostrarse los botones para seleccionar la próxima jugada dejando todo listo y a disposición para iniciar una partida nueva.

## Autor ⌨️

* **Vicente Mengarelli** -> [GitHub](https://github.com/VicenteMengarelli)




