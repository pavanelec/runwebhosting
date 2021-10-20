const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olmpic",{
   // useCreateIndex:true,
    useNewUrlParser:true,
    //useUnifieldTopology:true
}).then(() => {
    console.log("connection on live");
}).catch((e) => {
    //console.log(e);
    console.log("connection not live");
    console.log(e);
})