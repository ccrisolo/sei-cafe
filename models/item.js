const mongoose = require("mongoose");
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require("./category");
const itemSchema = require("./itemSchema");

/*Why the heck is the itemSchema not being defined in the module as usual? 
It's because the itemSchema is also used to
embed Line Items in the lineItemSchema - 
so we're staying DRY by not defining the same schema twice.*/

module.exports = mongoose.model("Item", itemSchema);
