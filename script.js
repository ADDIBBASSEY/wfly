document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('departure-date').value;

  const resultsDiv = document.getElementById('flight-results');
  resultsDiv.innerHTML = '';

  // Dummy data for now
  const flights = [
    { airline: 'AirSky', from, to, time: '08:00 AM', price: '$120' },
    { airline: 'JetWing', from, to, time: '12:30 PM', price: '$150' },
    { airline: 'CloudFly', from, to, time: '06:45 PM', price: '$100' },
  ];

  flights.forEach(flight => {
    const card = document.createElement('div');
    card.className = 'flight-card';
    card.innerHTML = `
      <h3>${flight.airline}</h3>
      <p>${flight.from} → ${flight.to}</p>
      <p>Departure: ${flight.time}</p>
      <p>Price: ${flight.price}</p>
      <button>Book Now</button>
    `;
    resultsDiv.appendChild(card);
  });
});