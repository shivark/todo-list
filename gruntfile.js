module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles/sass',
          src: ['*.scss'],
          dest: 'styles/css',
          ext: '.css'
        }]
      }
    },
    typescript: {
      base: {
        src: ['scripts/ts/*.ts'],
        dest: 'scripts/js',
        options: {
          module: 'amd', //or commonjs 
          target: 'es5', //or es3 
          sourceMap: true,
          declaration: true
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            cwd: 'node_modules/bootstrap-sass/assets/stylesheets',
            src: 'bootstrap/**',
            dest: 'styles/sass',
            expand: true
          },
          {
            cwd: 'node_modules/bootstrap-sass/assets/javascripts',
            src: 'bootstrap.js',
            dest: 'scripts/js',
            expand: true,
            filter: 'isFile'
          },
              {
            cwd: 'node_modules/knockout/build/output',
            src: 'knockout-latest.js',
            dest: 'scripts/js',
            expand: true,
            filter: 'isFile'
          }
        ],
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('compile-all', ['copy', 'sass', 'typescript']);

};