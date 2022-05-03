import React, { useCallback, useState } from "react";
import { Chart, registerables } from 'chart.js';
import { Bar, Line, PolarArea } from 'react-chartjs-2';
import { InputChart } from "../InputChart";
import { RadioChart } from "../RadioChart";
import {Charts} from '../../types/types';
import classNames from 'classnames'
import './BarChart.scss';

Chart.register(...registerables);

export const BarChart: React.FC = React.memo(() => {

  const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May']);
  const [values, setValues] = useState(['1', '5', '10', '1', '2'])
  const [selectedChartType, setSelectedChartType] = useState<Charts>(Charts.Bar);

  const setChart = useCallback((chart: Charts) => {
    setSelectedChartType(chart)
  }, [])

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset',
        data: values,
        backgroundColor: 'rgb(0, 221, 85)',
        borderColor: 'rgb(1, 56, 22)',
      }
    ],
  };

  const selectChart = () => {
    switch(selectedChartType) {
      case Charts.Bar: {
        return (
          <Bar 
          data = {data}
          options = {{ responsive: true }}
          height = {30}
          width = {100}
        />
        )  
      }

      case Charts.Line: {
        return (
          <Line 
          data = {data}
          options = {{ responsive: true }}
          height = {30}
          width = {100}
        />
        )
      }

      case Charts.PolarArea: {
        return (
          <PolarArea 
          data = {data}
          options = {{ responsive: true }}
        />
        )
      }
    }
  }

  const selectedChart = selectChart();

  return (
    <div>

      <InputChart 
        data={labels} 
        axis={'X'}
        setData={setLabels}
      />

      <InputChart 
        data={values} 
        axis={'Y'}
        setData={setValues}
      />

      <div className={classNames({chart: selectedChartType === Charts.PolarArea})}>
        {selectedChart}
      </div>

      <div className="radios">
        <RadioChart 
          selected={selectedChartType}
          value={Charts.Bar}
          setSelected={setChart}
        />
        <RadioChart 
          selected={selectedChartType}
          value={Charts.Line}
          setSelected={setChart}
        />
        <RadioChart 
          selected={selectedChartType}
          value={Charts.PolarArea}
          setSelected={setChart}
        />
      </div>
    </div>
  )
})