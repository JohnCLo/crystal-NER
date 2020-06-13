var nr = require( 'name-recognition' );
var txt = 'The county municipal building on Monroe Avenue is named for former County Executive Edwin Michaels and county-owned Allen park in Somers is named to memorialize former County Executive Alfred DelCampo. Edwin Michaels is currently retired and living in South Palmetto County.';
var namesFound;
namesFound = nr.find( txt );
// returns 4 names
// Edwin Michaels, Allen park, Alfred DelCampo, Edwin Michaels


namesFound = nr.find( txt, { capitalized : true, unique : true } );
console.log(namesFound);
// returns 2 names
// Edwin Michaels, Alfred DelCampo