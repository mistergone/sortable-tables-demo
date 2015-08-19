
$(document).ready( function() {

  $('.sortable-table .sortable-table_header .sorter a').click( function() {
    var $table = $( this ).closest( '.sortable-table' ),
        $tbody = $table.find( 'tbody' ),
        $cell = $( this ).closest( '.sortable-table_header' ),
        $row = $( this ).closest( 'tr' );
        index = $row.children( 'th, td' ).index( $cell ),
        rows = [],
        sorterArray = [];

      console.log( $cell, index );

      $table.find( 'tbody tr' ).each( function() {
        var key = $(this).find( 'td:nth-child(' + index + ')' ).text().trim();
        console.log( index, key );
        rows.push( [key, $(this)] );
      });

      rows.sort( function( a, b ) {
        a = a[0];
        b = b[0];

        if ( a < b ) {
          return -1
        }
        else {
          if ( a > b ) {
            return 1;
          }
          else {
            return 0;
          }
        }
      });
      if ( $(this).hasClass( 'sorter_down' ) === true ) {
        rows.reverse();
      }
      $tbody.empty();
      for( var i = 0; i < rows.length; i++ ) {
        $tbody.append( rows[i][1] );
      }
  });

});