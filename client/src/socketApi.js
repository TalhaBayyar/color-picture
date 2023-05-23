import io from "socket.io-client"

let socket;

export const init = () => {
    console.log("Sunucuya Bağlanıldı");
    socket = io("http://localhost:5173", {
        transports: ["websocket"]
    })

    socket.on("connect", () => 
        console.log("Sunucuya Bağlandı")
    )
}


export const send = (color) => {
    socket.emit("newColor", color)
}


export const subscribe = (cb) => {
    socket.on("receive", (color) => {
        console.log(color)
        cb(color)
    })
}