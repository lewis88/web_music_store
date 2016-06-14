var _ = require( 'lodash' );
var Record = require( './record_constructor' );

var Store = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
}

Store.prototype = {

  // addRecord: checks that record exists, if record exists, update quantity,
  // otherwise create new record
  addRecord: function( artist, title, price, quantity ){
    if ( this.findRecord( artist, title ).length === 0 ){
      var newRecord = new Record( artist, title, price, quantity );
      this.records.push( newRecord );
    } else {
      var index = _.findIndex( this.records, { 'artist': artist, 'title': title } );
      this.records[index]['quantity'] += quantity;
    }
  },

  // Try and get this to search for either artist and title, not both
  findRecord: function( artist, title ){
    return _.filter( this.records, { 'artist': artist, 'title': title } );
  },

  // listInventory lists all the inventory of the shop
  listInventory: function(){
    for ( var record of this.records ){
      // var r = this.records[record];
      console.log( "| Artist: " + record.artist + " | Album: " + record.title
      + " | Price: £" + record.price + " | Quantity: " + record.quantity + " |" );
    }
    // artistArray = _.map(this.records, 'artist' );
    // albumArray = _.map(this.records, 'title' );
    // priceArray = _.map(this.records, 'price' );
    // quantArray = _.map(this.records, 'quantity' );
    // for( var i = 0; i < this.records.length; i += 1 ){
    //
    //}
  },
  // _.map(..) order is not gauranteed

  // sellRecord: sells the desired record and quantity and updates balance
  sellRecord: function( artist, title, quantity ){
    index = _.findIndex( this.records, { 'artist': artist, 'title': title } );
    if ( quantity > this.records[index]['quantity'] ){
      this.balance += (this.records[index]['price'] * this.records[index]['quantity'])
      this.records[index]['quantity'] = 0
    } else {
      this.balance += (this.records[index]['price'] * quantity)
      this.records[index]['quantity'] -= quantity
    }
  },

  // shopStatus returns shop Balance and total asset value
  shopStatus: function(){
    var assetValue = 0
    for ( i = 0; i < this.records.length; i += 1 ){
      assetValue += (this.records[i].price * this.records[i].quantity);
    }
    console.log("Total Asset Value:", assetValue);
    console.log("Total Shop Balance:", this.balance);
  }

}
// _.map( this.records, 'price' * 'quantity' );
module.exports = Store;
