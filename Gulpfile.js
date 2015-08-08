//Setting up the Gulp file.
//
//Alright! Lets get into actually writing the JS. Inside the Gulpfile.js we need to do a few things. First we need to get access to gulp, and then we have to actually set up the task that will run and compile the sass to css.

/*
var gulp = require('gulp');
var sass = require('gulp-sass');
Since gulp runs on node, we use the require() function to get access to our modules.
*/

/*
Now let’s build the actual task.
*/

//var gulp = require('gulp');
//var sass = require('gulp-sass');
//
//gulp.task('styles', function() {
//    gulp.src('sass/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./css/'));
//});
//Let’s break this down a bit. First we add gulp.task() this is how we define our tasks in gulp. This method takes two arguments, the name of the task, and a callback function to run the actual task. In this case we call it ‘styles’. Next we set up what files we want to look at, to do that we use gulp.src() inside there we pass a string of the location of the files we want to watch, this path is relative to the gulpfile.js.
//
//Next we use the .pipe() method to pass along anything from the .src() inside of this method we use the imported sass module to compile our sass. The sass function emits events if there is an error, so we can listen to this event using .on('error', sass.logError)). This one is important, because if there is an error parsing your sass by default it will just kill the gulp process, but with this option it will tell us where the error is!
//
//The final step is to tell gulp where to put the newly compiled sass. To do this we use the .pipe() method to take the data from the previous .pipe(). To set the destination we use the .dest() method. In this method we add a string that will be the path to the destination we want to output our new css too. Much like the .src() path, this is relative to our gulpfile.js. In this case we set it to be output into our css folder. And that will be that, this task takes our style.scss compiles it and outputs it as a style.css file in our css folder!
//
//Running the gulpfile
//
//In order to run our gulp we simply go to the terminal and type gulp styles where ‘styles’ is the name of that task we created! However, this can get a bit repetitive if we are working! Lets set up a simple task to watch our files.

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
/*This last task is very simple, we use the .watch() method. We pass in the path to the files we want to watch, and then pass in an array with the tasks that we want to run when the files are changed. The great thing about this task is since we have called this task ‘default’, we can just run gulp when we want to run gulp, no need to specify a task! And it will now just sit and wait for files to be saved and then run our task!

And that is it, I hope that is helpful to you, if you have any questions let pop them in the comments!*/