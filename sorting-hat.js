
$(document).ready( function() {

  $('.sortable-table .sortable-table_header .sorter a').click( function() {
    var $table = $( this ).closest( '.sortable-table' ),
        $tbody = $table.find( 'tbody' ),
        $cell = $( this ).closest( '.sortable-table_header' ),
        $row = $( this ).closest( 'tr' );
        index = $row.children( 'th, td' ).index( $cell ),
        rows = [], // Array-of-Arrays for sorting
        sign = 1; // for reverse-sorting

      $table.find( 'tbody tr' ).each( function() {
        // Find the value of the cell we're sorting by, add it to the Array
        var child = index + 1,
            key = $(this).find( 'td:nth-child(' + child + ')' ).text().trim();
        rows.push( [key, $(this)] );
      });

      // For reverse sorting, reverse the sign
      if ( $(this).hasClass( 'sorter_down' ) === true ) {
        sign = -1;
      }
      
      rows.sort( function( a, b ) {
        // Set a and b to the first Array in each Array-of-Arrays
        a = a[0];
        b = b[0];

        // Sort the values
        if ( a < b ) {
          return sign * -1;
        }
        else {
          if ( a > b ) {
            return sign;
          }
          else {
            return 0;
          }
        }
      });

      // Empty the tbody to prepare for sorted rows
      $tbody.empty();

      // Insert sorted rows
      for( var i = 0; i < rows.length; i++ ) {
        $tbody.append( rows[i][1] );
      }
  });

});