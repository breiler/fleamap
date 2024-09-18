import { Feature } from "ol";
import { LineString } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Stroke, Style } from "ol/style";

const andgatanCoords = [
   [1834799.6359179495, 7688303.12479069],
   [1834799.038753666, 7688203.9955196325],
   [1834794.8586036817, 7688160.999691222],
   [1834786.498303713, 7688106.657741426],
   [1834771.569196626, 7688049.329970212],
   [1834741.7109824507, 7687959.75532769],
   [1834723.1988896623, 7687919.148156406],
   [1834705.2839611582, 7687883.318299403],
   [1834646.7618613772, 7687801.5067925695],
   [1834635.3733008327, 7687795.492710579],
   [1834431.3732868675, 7687841.076101246],
   [1834415.3142808853, 7687849.395241823],
   [1834399.5358480173, 7687865.403370893],
   [1834564.950354542, 7687990.807870428],
   [1834591.2255830152, 7688020.068920321],
   [1834622.2781257543, 7688069.633555848],
   [1834642.581711393, 7688144.876255567],
   [1834649.775420411, 7688159.80620406],
   [1834667.4450352257, 7688166.366180818],
   [1834794.9268536768, 7688160.988108158],
 ];
 
 const tradgardsgatanCoords = [
   [1834849.6319105101, 7688042.237579816],
   [1834770.9777785249, 7688049.517392042],
   [1834621.24939665, 7688069.435590018],
   [1834544.0794228564, 7688082.685346465],
   [1834530.4972055468, 7688092.739994327],
   [1834527.5233414797, 7688114.82982224],
   [1834552.0855723056, 7688210.910507693],
   [1834561.0707959065, 7688310.922006121],
 ];
 
 const grongatanCoords = [
   [1834561.1743462512, 7688311.032016575],
   [1834715.5556088062, 7688307.365044536],
   [1834799.9363334698, 7688304.20956349],
   [1834849.439022837, 7688303.964686213],
   [1834871.6984921028, 7688306.583430991],
   [1834888.133524748, 7688312.181338213],
   [1834904.2346719503, 7688322.964523063],
   [1834913.9594444653, 7688338.258326305],
 ];
 
 const trastgatanCoords = [
   [1834916.8557174967, 7688338.473803116],
   [1835006.549565014, 7688303.184420486],
   [1835044.7797295295, 7688293.626879357],
   [1835147.707095533, 7688289.215706528],
   [1835232.9840932216, 7688289.077418856],
   [1835295.138819844, 7688292.229497194],
   [1835423.4764411447, 7688307.47394469],
 ];


const streetStyle = new Style({
   stroke: new Stroke({
     color: "#f59b42B0",
     width: 10,
   }),
 });
 
 const streetAndgatanFeature = new Feature();
 streetAndgatanFeature.setGeometry(new LineString(andgatanCoords));
 streetAndgatanFeature.setStyle(streetStyle);
 
 const streetTradgardsgatanFeature = new Feature();
 streetTradgardsgatanFeature.setGeometry(new LineString(tradgardsgatanCoords));
 streetTradgardsgatanFeature.setStyle(streetStyle);
 
 const streetGrongatanFeature = new Feature();
 streetGrongatanFeature.setGeometry(new LineString(grongatanCoords));
 streetGrongatanFeature.setStyle(streetStyle);
 
 const streetTrastgatanFeature = new Feature();
 streetTrastgatanFeature.setGeometry(new LineString(trastgatanCoords));
 streetTrastgatanFeature.setStyle(streetStyle);

 export const streetsLayer = new VectorLayer({
   source: new VectorSource({
     features: [
       streetAndgatanFeature,
       streetTradgardsgatanFeature,
       streetGrongatanFeature,
       streetTrastgatanFeature
     ],
   }),
 });
 
