import Video from "./model"
import mongoose from "mongoose"
import Name from "../name/model";


const videoControler = {
    //отримати всі
    get: function (request, response) {
        Video.find().populate("name")
        .then(videos=>{
                response.send(videos);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //get
    //отримати однe з вказаним ІД
    get_id: function (request, response) {
        Video.findById(request.params.id)
        .then(video=>{
            if (video)
                response.send(video);
            else
                response.status(404).send("Не знайдено");  
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //getById
    //додати новe
    post: function (request, response) {  
        console.log("video")    
        const newVideo = new Video(request.body);
        newVideo.save()
        .then(video=>{
            response.send(video);    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//post
    //вилучити із вказаним ІД
    delete_id: function (request, response) {
        Video.findByIdAndDelete(request.params.id).
        then(video=>{
            if (video)
                response.send(video);
            else
                response.status(404).send("Не знайдено");    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//deleteById
    init: async (req,res) =>{
        console.log("init");
        let belov= await Name.findOne({Author:"Belov"});
        console.log(belov);
        let v1 = new Video({
            title: "film",
            author: belov._id
        });
        await v1.save();
        res.send(v1);
    },
    //функція оновлення
    async patch(req, res) {
        try {
            const video = await Video.findByIdAndUpdate(req.params.id, req.body,  {new: true});
            if (!video)
                res.status(404).send("Not found");
            await video.save();
            res.send(video);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    
}


export default videoControler;