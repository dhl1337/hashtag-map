/**
 * Created by danle on 5/9/16.
 */
require([
    "dojo/dom",
    "dojo/on",
    "dojo/parser",
    "dijit/registry",
    "esri/Map",
    "esri/views/MapView",
    "dojo/domReady!"
], function(dom, on, parser, registry, Map, MapView) {
    var map = new Map({
        basemap: "streets"
    });

    var view = new MapView({
        container: "viewDiv",  // Reference to the scene div created in step 5
        map: map,  // Reference to the map object created before the scene
        zoom: 5,  // Sets the zoom level based on level of detail (LOD)
        center: [-90.049, 37.485]  // Sets the center point of view in lon/lat
    });

    parser.parse();

    var hashtag = registry.byId("hashtag");
    var searchBtn = dom.byId("findBtn");

    on(searchBtn, "click", function() {
        console.log(hashtag.value);
    });
});