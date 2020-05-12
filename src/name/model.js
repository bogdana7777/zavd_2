import mongoose from "mongoose"

const nameSchema = new mongoose.Schema({
    Id:{
        type:Number,
        min:1,
        max:100
    },
    Name:{
        type: String,
        required:true
    },
    Author:String,
    Coment:String,
    Date:{
        type:Date
    },
    List_teg:String,
    Sec:{
        type:Number,
        min:0,
        max:1000000000
    }
});

const Name = mongoose.model("Name", nameSchema);

export default Name;