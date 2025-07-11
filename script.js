document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Toggle return date based on journey type
document.getElementById('journey-type').addEventListener('change', function () {
  const returnDateInput = document.getElementById('return-date');
  if (this.value === 'round-trip') {
    returnDateInput.style.display = 'inline-block';
    returnDateInput.required = true;
  } else {
    returnDateInput.style.display = 'none';
    returnDateInput.required = false;
  }
}),

 ( const resultsDiv = document.getElementById('flight-results');
  resultsDiv.innerHTML = '';
  const tripSegmentsContainer = document.getElementById('trip-segments');
const addSegmentBtn = document.getElementById('add-segment-btn');
const journeyType = document.getElementById('journey-type');

journeyType.addEventListener('change', function () {
  if (this.value === 'multi-city') {
    addSegmentBtn.style.display = 'inline-block';
  } else {
    addSegmentBtn.style.display = 'none';
    // Reset to single segment if not multi-city
    const segments = tripSegmentsContainer.querySelectorAll('.trip-segment');
    segments.forEach((seg, index) => {
      if (index > 0) seg.remove();
    });
  }
});

// Add new segment
addSegmentBtn.addEventListener('click', () => {
  const segment = document.createElement('div');
  segment.className = 'trip-segment';
  segment.innerHTML = `
    <input type="text" name="from" placeholder="From" required />
    <input type="text" name="to" placeholder="To" required />
    <input type="date" name="date" required />
  `;
  tripSegmentsContainer.appendChild(segment);
});


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
document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const journey = journeyType.value;
  const classType = document.getElementById('travel-class').value;
  const adults = document.getElementById('adults').value;
  const children = document.getElementById('children').value;

  const segments = [...tripSegmentsContainer.querySelectorAll('.trip-segment')].map(seg => {
    return {
      from: seg.querySelector('input[name="from"]').value,
      to: seg.querySelector('input[name="to"]').value,
      date: seg.querySelector('input[name="date"]').value
    };
  });

  const requestData = {
    journey,
    classType,
    adults,
    children,
    segments
  };

  console.log('Searching flights with:', requestData);
  showLoading();

  // Simulated API call delay
  setTimeout(() => {
    hideLoading();
    alert('Flight search completed! Check console for simulated response.');
  }, 2000);
});
function showLoading() {
  document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}


