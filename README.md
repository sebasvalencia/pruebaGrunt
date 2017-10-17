# GRUNT

Como empezar?
* Grunt es un task runner o ejecutor de tareas en JS,   que nos permite configurar tareas automáticas y así   ahorrarnos tiempo en el desarrollo y despliegue.

* Se crea un archivo *Gruntfile* donde escribimos que tareas quremos automatizar y se escriben en formato JSON.

* Instalamos grunt:
```
npm install -g grunt
npm install -g grunt-cli
npm install --save grunt
```

* Creamos el package.json:
```
npm init
```

* Preparamos el proyecto demo:
Creamos varias carpetas:
__css__,
__img__,
__js__

* Creamos el archivo Gruntfile, donde vamos a definir y configurar las tareas.
Este es solo un módulo de node que exportamos.

* Cargamos plugins
```javascript
grunt.loadNpmTasks('plugin1');  // proporciona "tarea"
```

Se definen en tres partes:
1. Configuración de tareas
2. Cargar plugins
3. Definición de tareas personalizadas
```javascript
        //configuración tareas
        grunt.initConfig({
            tarea:{
                configuracion de la tarea
            }
        });

        //carga plugin
        grunt.loadNpmTasks('plugin1'); 

        //Definición de tareas personalizadas y se ejecutan en el orden que se pongan, default es la tarea q se ejecuta si no escogemos otra.
        grunt.registerTask('default', ['tarea1']);
```









