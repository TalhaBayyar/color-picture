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

/*                                                                                              Bismillahirrahmanirrahim                    
  Socket.IO, gerçek zamanlı web uygulamaları geliştirmek için kullanılan bir Javascript kütüphanesidir. İstemci ve sunucu 
    arasında çift yönlü, sürekli ve gerçek zamanlı iletişim sağlar. Socket.IO Websocket protokolünü temel alarak, sunucu
    ve istemci arasında gerçek zamanlı veri akışını kolaylaştırırken, otomatik olarak geriye dönük uyumluluk sağlamak 
    amacıyla çeşitli alternatif iletişim mekanizmaları sunar. 

  Socket.IO istemci tarafında Javascript ve sunucu tarafında da node.js ile kullanılabilir. Websocket bağlantısının
    kurulmasını ve yönetilmesini sağlamak için Websocket'ı tercih eder, ancak Websocket kullanılmıyorsa, otomatik olarak
    daha esnek bir geriye dönük uyumluluk sağlayan alternatif teknolojileri kullanılır. Bu, Socket.IO'nun daha eski
    tarayıcılarla bile çalışabilmesini sağlar    
    
  Socket.IO, birçok farklı uygulama seneryosunda kullanılabilir. Örneğin, anlık sohbet uygulamaları, canlı analiz panelleri
    oyunlar ve her türlü gerçek zamanlı uygulama için uygun bir seçenektir. Websocket bağlantılarını yönetme, olaylar
    arasında veri paylaşma ve gerçek zamanlı etkileşim sağlama gibi işlevleri kolayca gerçekleştirmek için kullanılabilir.
    
  Socket.IO'nun basit bir istemci ve sunucu API'si vardır. İstemci tarafında socket.IO, sunucu tarafına mesaj gönderme
    ve sunucudan mesaj alma gibi işlevleri sağlar. Sunucu tarafında ise Socket.IO, gelen bağlantıları kabul etme, 
    bağlantıları yönetme ve istemcilerle iletişim kurma gibi işlevleri sağlar. 
    
  Kısacası, Socket.IO, gerçek zamanlı iletişimi kolaylaştıran ve web uygulamaları için esnek bir çözüm sunan bir 
    JavaScript kütüphanesidir.  

  Yukaridaki kod bloklarını maddeler olarak sırasıyla açıklayalım
  
  1- İlk olarak, gerekli modülleri (Express, Socket.IO, cors) ve HTTP sunucusunu oluşturmak için "http" nesnesini
       içe aktarıyoruz.
       - İlk olarak, 'express' modülünü 'require' komutuyla içe aktarıyoruz ve 'app' adında bir express uygulaması oluşturuyoruz.
       - Ardından, 'http' modülünü 'require' komutuyla içe aktarıyoruz ve 'http.createServer(app)' kullanarak Express uygulamamızı
         bir HTTP sunucusuna dönüştüyoruz.
       - Şimdi, 'socket.io' modülünü 'require' komutuyla içe aktarıyoruz ve 'http' sunucusunu kullanarak bir Socket.IO sunucusu
         oluşturuyoruz.
       - Son olarak, 'cors' modülünü 'require' komutuyla içe aktarıyoruz. CORS politikasını etkinleştirmek için 'app.use(cors())'
         komutunu kullanacağız.
       Bu kod parçasında, Express.js ve Socket.IO'yu kullanarak bir sunucu oluşturuyoruz. Express uygulamasını 'app' olarak
         oluşturuyoruz, HTTP sunucusunu 'http' olarak oluşturuyoruz ve Socket.IO sunucusunu 'io' olarak oluşturuyoruz.  
       Bu yapı, Socket.IO'nun HTTP sunucusunu kullanarak gerçek zamanlı iletişim sağlamasını sağlar. Ayrıca 'cors' modülünü
         kullanarak CORS politikasını etkinleştiriyoruz, böylece farklı etki alanlarından gelen isteklere izin verilir.  
         
       
       
  2- Sonra, Cross-Origin Resource Sharing (Kaynaklar Arası Kaynak Paylaşımı) (CORS) politikasını etkinleştirmek için 
      'app.use(cors())' kodunu kullanıyoruz
       Bu, farklı etki alanlarından gelen isteklere izin verir. 
       
  3- Bir GET isteği alındığında 'hello' yanıtını döndüren basit bir rotayı tanımlıyoruz. 
  
  4- Ardından, bir değişken olan 'lastColor'ı tanımlıyoruz ve başlangıçta "#282c34" olarak ayarlıyoruz. Bu, son alınan
        renk değerini takip etmek için kullanılacak. 

  5- Socket.IO ile bir bağlantı kurulduğunda çalışacak olay dinleyicilerini tanımlıyoruz. 
  
  * 'connection' olayı, bir istemci bağladığında tetiklenir ve bir mesajı konsola yazdırır. 
  * 'emit' yöntemi, belirli bir istemciye bir olay ve veri göndermek için kullanılır. Burada, bağlantı kurulan istemciye
      son renk değerini ('receive' olayıyla) gönderiyoruz.
  * 'on' yöntemi, belirli bir olayı dinlemek için kullanılır. Burada, 'newColor' olayını dinleyip gelen renk değerini
       alıyoruz. Son renk değerini güncelleyerek ('lastColor = color') tüm istemcilere yeni renk değerini 
       ('receive' olayıyla) yayınlıyoruz.
  * 'disconnect' olayı, bir istemci bağlantısı kesildiğinde tetiklenir ve bir mesajı konsola yazdırır. 
       
  6- Son olarak, sunucuyu belirli bir port üzerinden dinlemeye başlatıyoruz:
  
  Bu kod, sunucuyu 3001 numaralı port üzerinden dinlemeye başlatır. Konsola "Server is up" mesajını yazdırarak 
    sunucunun başarılı bir şekilde çalıştığını bildirir.

  Bir istemci bağlandığında, 'connection' olayı tetiklenir ve bağlantı kurulan istemciye 'receive' olayıyla 'lastColor' 
    değeri gönderilir. Ardından, 'newColor' olayı dinlenir ve gelen renk değeri 'lastColor' olarak güncellenir. 
    Bu yeni renk değeri tüm istemcilere 'receive' olayıyla yayınlanır.    

  Sonuç olarak, bu kod parçası, Socket.IO kullanarak gerçek zamanlı iletişimi sağlayan bir sunucu oluşturur. İstemciler, 
    newColor olayını tetikleyerek yeni bir renk gönderebilir ve sunucu, bu renk değerini tüm istemcilere ileterek 
    gerçek zamanlı güncelleme sağlar.  
  


*/