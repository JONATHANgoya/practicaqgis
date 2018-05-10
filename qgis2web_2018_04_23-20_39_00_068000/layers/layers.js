ol.proj.get("EPSG:25830").setExtent([717544.857168, 4730488.586895, 726471.832771, 4735736.453306]);
var wms_layers = [];
var lyr_eudem_huesca_epsg25830_clipper_mds_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "eudem_huesca_epsg25830_clipper_mds",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/eudem_huesca_epsg25830_clipper_mds_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [717705.656114, 4724313.583130, 736165.892798, 4744305.455172]
                            })
                        });var lyr_OrtoimagenMosaico_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "OI.MosaicElement",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen/Mosaico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtoimagenMosaico_1, 0]);

lyr_eudem_huesca_epsg25830_clipper_mds_0.setVisible(true);lyr_OrtoimagenMosaico_1.setVisible(true);
var layersList = [lyr_eudem_huesca_epsg25830_clipper_mds_0,lyr_OrtoimagenMosaico_1];
