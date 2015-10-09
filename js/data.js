$(function () {


    // Instanciate the map
    $('#container').highcharts('Map', {
        chart: {
            spacingBottom: 20
        },
        colors: ['#a0a0a0'],
        title : {
            text : 'Europe time zones'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            map: {
                allAreas: false,
                joinBy: ['iso-a2', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    formatter: function () {
                        if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                            return this.point.properties['iso-a2'];
                        }
                    },
                    format: null,
                    style: {
                        fontWeight: 'bold'
                    }
                },
            }
        },

        series: [{
            name: 'Minimum Age',
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['hc-key', 'code'],
            type: 'map',
            nullColor: "red",
            data: [{
                    "code": "us-ak",
                    "value": 17.2,
                    "color": "#f8991c",

            }, {
                    "code": "us-al",
                    "value": 12.1,
                    "color": "#f8991c",

            }, {
                    "code": "us-ar",
                    "value": 11.8,
                    "color": "#aca668",

            }, {
                    "code": "us-az",
                    "value": 13.6,
                    "color": "#aca668",

            }, {
                    "code": "us-ca",
                    "value": 12.4,
                    "color": "#aca668",

            }, {
                    "code": "us-co",
                    "value": 10.3,
                    "color": "#7299ac"
            }, {
                    "code": "us-ct",
                    "value": 6.9,
                    "color": "#56488f"
            }, {
                    "code": "us-de",
                    "value": 7.8,
                    "color": "#f8991c"
            }, {
                    "code": "us-fl",
                    "value": 16.6,
                    "color": "#aca668",
            }, {
                    "code": "us-ga",
                    "value": 15.8,
                    "color": "#aca668",
            }, {
                    "code": "us-hi",
                    "value": 5.3,
                    "color": "#56488f"
            }, {
                    "code": "us-ia",
                    "value": 6.2,
                    "color": "#f8991c",

            }, {
                    "code": "us-id",
                    "value": 13.6,
                    "color": "#f8991c",

            }, {
                    "code": "us-il",
                    "value": 9.7,
                    "color": "#f8991c",

            }, {
                    "code": "us-in",
                    "value": 11.9,
                    "color": "#f8991c",

            }, {
                    "code": "us-ks",
                    "value": 10.2,
                    "color": "#56488f"

            }, {
                    "code": "us-ky",
                    "value": 8.5,
                    "color": "#56488f"

            }, {
                    "code": "us-la",
                    "value": 14.8,
                    "color": "#aca668",


            }, {
                    "code": "us-ma",
                    "value": 3.3,
                    "color": "#f8991c",

            }, {
                    "code": "us-md",
                    "value": 7.9,
                    "color": "#f8991c",

            }, {
                    "code": "us-me",
                    "value": 10.1,
                    "color": "#56488f"


            }, {
                    "code": "us-mi",
                    "value": 8.5,
                    "color": "#7299ac"

            }, {
                    "code": "us-mn",
                    "value": 5.9,
                    "color": "#f8991c",

            }, {
                    "code": "us-mo",
                    "value": 11.7,
                    "color": "#56488f"

            }, {
                    "code": "us-ms",
                    "value": 14.5
            }, {
                    "code": "us-mt",
                    "value": 14.2
            },{
                    "code": "us-nc",
                    "value": 13.1
            }, {
                    "code": "us-nd",
                    "value": 7.9
            }, {
                    "code": "us-ne",
                    "value": 9.7
            },{
                    "code": "us-nm",
                    "value": 14.5
            }, {
                    "code": "us-nh",
                    "value": 9.2
            }, {
                    "code": "us-nj",
                    "value": 10.9
            }, {
                    "code": "us-nv",
                    "value": 15.2
            }, {
                    "code": "us-ny",
                    "value": 8.7
            }, {
                    "code": "us-oh",
                    "value": 8.4
            }, {
                    "code": "us-ok",
                    "value": 15.4
            }, {
                    "code": "us-or",
                    "value": 9.7
            }, {
                    "code": "us-pa",
                    "value": 8.5
            }, {
                    "code": "us-ri",
                    "value": 7.4
            }, {
                    "code": "us-sc",
                    "value": 13.6
            }, {
                    "code": "us-sd",
                    "value": 9.8
            }, {
                    "code": "us-tn",
                    "value": 12
            }, {
                    "code": "us-tx",
                    "value": 19.1
            }, {
                    "code": "us-ut",
                    "value": 12.5
            }, {
                    "code": "us-va",
                    "value": 10.9
            }, {
                    "code": "us-vt",
                    "value": 5
            }, {
                    "code": "us-wa",
                    "value": 9.2
            }, {
                    "code": "us-wi",
                    "value": 7.3
            }, {
                    "code": "us-wv",
                    "value": 8.6
            }, {
                    "code": "us-wy",
                    "value": 12
            }]
        }],

    });
});
