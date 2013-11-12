var ChartHelper = function () {
	
	var visualizeChartType = 'area';
	var visualizeChartHeight = '280px';
	var visualizeChartColors = ['#06C', '#222', '#777', '#555','#002646','#999','#bbb','#ccc','#eee'];
	var visualizeChartWidth = '';
	
	return { fusion: fusion, visualize: visualize };
	
	function visualize (config) {
		config.el.each(function() 
		{				
			visualizeChartHeight = ($(this).attr ('data-chart-height') != null) ? $(this).attr ('data-chart-height') + 'px' :  visualizeChartHeight;
			visualizeChartType = ($(this).attr ('data-chart-type') != null) ? $(this).attr ('data-chart-type') : visualizeChartType;				

			visualizeChartWidth = $(this).parent ().width () * .92;

			if(visualizeChartType == 'line' || visualizeChartType == 'pie') {
				$(this).hide().visualize({
					type: visualizeChartType
					, width: visualizeChartWidth
					, height: visualizeChartHeight			
					, colors: visualizeChartColors
					, lineDots: 'double'
					, interaction: true
					, multiHover: 5
					, tooltip: true
					, tooltiphtml: function(data) {
						var html ='';
						for(var i=0; i<data.point.length; i++){
							html += '<p class="chart_tooltip"><strong>'+data.point[i].value+'</strong> '+data.point[i].yLabels[0]+'</p>';
						}	
						return html;
					}
				}).addClass ('chartHelperChart');;
			} else {
				$(this).hide().visualize({
					type: visualizeChartType					
					, colors: visualizeChartColors
					, width: visualizeChartWidth
					, height: visualizeChartHeight
				}).addClass ('chartHelperChart');
			}				
		});
	}
	
	function fusion (object) {
		
		var el = $('#' + object.id);
		
		el.addClass ('chart-holder');
		el.empty ();
		object.width = object.width || el.width ();
		object.height = object.height || el.height ();
		
		object.width = el.width ();
		
		var chart = new FusionCharts("./FusionCharts/FCF_" + object.chart + ".swf", object.id, object.width, object.height);		   			
		if (object.dataUrl) {
			chart.setDataURL (object.dataUrl);		
		} else {		
			chart.setDataXML(object.data);
		}
		
		chart.render(object.id);
		
		return chart;

	}
}();