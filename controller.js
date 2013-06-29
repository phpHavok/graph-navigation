;(function( $, undefined ) {
	$( document ).ready(
		function() {
			var $collection = $( '.collection' );
			var $graph = $( '.graph.active', $collection );
			
			var $nodes = $( '.node', $graph );
			
			var $origin = $nodes.filter( '.origin' );
			var $siblings = $nodes.filter( ':not(.origin)' );
			
			var radius_min = 100;
			var radius_max = 150;
			var angle = 0;
			var distribution = 2 * Math.PI / $siblings.length;
			
			$siblings.each(
				function() {
					var radius = Math.floor( Math.random() * ( radius_max - radius_min ) + radius_min );
					var x = radius * Math.cos( angle );
					var y = radius * Math.sin( angle );					
					
					$( this ).css(
						{
							marginLeft: '+=' + x,
							marginTop: '+=' + y,
							
						}
					);
					
					angle += distribution;
				}
			);
			
			$( 'a', $nodes ).click(
				function( e ) {
					e.preventDefault();
				}
			);
		}
	);
})( jQuery );