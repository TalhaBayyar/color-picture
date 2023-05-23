const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors())

app.get("/", (req, res) => {
    res.send("hello");
})

let lastColor = "#282c34";

io.on("connection", (socket) => {
    console.log("Bir Kullanıcı Bağlandı");

    // Bağlantı kurulan istemciye son renk değerini gönderme
    socket.emit("receive", lastColor)

    // "newColor" olayını dinleme
    socket.on("newColor", (color) => {
        console.log(color);

        // Son renk değerini güncelleme
        lastColor = color;

        // Tüm istemcilere yeni renk değerini yayınlama
        io.emit("receive", color);
    })

    socket.on("disconnect", () => {
        console.log("Bir Kullanıcı Ayrıldı")
    })
   

})

http.listen(5173, () => console.log("Server is up 🚀🚀"))