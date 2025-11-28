// show dbs
use("bdEtu_edumai") ;

// db.Commandes.find({},{MoisCommande:{$month:"DateCommande"}})
db.Commandes.findOne({}, { DateCommande: 1, _id: 0 });
