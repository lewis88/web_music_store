var Store = require( './store_constructor' );

var hmv = new Store( 'HMV', 'Edinburgh', 1000 );
hmv.addRecord( 'Oasis', 'Wonderwall', 10, 5);
hmv.addRecord( 'Slipknot', '1st Album', 12, 6);
hmv.addRecord( 'Oasis', 'Wonderwall', 10, 5);
hmv.addRecord( 'Slipknot', '1st Album', 12, 5);
hmv.addRecord( 'Nirvana', 'Nevermind', 10, 5);
hmv.addRecord( 'Red Hot Chilli Peppers', 'Californication', 10, 5);

hmv.listInventory();

console.log( hmv.shopStatus() );

// for ( record in this.records ){
//   for ( var key in record ){
//     console.log( 'key', record[key] );
//   }
// }
// Object.keys(this.records).forEach(function(key){
// var val = this.records[key];
// console.log( val );
// )}
//   var recArray = [];
//   for ( var record in this.records ){
//     recArray = _.values( record );
//     console.log( "| Artist: " + recArray[0] + " | Album: " + recArray[1]
//     + " | Price: £" + recArray[2] + " | Quantity: " + record[3] + " |" );
//     // console.log( rString ); );
//   }
// },
// var listArtist = _.map( this.records, 'artist' );
// console.log( 'Artist and title', listArtist );

console.log('RECORDS ARRAY', hmv.records );

console.log('THIS RECORD', hmv.findRecord('Oasis', 'Wonderwall'));

hmv.sellRecord( 'Oasis', 'Wonderwall', 2);
console.log('THIS RECORD', hmv.findRecord('Oasis', 'Wonderwall'));
console.log( hmv.balance );

hmv.sellRecord( 'Oasis', 'Wonderwall', 9);
console.log('THIS RECORD', hmv.findRecord('Oasis', 'Wonderwall'));
console.log( hmv.balance );
