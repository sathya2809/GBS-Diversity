import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const MatchScoreChart = () => {
  useEffect(() => {
    let root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 20,
      })
    );

    let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
    cursor.lineY.set('visible', false);

    // Create axes
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'score',
        renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 30 }),
      })
    );

    xAxis.get('renderer').grid.template.setAll({
      strokeOpacity: 0 // Remove vertical grid lines
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0, // Remove vertical axis line
        }),
      })
    );

    yAxis.get('renderer').grid.template.setAll({
      strokeOpacity: 0.2 // Remove horizontal grid lines
    });

    // Create series
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Match Score',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'score',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{valueY}',
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });

    // Set data
    let data = [
      { score: '1', value: 5, label: 'Lowest' },
      { score: '2', value: 10, label: 'Low' },
      { score: '3', value: 15, label: 'Moderate' },
      { score: '4', value: 20, label: 'High' },
      { score: '5', value: 25, label: 'Highest' },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Animate on load
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: '90%', height: '500px', margin: '0 auto' }}></div>;
};

export default MatchScoreChart;
