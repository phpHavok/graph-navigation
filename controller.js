;(function( $, undefined ) {
	$( document ).ready(
		function() {
			var $collection = $( '.collection' );
			
			var unloadGraph = function( $graph, complete ) {
				$( '.node', $graph ).css(
					{
						marginLeft: '-8px',
						marginTop: '-8px'
					}
				);
				
				$graph
					.off(
						'.sunsoft',
						'**'
					)
					.fadeOut(
						250,
						function() {
							complete.call( this );
						}
					);
			};
			
			var loadGraph = function( $graph ) {
				var $nodes = $( '.node', $graph );
				var $siblings = $nodes.filter( ':not(.origin)' );
				
				var radius_min = 100;
				var radius_max = 150;
				var angle = 0;
				var distribution = 2 * Math.PI / $siblings.length;
				
				$graph.fadeIn(
					250,
					function() {
						$( this ).on(
							'click.sunsoft',
							'.node a',
							function( e ) {
								e.preventDefault();
								
								var _self = this;
								
								unloadGraph(
									$graph,
									function() {
										loadGraph( $( $( _self ).attr( 'href' ) ) );
									}
								);
							}
						);
					}
				);
				
				$siblings.each(
					function() {
						var radius = Math.floor( Math.random() * ( radius_max - radius_min ) + radius_min );
						var x = radius * Math.cos( angle );
						var y = radius * Math.sin( angle );					
						
						$( this ).css(
							{
								marginLeft: ( x - 8 ) + 'px',
								marginTop: ( y - 8 ) + 'px'
							}
						);
						
						angle += distribution;
					}
				);
			};
			
			loadGraph( $( '#home', $collection ) );
		}
	);
})( jQuery );