var Store = require( '../store_constructor' );
var Record = require( '../record_constructor');
var assert = require( 'chai' ).assert;

describe('Music Store', function(){
  hmv = new Store( 'HMV', 'Edinburgh', 1000 );

  it('Check that Store object has name, city and balance', function(){
    assert.equal( 'HMV', hmv.name );
    assert.equal( 'Edinburgh', hmv.city );
    assert.equal( 1000, hmv.balance );
  })

  it('Check that Store object is initialized with an empty record array', function(){
    assert.equal( 0, hmv.records.length );
  })

  it('Check that Store can add new records to the records array', function(){
    hmv.addRecord( 'Oasis', 'Wonderwall', 10, 5 );
    assert.equal( 1, hmv.records.length )
  })

  it('Check that Store can find records in the records array', function(){
    foundRecord = hmv.findRecord( 'Oasis', 'Wonderwall')[0]['artist'];
    assert.equal( 'Oasis', foundRecord );
  })

  it('Check that Store can sell records, updating the quantity and shop balance', function(){
    hmv.sellRecord( 'Oasis', 'Wonderwall', 2 );
    checkPrice = hmv.findRecord( 'Oasis', 'Wonderwall')[0]['quantity'];
    assert.equal( 3, checkPrice );
    assert.equal( 1020, hmv.balance );
  })

})
