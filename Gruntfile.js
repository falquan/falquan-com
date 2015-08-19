module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'out/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**', 
                        '!scss/**'
                    ],
                    dest: 'out/'
                }]
            }
        },
        watch: {
            files: ['src/**'],
            tasks: ['sass', 'compile']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    //grunt.registerTask('default', ['lint']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('compile', ['copy']);

    grunt.registerTask('default', ['watch']);

};