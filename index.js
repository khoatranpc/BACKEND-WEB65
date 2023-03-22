import express from "express";
import router from "./routers/index.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Kết nối thành công!'
    })
})

app.use(router)

app.listen(8000, (err) => {
    try {
        if (err) throw new Error('Server lỗi rồi!');
        console.log('Server hoạt động!');
    } catch (error) {
        console.log(error.message);
    }
})