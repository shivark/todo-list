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
        src: ['scripts/ts/app/*.ts'],
        dest: 'scripts/js/app/',
        options: {
          module: 'amd', //or commonjs 
          target: 'es6', //or es3 
          sourceMap: false,
          declaration: false
        }
      },
      specs: {
        src: ['scripts/ts/specs/*.ts'],
        dest: 'scripts/js/specs/',
        options: {
          module: 'amd', //or commonjs 
          target: 'es5', //or es3 
          sourceMap: false,
          declaration: false
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
            dest: 'scripts/js/libs',
            expand: true,
            filter: 'isFile'
          },
          {
            cwd: 'node_modules/knockout/build/output',
            src: 'knockout-latest.js',
            dest: 'scripts/js/libs',
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
    }, 
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }

  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('compile-all', ['sass', 'typescript','copy']);
  grunt.registerTask('runtests', ['typescript:specs', 'copy', 'karma']);
};