const form = document.getElementById('opion-form');

form.addEventListener('submit', (e) => {
  const choice = document.querySelector('input[name=moive]:checked').value;
  const data = { movie: choice };

  axios.post('/post ', data).then((data) => {
    console.log(data);
  });
  e.preventDefault();
});

let dataPoints = [
  { label: 'The Avengers', y: 0 },
  { label: 'Black Panther', y: 0 },
  { label: 'Captain America', y: 0 },
  { label: 'Other', y: 0 },
];

const chartContainer = document.querySelector('#chart-container');
if (chartContainer) {
  const chart = new CanvasJS.Chart('chart-container', {
    animationEnabled: true,
    theme: 'theme1',
    title: { text: 'Favorite Movie' },
    data: [{ type: 'column', dataPoints: dataPoints }],
  });
  chart.render();

  var ably = new Ably.Realtime('YOUR_KEY');
  var channel = ably.channels.get('ably-nest');
  channel.subscribe('vote', (poll) => {
    dataPoints = dataPoints.map((x) => {
      if (x.label == poll.data.movie) {
        x.y += poll.data.points;
        return x;
      } else {
        return x;
      }
    });
    chart.render();
  });
}
