var m=Object.defineProperty;var s=(r,i,e)=>i in r?m(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var n=(r,i,e)=>(s(r,typeof i!="symbol"?i+"":i,e),e);import"./journeysStore.743ba1fc.js";class a{constructor(i){n(this,"name");n(this,"thumbnail");n(this,"days");n(this,"duration","Daytrip");n(this,"midrange",[]);n(this,"luxury",[]);this.name=i.name,this.days=i.days,this.thumbnail=i.thumbnail,this.duration=i.days===1?"Daytrip":`${i.days} Days`,this.midrange=i.midrange,this.luxury=i.luxury}}const y={zanzibar:new a({name:"Zanzibar Beach",days:3,thumbnail:"/images/zanzibar/2.webp",midrange:[],luxury:[]}),"marangu-route":new a({name:"Kilimanjaro Marangu Route",days:5,thumbnail:"/images/kilimanjaro/2.webp",midrange:[],luxury:[]}),"machame-route":new a({name:"Kilimanjaro Machame Route",days:6,thumbnail:"/images/kilimanjaro/5.webp",midrange:[],luxury:[]}),"lemosho-route":new a({name:"Kilimanjaro Lemosho Route",days:7,thumbnail:"/images/kilimanjaro/11.webp",midrange:[],luxury:[]}),"momella-route":new a({name:"Mt Meru Momella Route",days:7,thumbnail:"/images/kilimanjaro/11.webp",midrange:[],luxury:[]}),"ngorongoro-crater-day-trip":new a({thumbnail:"/images/safari/64.webp",name:"Ngorongoro Crater Day Trip",days:1,midrange:[410,0],luxury:[0,0]}),"tarangire-national-park-day-trip":new a({thumbnail:"/images/safari/21.webp",name:"Tarangire National Park Day Trip",days:1,midrange:[410,0],luxury:[0,0]}),"6-days-tanzania-safari-calving-season":new a({thumbnail:"/images/safari/1.webp",name:"Tanzania Safari Calving Season",days:6,midrange:[420,785],luxury:[920,1284]}),"6-days-western-corridor-migration":new a({thumbnail:"/images/safari/5.webp",name:"Western Corridor Migration",days:6,midrange:[420,785],luxury:[920,1284]}),"7-days-camping-safari":new a({thumbnail:"/images/safari/44.webp",name:"Camping Safari",days:7,midrange:[228,517],luxury:[0,0]}),"7-days-north-migration-safari":new a({thumbnail:"/images/safari/15.webp",name:"North Migration Safari",days:7,midrange:[419,790],luxury:[782,1154]}),"7-days-tanzania-safari":new a({thumbnail:"/images/safari/11.webp",name:"Tanzania Safari",days:7,midrange:[414,776],luxury:[943,1314]}),"8-days-family-safari":new a({thumbnail:"/images/safari/25.webp",name:"Family Safari",days:8,midrange:[0,0],luxury:[1050,1317]}),"8-days-north-migration-safari":new a({thumbnail:"/images/safari/63.webp",name:"North Migration Safari",days:8,midrange:[631,992],luxury:[1050,1317]}),"9-days-family-tanzania-safari-&-beach":new a({thumbnail:"/images/safari/27.webp",name:"Family Tanzania Safari & Beach",days:9,midrange:[403,646],luxury:[0,0]}),"9-days-honeymoon-safari-&-beach":new a({thumbnail:"/images/safari/65.webp",name:"Honeymoon Safari & Beach",days:9,midrange:[451,451],luxury:[0,0]}),"12-days-honeymoon-safari-&-beach":new a({thumbnail:"/images/safari/66.webp",name:"Honeymoon Safari & Beach",days:12,midrange:[0,0],luxury:[1029,1029]}),"lake-manyara-national-park-day-trip":new a({thumbnail:"/images/safari/6.webp",name:"Lake Manyara National Park Day Trip",days:1,midrange:[410,0],luxury:[0,0]})};export{y as j};