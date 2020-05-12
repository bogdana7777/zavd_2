import mongoose from 'mongoose';
import Name from "../name/model.js";

const videoSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    name: [{
        type: mongoose.Types.ObjectId,
        model: Name,
        ref:"Name"
    }]


});

const Video = mongoose.model("Video", videoSchema);

export default Video;