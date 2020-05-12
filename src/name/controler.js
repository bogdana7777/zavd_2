import Name from "./model.js";

const nameControler = {
    //перший спосіб на колбеках
    get1: (req, res) => {
        Name.find((err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            }
            else {
                res.send(result);
            }
        });
    },
    //другий спосіб на промісах
    get2: (req, res) => {
        Name.find().then(
            result => res.send(result)
        ).catch(
            err => {
                console.log(err);
                res.status(500).send(err);
            }
        )
    },
    //третій спосіб на асинхронних функціях
    get3: async (req, res) => {
        try {
            let namesList = await Name.find();
            res.send(namesList);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },

    //ініціалізація авторів 
    init: async (req, res) => {
        let n = await Name.find().count();
        console.log(n);
        if (n == 0) {
            let name1 = new Name({
                Id:"1",
                Name: "Film",
                Author:"Belov",
                Coment:"Perfect",
                Date:"20.02.2020",
                List_teg:"Absent",
                Sec:"3000000"
            });
            await name1.save();
            let name2 = new Name({
                Id:"2",
                Name: "Film",
                Author:"Popov",
                Coment:"Good",
                Date:"15.02.2010",
                List_teg:"Absent",
                Sec:"3030000"
            });
            await name2.save();
        }
        res.send("intialised");
    }

    //тут треба методи patch, post, delete
};

export default nameControler;