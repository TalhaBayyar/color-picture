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


/*
  İstemci tarafında Socket.IO istemci bağlantısı için kullanılan bir Javascript modülü olan 'socket.io-client'ı içeriyor.
    Bu modül, sunucuyla gerçek zamanlı iletişim kurmayı sağlar. Şimdi, verilen kod parçasını adım adım açıklayalım:
    
  1- 'io' adında bir değişken oluşturduk ve 'socket.io-client' modülünü 'import' komutuyla içe aktardık.

  2- Ardından, 'socket' adında bir değişken tanımladık ve 'init' fonksiyonu aracılığıyla sunucuya bağlantı sağladık.
    'io("http://localhost:3001")' komutu, sunucuyla bir Websocket bağlantısı oluşturmak için 'socket.io-client'ı kullanır.
    Sunucu adresini ('http://localhost:3001') ve 'transports' seçeneğini belirtir. Burada, yalnızca Websocket'ı kullanacağımızı
    belirtiyoruz. 
    'socket.on("connect", () => ...)' kod bloğu, sunucuya başarılı bir şekilde bağlandığımızda çalışacak bir olay dinleyicisidir.
    Bu blok, bağlantı başarılı olduğunda bir mesajı konsola basar. 

  3- 'send' fonksiyonu, sunucuya bir renk göndermek için kullanılır. 
    'socket.emit("newColor", color)' komutu, sunucuya "newColor" adlı bir olay ve renk verisini gönderir. Bu kodu, sunucuya
    seçilen bir renk göndermek için çağırabiliriz. 
    
  4- 'subscribe' fonksiyonu, sunucudan renk verilerini almak için kullanılır. 
    'socket.io("receive", (color) => ...)' kod bloğu, sunucudan 'receive' adlı bir olayı dinler ve gelen renk verisini alır.
    Alınan renk verisini konsola basar ve bir geriçağırmaya ('cb') ileterek işleyebiliriz.Örneğin, bu geri çağırmayı 
    kullanarak renk değişikliklerini kullanıcı arayüzünde güncelleyebilirsiniz. 


*/
