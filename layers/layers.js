var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_point_oiseau_Koren_Ruben_1 = new ol.format.GeoJSON();
var features_point_oiseau_Koren_Ruben_1 = format_point_oiseau_Koren_Ruben_1.readFeatures(json_point_oiseau_Koren_Ruben_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_oiseau_Koren_Ruben_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_oiseau_Koren_Ruben_1.addFeatures(features_point_oiseau_Koren_Ruben_1);
var lyr_point_oiseau_Koren_Ruben_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_point_oiseau_Koren_Ruben_1, 
                style: style_point_oiseau_Koren_Ruben_1,
                interactive: true,
                title: '<img src="styles/legend/point_oiseau_Koren_Ruben_1.png" /> point_oiseau_Koren_Ruben'
            });
var format_parcours_2 = new ol.format.GeoJSON();
var features_parcours_2 = format_parcours_2.readFeatures(json_parcours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcours_2.addFeatures(features_parcours_2);
var lyr_parcours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcours_2, 
                style: style_parcours_2,
                interactive: true,
                title: '<img src="styles/legend/parcours_2.png" /> parcours'
            });
var format_points_ecoute_3 = new ol.format.GeoJSON();
var features_points_ecoute_3 = format_points_ecoute_3.readFeatures(json_points_ecoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_ecoute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_ecoute_3.addFeatures(features_points_ecoute_3);
var lyr_points_ecoute_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_ecoute_3, 
                style: style_points_ecoute_3,
                interactive: true,
                title: '<img src="styles/legend/points_ecoute_3.png" /> points_ecoute'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_point_oiseau_Koren_Ruben_1.setVisible(true);lyr_parcours_2.setVisible(true);lyr_points_ecoute_3.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_point_oiseau_Koren_Ruben_1,lyr_parcours_2,lyr_points_ecoute_3];
lyr_point_oiseau_Koren_Ruben_1.set('fieldAliases', {'nom_oiseau': 'nom_oiseau', 'nombres': 'nombres', 'point': 'point', 'Distance': 'Distance', });
lyr_parcours_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_points_ecoute_3.set('fieldAliases', {'Num_point': 'Num_point', });
lyr_point_oiseau_Koren_Ruben_1.set('fieldImages', {'nom_oiseau': 'TextEdit', 'nombres': '', 'point': '', 'Distance': '', });
lyr_parcours_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_points_ecoute_3.set('fieldImages', {'Num_point': 'TextEdit', });
lyr_point_oiseau_Koren_Ruben_1.set('fieldLabels', {'nom_oiseau': 'no label', 'nombres': 'no label', 'point': 'no label', 'Distance': 'no label', });
lyr_parcours_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_points_ecoute_3.set('fieldLabels', {'Num_point': 'inline label', });
lyr_points_ecoute_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});