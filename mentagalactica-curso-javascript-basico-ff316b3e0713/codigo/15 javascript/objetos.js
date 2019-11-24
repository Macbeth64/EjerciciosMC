var objeto ={

nombre: "Html",
duracion: 15,
estado: true,
capitulos:{
    nombre:"introduccion",
    videos: 20
}
}
console.log (objeto.capitulos.nombre)

var data = [
    { "name": "Nov.2017", "values": ["122.24929131959"] },
    { "name": "Dic.2017", "values": ["122.678223072717"] },
    { "name": "Ene.2018", "values": ["122.660863216801"] },
    { "name": "Feb.2018", "values": ["123.094735792622"] },
    { "name": "Mar.2018", "values": ["124.074279098189"] },
    { "name": "Abr.2018", "values": ["124.106210561863"] },
    { "name": "May.2018", "values": ["124.110950696298"] },
    { "name": "Jun.2018", "values": ["124.457010420352"] },
    { "name": "Jul.2018", "values": ["124.821481844788"] },
    { "name": "Ago.2018", "values": ["124.952886180169"] },
    { "name": "Sep.2018", "values": ["125.015996848165"] },
    { "name": "Oct.2018", "values": ["125.136580580838"] },
    { "name": "Nov.2018", "values": ["125.209506480558"] },
    { "name": "Dic.2018", "values": ["125.569705882353"] },
    { "name": "Ene.2019", "values": ["125.764174733863"] },
    { "name": "Feb.2019", "values": ["125.987324638986"] },
    { "name": "Mar.2019", "values": ["127.150411989837"] },
    { "name": "Abr.2019", "values": ["127.280597562152"] },
    { "name": "May.2019", "values": ["127.480400572476"] },
    { "name": "Jun.2019", "values": ["127.505613964558"] },
    { "name": "Jul.2019", "values": ["127.685153249928"] },
    { "name": "Ago.2019", "values": ["127.718242369665"] },
    { "name": "Sep.2019", "values": ["127.684626764867"] },
    { "name": "Oct.2019", "values": ["128.116346283729"] }
]

for (let indice of data){
console.log(data[0].values)
}