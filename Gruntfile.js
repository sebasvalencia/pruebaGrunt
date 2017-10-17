module.exports = function(grunt){
    //Aca va la definición y configuración de tareas
    /*
        Se definen en tres partes:
        Configuración de tareas
        Cargar plugins
        Definición de tareas personalizadas

        //configuración tareas
        grunt.initConfig({
            tarea:{
                configuracion de la tarea
            }
        });

        //carga plugin
        grunt.loadNpmTasks('plugin1'); 


        grunt.registerTask('default', ['tarea1', 'tarea2']);

    */


    grunt.initConfig({
        concat: {
            css:{
                src: ['css/main.css', 'css/theme.css'],
                dest: 'css/style.css'
            }
        },
        js:{
            options:{
                separator:';'
            },
            src:['js/archivo1.js','js/archivo2.js'],
            dest: 'js.bundle.js'
        },
        uglify:{
            options:{
                mangle:false
            },
            build:{
                src:['js/bundle.js'],
                dest:'js/script.js'
            }
        }
    });
        

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


};