// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Define the chart data
var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [2000, 3000, 5000, 6000, 8000, 10000],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Revenue',
      data: [1000, 2000, 3000, 4000, 5000, 6000],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

// Define the chart options
var options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Create the chart
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});


//For Pie-chart

// Get the canvas element
var ctx = document.getElementById('myChart-1').getContext('2d');

// Define the chart data
var data = {
  labels: ['Clothing', 'Electronics', 'Home Decor', 'Personal Hygiene'],
  datasets: [
    {
      label: 'Sales by Category',
      data: [2000, 3000, 5000, 6000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Define the chart options
var options = {
  responsive: true,
};

// Create the chart
var myChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options,
});
