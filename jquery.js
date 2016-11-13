//option 1: To load jQuery as soon as document loads with images
// window.onload = function() {
//
//     alert( "welcome" );
//
// };

//Option 2: To load code as soon as document is ready to be manipulated
// $( document ).ready(function() {
//     $( "a" ).click(function( event ) {
//         alert( "Thanks for visiting!" );
//     });
// });

//Task: Prevent Default function of click on a tag
// $( document ).ready(function() {
//     $( "a" ).click(function( event ) {
//         alert( "As you can see, the link no longer took you to jquery.com" );
//         event.preventDefault();
//     });
//     $( "a" ).addClass( "test" );
//     // $( "a" ).removeClass( "test" );
// });

//Task: Hide a tag slowly
$( "a" ).click(function( event ) {
    event.preventDefault();
    $( this ).hide( "slow" );
});
