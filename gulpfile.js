const gulp            = require('gulp'),
      ClosureCompiler = require('google-closure-compiler').gulp();

gulp.task('dist', gulp.series(
    function(){
        return gulp.src( [ './src/rawdeflate.js' ]
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ './src/__externs.js' ],
                        define            : [
                        ],
                        compilation_level : 'ADVANCED',
                        // compilation_level : 'WHITESPACE_ONLY',
                        // formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        js_output_file    : 'rawdeflate.min.js'
                    }
                )
            ).pipe( gulp.dest( 'dist' ) );
    },
    function(){
        return gulp.src( [ './src/rawinflate.js' ]
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ './src/__externs.js' ],
                        define            : [
                            'RAWINFLATE_DEBUG=false'
                        ],
                        compilation_level : 'ADVANCED',
                        // compilation_level : 'WHITESPACE_ONLY',
                        // formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        // output_wrapper    : 'var inflate=%output%',
                        js_output_file    : 'rawinflate.min.js'
                    }
                )
            ).pipe( gulp.dest( 'dist' ) );
    }
));