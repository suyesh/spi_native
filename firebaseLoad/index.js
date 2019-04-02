var fs = require("fs");
var admin = require("firebase-admin");

var serviceAccount = require("./nycmaps-20a10-firebase-adminsdk-s5sgk-37d7f90d6f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nycmaps-20a10.firebaseio.com"
});
const subwayLinesRef = admin.firestore().collection("nycSubwayLines");

const subwayLines = JSON.parse(
  fs.readFileSync("./subwayLines.geojson", "utf8")
);

const subwayEntrances = JSON.parse(
  fs.readFileSync("./subwayEntrances.geojson", "utf8")
);

const subwayStations = JSON.parse(
  fs.readFileSync("./subwayStations.geojson", "utf8")
);

subwayLines &&
  subwayLines.features.forEach(line => {
    console.log(line.geometry.coordinates);
    admin
      .firestore()
      .collection("nycSubwayLines")
      .doc(line.properties.objectid)
      .set(
        {
          name: line.properties.name,
          symbol: line.properties.rt_symbol,
          id: line.properties.id,
          shape_length: line.properties.shape_len,
          geometry: line.geometry.coordinates.map(
            coord => new admin.firestore.GeoPoint(coord[1], coord[0])
          ),
          objectid: line.properties.objectid
        },
        { merge: true }
      );
  });

subwayEntrances &&
  subwayEntrances.features.forEach(entrance => {
    console.log(entrance);
    admin
      .firestore()
      .collection("nycSubwayEntrances")
      .doc(entrance.properties.objectid)
      .set(
        {
          name: entrance.properties.name,
          line: entrance.properties.line,
          objectid: entrance.properties.objectid,
          geometry: new admin.firestore.GeoPoint(
            entrance.geometry.coordinates[1],
            entrance.geometry.coordinates[0]
          )
        },
        { merge: true }
      );
  });

subwayStations &&
  subwayStations.features.forEach(station => {
    console.log(station);
    admin
      .firestore()
      .collection("nycSubwayStations")
      .doc(station.properties.objectid)
      .set(
        {
          name: station.properties.name,
          line: station.properties.line,
          objectid: station.properties.objectid,
          notes: station.properties.notes,
          geometry: new admin.firestore.GeoPoint(
            station.geometry.coordinates[1],
            station.geometry.coordinates[0]
          )
        },
        { merge: true }
      );
  });

let lines = [];
subwayLinesRef.get().then(snapShot => {
  snapShot.forEach(doc => {
    lines = [
      ...lines,
      doc.data().geometry.map(geom => [geom.longitude, geom.latitude])
    ];
  });
  console.log(lines.length);
});
