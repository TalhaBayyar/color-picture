import './App.css'
import Picker from './components/Picker'
import { subscribe, init } from './socketApi'
import { useEffect, useState } from 'react'

function App() {
  const [activeColor, setActiveColor] = useState("#282c34")
  useEffect(()=>{
    init();
    subscribe((color) => {
      setActiveColor(color)
    })
  },[])

  return (
    <div className='bg-sky-500' style={{backgroundColor: activeColor}}>
      <Picker activeColor={activeColor}/>
      <div>
        talha bayyar
      </div>
    </div>
  )
}

export default App

{/* 
  Bu bölümde Real Time olarak çalışan Back-End üzerinde nasıl çalışabileceğimizi öğreneceğiz. Örnek uygulama ile ekran
    ortasında bir tane buton olacak ve bir de renk seçimi yapabileceğimiz color picture olacak, buradan bir renk seçilip
    butona basıldığı anda web sayfasında olan bütün kullanıcılara anlık olarak sayfa yenileme işlemi olmadan
    gerçek zamanlı olarak o renk gösterilecektir. React üzerinde Real Time çalışan Back-End ile nasıl çalışabilirizi
    öğrenmek için faydalı ve temel bir uygulama olacaktır. 

  Real Time çalışan uygulamalar, gerçek zamanlı olarak veri akışı ve kullanıcı etkileşimi ile çalışan uygulamalardır.
    Bu tür uygulamalar, kullanıcıların hızlı ve etkileşimli bir deneyim yaşamasını sağlayan dinamik bir yapıya sahiptir.
    
  Bir diğer örnek ise, bir çevirim içi sohbet uygulaması, gerçek zamanlı sohbet mesajlarını göndermek ve almak için kullanılabilir. 
    Benzer şekilde, bir etkileşimli harita uygulaması, kullanıcının haritayı hızlı bir şekilde pan ve zoom yaparak
      incelemesine olanak tanır.

  Websockets -> Websockets, gerçek zamanlı iletişim kurmak için kullanılan bir ağ protokolüdür. Bu protokol, tarayıcı
    ile sunucu arasında tam dublex iletişim sağlar. Yani, hem tarayıcıdan sunucuya hem de sunucudan tarayıcıya
    veri gönderebilir. İstemci ve sunucu, anlık veri güncellemeleri, anlık mesajlaşma veya gerçek zamanlı uygulamalar 
    gibi senaryolarda Websockets'i tercih edebilir.
    
  Websockets, HTTP (Hypertext Transfer Protocol) protokolünün üzerine inşa edilir ve bağlantı sağlamak için standart 
    HTTP bağlantı notları kullanılır. Ancak, Websockets bağlantıları, tek bir TCP (Transmission Control Protocol) 
    bağlantısı üzerinden gerçekleştirilir ve bu sayede gereksiz ağ trafiğini ve bağlantı kurma gecikmelerini azaltır. 
    
  Websockets, gerçek zamanlı etkileşim gerektiren uygulamalar için idealdir. Örneğin, bir sohbet uygulaması veya bir oyun
    Websockets kullanarak gerçek zamanlı iletişim sağlayabilir. Websockets ayrıca, anlık güncelleme gerektiren uygulamalar
    için de kullanılabilir. Örneğin, bir borsa uygulaması, Websockets kullanılarak anlık fiyat güncellemelerini gösterir.
    
  Websockets, tarayıcıda Javascript kullanılarak uygulanabilir ve Node.js gibi sunucu tarafı teknolojileri ile birlikte
    kullanılabilir. Websockets API'si, (Application Programming Interface) (Programlama Arabirimi) Javascript tarafından 
    kullanılmak üzere tasarlanmıştır ve tarayıcı tarafından desteklenir. 
    
  Sonuç olarak, WebSockets gerçek zamanlı iletişim için kullanılan bir ağ protokolüdür ve bağlantı kurmak için standart
    HTTP bağlantı noktalarını kullanır. WebSockets, tarayıcı ve sunucu arasında tam dublex iletişim sağlar ve gerçek
    zamanlı etkileşim gerektiren uygulamalar için idealdir.  


*/}