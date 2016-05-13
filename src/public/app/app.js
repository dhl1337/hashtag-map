/**
 * Created by danle on 5/9/16.
 */
require([
    "dojo/dom",
    "dojo/on",
    "dojo/request",
    "dojo/parser",
    "dijit/registry",
    "esri/widgets/Locate",
    "esri/Map",
    "esri/views/MapView",
    "dojo/domReady!"
], function(dom, on, request, parser, registry, Locate, Map, MapView) {
    parser.parse();
    var zipCode = registry.byId("zipCode"),
        searchBtn = dom.byId("findBtn");

    var map = new Map({
        basemap: "streets"
    });

    var view = new MapView({
        container: "viewDiv",  // Reference to the scene div created in step 5
        map: map,  // Reference to the map object created before the scene
        zoom: 5,  // Sets the zoom level based on level of detail (LOD)
        center: [-90.049, 37.485]  // Sets the center point of view in lon/lat
    });


    var locateBtn = new Locate({
        view: view
    });
    locateBtn.startup();

    view.ui.add(locateBtn, {
        position: "top-left",
        index: 0
    });

    var data;
    on(searchBtn, "click", function() {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip='+zipCode.value+',us&APPID=badf30671f9afee48fb9ede7d50f7e01', {
            headers: {
                "X-Requested-With": null
            }
        }).then(function(response){
            data = response;
            console.log(data);
        });
        view = new MapView({
            container: "viewDiv",  // Reference to the scene div created in step 5
            map: map,  // Reference to the map object created before the scene
            zoom: 14,  // Sets the zoom level based on level of detail (LOD)
            center: [data.coord.lon, data.coord.lat]  // Sets the center point of view in lon/lat
        });
    });


});