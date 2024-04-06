const planets = {
  Earth: 1,
  Mars: 1.52,
  Saturn: 9.538,
  Venus: 0.72,
  Jupiter: 5.2,
  Pluto: 39,
  Uranus: 19,
  Mercury:0.4,
  Neptune: 30,
}
function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  if (planets.hasOwnProperty(planet1)||planets.hasOwnProperty(planet2))
  return Math.abs(planets[planet1] - planets[planet2])
}

module.exports = calculateDistance;