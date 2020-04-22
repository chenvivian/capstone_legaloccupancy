var wms_layers = [];

var format_BusinessCountSurveyResponses_0 = new ol.format.GeoJSON();
var features_BusinessCountSurveyResponses_0 = format_BusinessCountSurveyResponses_0.readFeatures(json_BusinessCountSurveyResponses_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusinessCountSurveyResponses_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusinessCountSurveyResponses_0.addFeatures(features_BusinessCountSurveyResponses_0);
var lyr_BusinessCountSurveyResponses_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BusinessCountSurveyResponses_0, 
                style: style_BusinessCountSurveyResponses_0,
                interactive: true,
    title: 'Business Count - Survey Responses<br />\
    <img src="styles/legend/BusinessCountSurveyResponses_0_0.png" /> 0 - 1<br />\
    <img src="styles/legend/BusinessCountSurveyResponses_0_1.png" /> 1 - 5<br />\
    <img src="styles/legend/BusinessCountSurveyResponses_0_2.png" /> 5 - 12<br />\
    <img src="styles/legend/BusinessCountSurveyResponses_0_3.png" /> 12 - 21<br />\
    <img src="styles/legend/BusinessCountSurveyResponses_0_4.png" /> 21 - 39<br />'
        });
var format_NormalizedCultureValue_1 = new ol.format.GeoJSON();
var features_NormalizedCultureValue_1 = format_NormalizedCultureValue_1.readFeatures(json_NormalizedCultureValue_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormalizedCultureValue_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NormalizedCultureValue_1.addFeatures(features_NormalizedCultureValue_1);
var lyr_NormalizedCultureValue_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormalizedCultureValue_1, 
                style: style_NormalizedCultureValue_1,
                interactive: true,
    title: 'Normalized Culture Value<br />\
    <img src="styles/legend/NormalizedCultureValue_1_0.png" /> 0 - 58<br />\
    <img src="styles/legend/NormalizedCultureValue_1_1.png" /> 58 - 145<br />\
    <img src="styles/legend/NormalizedCultureValue_1_2.png" /> 145 - 259<br />\
    <img src="styles/legend/NormalizedCultureValue_1_3.png" /> 259 - 424<br />\
    <img src="styles/legend/NormalizedCultureValue_1_4.png" /> 424 - 601<br />'
        });
var format_ZipCodes_2 = new ol.format.GeoJSON();
var features_ZipCodes_2 = format_ZipCodes_2.readFeatures(json_ZipCodes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipCodes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZipCodes_2.addFeatures(features_ZipCodes_2);
var lyr_ZipCodes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZipCodes_2, 
                style: style_ZipCodes_2,
                interactive: true,
                title: '<img src="styles/legend/ZipCodes_2.png" /> Zip Codes'
            });

lyr_BusinessCountSurveyResponses_0.setVisible(false);lyr_NormalizedCultureValue_1.setVisible(true);lyr_ZipCodes_2.setVisible(true);
var layersList = [lyr_BusinessCountSurveyResponses_0,lyr_NormalizedCultureValue_1,lyr_ZipCodes_2];
lyr_BusinessCountSurveyResponses_0.set('fieldAliases', {'ZIPCODE': 'Zip Code', 'PO_NAME': 'PO_NAME', 'POPULATION': 'POPULATION', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'ST_FIPS': 'ST_FIPS', 'zipcode1': 'zipcode1', 'ZIPCODE_1': 'ZIPCODE_1', 'Arts___Cul': 'Arts___Cul', 'Body': 'Body', 'Drinks': 'Drinks', 'Entertainm': 'Entertainm', 'Essentials': 'Essentials', 'Fashion': 'Fashion', 'Features': 'Features', 'Fitness': 'Fitness', 'Food': 'Food', 'Groups': 'Groups', 'Home___Hob': 'Home___Hob', 'Lodging': 'Lodging', 'Misc': 'Misc', 'Municipal': 'Municipal', 'Parks___Re': 'Parks___Re', 'Services': 'Services', 'CULTURE': 'CULTURE', 'CountBusin': 'Count of Nightlife Businesses', 'normBiz': 'normBiz', });
lyr_NormalizedCultureValue_1.set('fieldAliases', {'ZIPCODE': 'Zip Code', 'PO_NAME': 'PO_NAME', 'POPULATION': 'Population', 'STATE': 'STATE', 'COUNTY': 'County', 'ST_FIPS': 'ST_FIPS', 'zipcode1': 'zipcode1', 'ZIPCODE_1': 'ZIPCODE_1', 'Arts___Cul': 'Arts & Culture', 'Body': 'Body', 'Drinks': 'Drinks', 'Entertainm': 'Entertainment', 'Essentials': 'Essentials', 'Fashion': 'Fashion', 'Features': 'Features', 'Fitness': 'Fitness', 'Food': 'Food', 'Groups': 'Groups', 'Home___Hob': 'Home & Hobby', 'Lodging': 'Lodging', 'Misc': 'Misc', 'Municipal': 'Municipal', 'Parks___Re': 'Parks & Rec', 'Services': 'Services', 'CULTURE': 'CULTURE', 'CountBusin': 'CountBusin', 'normBiz': 'normBiz', });
lyr_ZipCodes_2.set('fieldAliases', {'ZIPCODE': 'Zip Code', 'BLDGZIP': 'BLDGZIP', 'PO_NAME': 'PO_NAME', 'POPULATION': 'Population', 'AREA': 'AREA', 'STATE': 'STATE', 'COUNTY': 'County', 'ST_FIPS': 'ST_FIPS', 'CTY_FIPS': 'CTY_FIPS', 'URL': 'URL', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'zipcode1': 'zipcode1', 'zipzip': 'zipzip', });
lyr_BusinessCountSurveyResponses_0.set('fieldImages', {'ZIPCODE': 'TextEdit', 'PO_NAME': 'Hidden', 'POPULATION': 'Hidden', 'STATE': 'Hidden', 'COUNTY': 'Hidden', 'ST_FIPS': 'Hidden', 'zipcode1': 'Hidden', 'ZIPCODE_1': 'Hidden', 'Arts___Cul': 'Hidden', 'Body': 'Hidden', 'Drinks': 'Hidden', 'Entertainm': 'Hidden', 'Essentials': 'Hidden', 'Fashion': 'Hidden', 'Features': 'Hidden', 'Fitness': 'Hidden', 'Food': 'Hidden', 'Groups': 'Hidden', 'Home___Hob': 'Hidden', 'Lodging': 'Hidden', 'Misc': 'Hidden', 'Municipal': 'Hidden', 'Parks___Re': 'Hidden', 'Services': 'Hidden', 'CULTURE': 'Hidden', 'CountBusin': 'TextEdit', 'normBiz': 'Hidden', });
lyr_NormalizedCultureValue_1.set('fieldImages', {'ZIPCODE': 'TextEdit', 'PO_NAME': 'Hidden', 'POPULATION': 'TextEdit', 'STATE': 'Hidden', 'COUNTY': 'TextEdit', 'ST_FIPS': 'Hidden', 'zipcode1': 'Hidden', 'ZIPCODE_1': 'Hidden', 'Arts___Cul': 'TextEdit', 'Body': 'TextEdit', 'Drinks': 'TextEdit', 'Entertainm': 'TextEdit', 'Essentials': 'TextEdit', 'Fashion': 'TextEdit', 'Features': 'TextEdit', 'Fitness': 'TextEdit', 'Food': 'TextEdit', 'Groups': 'TextEdit', 'Home___Hob': 'TextEdit', 'Lodging': 'TextEdit', 'Misc': 'TextEdit', 'Municipal': 'TextEdit', 'Parks___Re': 'TextEdit', 'Services': 'TextEdit', 'CULTURE': 'TextEdit', 'CountBusin': 'Hidden', 'normBiz': 'Hidden', });
lyr_ZipCodes_2.set('fieldImages', {'ZIPCODE': 'TextEdit', 'BLDGZIP': 'Hidden', 'PO_NAME': 'Hidden', 'POPULATION': 'TextEdit', 'AREA': 'Hidden', 'STATE': 'Hidden', 'COUNTY': 'TextEdit', 'ST_FIPS': 'Hidden', 'CTY_FIPS': 'Hidden', 'URL': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'zipcode1': 'Hidden', 'zipzip': 'Hidden', });
lyr_BusinessCountSurveyResponses_0.set('fieldLabels', {'ZIPCODE': 'inline label', 'CountBusin': 'inline label', });
lyr_NormalizedCultureValue_1.set('fieldLabels', {'ZIPCODE': 'inline label', 'POPULATION': 'inline label', 'COUNTY': 'inline label', 'Arts___Cul': 'inline label', 'Body': 'inline label', 'Drinks': 'inline label', 'Entertainm': 'inline label', 'Essentials': 'inline label', 'Fashion': 'inline label', 'Features': 'inline label', 'Fitness': 'inline label', 'Food': 'inline label', 'Groups': 'inline label', 'Home___Hob': 'inline label', 'Lodging': 'inline label', 'Misc': 'inline label', 'Municipal': 'inline label', 'Parks___Re': 'inline label', 'Services': 'inline label', 'CULTURE': 'inline label', });
lyr_ZipCodes_2.set('fieldLabels', {'ZIPCODE': 'inline label', 'POPULATION': 'inline label', 'COUNTY': 'inline label', });
lyr_ZipCodes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});