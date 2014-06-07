module.exports = function(grunt) {

  grunt.initConfig({
    dogescript: {
      amaze: {
        options: {
          beauty: true,
          trueDoge: true,
        },
        src: ['doge.djs']
      }
    },

    watch: {
      doge: {
        files: ['doge.djs'],
        tasks: ['dogescript']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dogescript');

  grunt.registerTask('default', ['dogescript']);
  grunt.registerTask('much-watch', ['dogescript', 'watch']);

};
