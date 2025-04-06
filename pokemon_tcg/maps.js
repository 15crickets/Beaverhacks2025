const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://laol2006:drinkM0reWater%25@surgingsparks.cqtwveb.mongodb.net/test_database?retryWrites=true&w=majority&appName=SurgingSparks";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const typemap = [
    {type : "Amazing Rare", perpack: ""},
    {type : "Common", perpack: "5"},
    {type : "Legend", perpack: ""},
    {type : "Promo", perpack: ""},
    {type : "Rare", perpack: ""},
    {type : "Rare ACE", perpack: ""},
    {type : "Rare BREAK", perpack: ""},
    {type : "Rare Holo", perpack: ""},
    {type : "Rare Holo EX", perpack: ""},
    {type : "Rare Holo GX", perpack: ""},
    {type : "Rare Holo LV.X", perpack: ""},
    {type : "Rare Holo STAR", perpack: ""},
    {type : "Rare Holo V", perpack: ""},
    {type : "Rare Holo VMAX", perpack: ""},
    {type : "Rare Prime", perpack: ""},
    {type : "Rare Prism Star", perpack: ""},
    {type : "Rare Rainbow", perpack: ""},
    {type : "Rare Secret", perpack: ""},
    {type : "Rare Shining", perpack: ""},
    {type : "Rare Shiny", perpack: ""},
    {type : "Rare Shiny GX", perpack: ""},
    {type : "Rare Ultra", perpack: ""},
    {type : "Uncommon", perpack: "4"}
  ];