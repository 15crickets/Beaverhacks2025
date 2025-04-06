const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://laol2006:drinkM0reWater%25@surgingsparks.cqtwveb.mongodb.net/test_database?retryWrites=true&w=majority&appName=SurgingSparks";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const typemapold = [
    {type : "Amazing Rare", perpack: "0"},
    {type : "Common", perpack: "6"},
    {type : "Legend", perpack: "0"},
    {type : "Promo", perpack: "0"},
    {type : "Rare", perpack: "0.6666"},
    {type : "Rare ACE", perpack: "0"},
    {type : "Rare BREAK", perpack: "0"},
    {type : "Rare Holo", perpack: "0.3333"},
    {type : "Rare Holo EX", perpack: "0"},
    {type : "Rare Holo GX", perpack: "0"},
    {type : "Rare Holo LV.X", perpack: "0"},
    {type : "Rare Holo STAR", perpack: "0"},
    {type : "Rare Holo V", perpack: "0"},
    {type : "Rare Holo VMAX", perpack: "0"},
    {type : "Rare Prime", perpack: "0"},
    {type : "Rare Prism Star", perpack: "0"},
    {type : "Rare Rainbow", perpack: "0"},
    {type : "Rare Secret", perpack: "0"},
    {type : "Rare Shining", perpack: "0"},
    {type : "Rare Shiny", perpack: "0"},
    {type : "Rare Shiny GX", perpack: "0"},
    {type : "Rare Ultra", perpack: "0"},
    {type : "Uncommon", perpack: "3"}
  ];