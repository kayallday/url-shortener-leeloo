const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;

// add task
gulp.task('addAll', function() {

  // allllllll the sources of alllll the files
  return gulp.src('./gulpfile.js')
    .pipe(git.add());
});

// add task
gulp.task('commit', function() {

// commit source of files
  return gulp.src('./gulpfile.js')
  .pipe(git.commit('auto Commit message...loading'));
});

gulp.task('everything', ['addAll', 'commit']);
