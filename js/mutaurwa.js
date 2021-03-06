/*!
 * mutaurwa-2
 *
 * MIT licensed
 * Copyright (C) 2013 Tim Holman, http://tholman.com
 */

/*********************************************
 *
 *********************************************/

function App() {

	var audios, fileNames;

	var elementHeight = 260;

    var filetype;

    this.init = function() {

        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isFirefox = typeof InstallTrigger !== 'undefined';

        if ( isOpera || isFirefox ) {
            filetype = '.ogg';
        } else {
            filetype = '.mp3';
        }

    	window.onresize = this.resize;
    	this.resize();
    	
        filenames = [ './assets/ol' + filetype, './assets/o' + filetype, './assets/l' + filetype, './assets/l' + filetype, './assets/rwa' + filetype]

        full   = new Audio( filenames[0] );
        audioA = new Audio( filenames[1] );
        audioB = new Audio( filenames[2] );
        audioC = new Audio( filenames[3] );
        audioD = new Audio( filenames[4] );
        
        audios = [ full, audioA, audioB, audioC, audioD ];

    	$playButton = $( '.play .icon' );
    	
    	$aClass = $( 'h1 .a');
    	$bClass = $( 'h1 .b');
    	$cClass = $( 'h1 .c');
    	$dClass = $( 'h1 .d');

    	$playButton.click( function() {
    		app.play( 0 );
    	} );
    	
    	$aClass.mouseover( function() {
    		app.play( 1 );
    	} );

    	$bClass.mouseover( function() {
    		app.play( 2 );
    	} );

    	$cClass.mouseover( function() {
    		app.play( 3 );
    	} );

    	$dClass.mouseover( function() {
    		app.play( 4 );
    	} );

    }

    this.resize = function() {

    	$( '.text' ).css({
    		'margin-top': ( (window.innerHeight - elementHeight) / 2 ) + 'px'
    	})
    }

    this.play = function( number ) {

    	audios[ number ].currentTime = 0;
    	audios[ number ].play();
    	audios[number ] = new Audio( filenames[number] );
    }

}
