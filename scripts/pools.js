// submit PR adding your pool here to have it displayed on website.
const pools = [
  {
    name: 'UBQ GOMINE.PRO',
    url: 'https://ubiq.gomine.pro/'
  }, {
    name: 'AltPool',
    url: 'http://ubq.altpool.pro'
  }, {
    name: 'BAIKALMINE',
    url: 'http://pool.baikalmine.com/en/ubiq/'
  }, {
    name: 'ZET',
    url: 'https://ubq.zet-tech.eu'
  }, {
    name: 'UbiqPool.io',
    url: 'https://ubiqpool.io'
  }, {
    name: 'WATTPOOL',
    url: 'https://ubiq.wattpool.net'
  }, {
    name: 'Ubiqpool.fr',
    url: 'https://ubiqpool.fr'
  }, {
    name: 'MyPool',
    url: 'https://ubq.mypool.online'
  }, {
    name: 'Mole-Pool',
    url: 'https://ubiq.mole-pool.net'
  }, {
    name: 'TerraHash',
    url: 'http://terrahash.cc'
  }, {
    name: 'MaxHash',
    url: 'https://ubiqpool.maxhash.org'
  }, {
    name: 'Pool.Sexy',
    url: 'https://mining-ubq.pool.sexy'
  }
]

// shuffle items in an array
function shuffle (array) {
  var currentIndex = array.length
  var temporaryValue
  var randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

module.exports = {
  // return pools in random order to prevent ordering bias
  get: function () {
    return shuffle(pools)
  }
}
