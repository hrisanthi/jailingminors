$(function () {


    // Instanciate the map
    $('#container').highcharts('Map', {
        chart: {
            spacingBottom: 20
        },

        title : {
            text : 'Adult criminals'
        },


        legend: {
            enabled: false
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
            name: 'Certain cases  – usually murder and other violent felonies – automatically move to adult courts even when the defendant is underage.',
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['hc-key', 'code'],
            type: 'map',
            data: [{
                    "code": "us-ak",
                    "value": 18,
                    "color": "#f8991c",

            },{
                    "code": "us-al",
                    "value": 18,
                    "color": "#f8991c",

        },{
                    "code": "us-de",
                    "value": 18,
                    "color": "#f8991c"
            },

            {
                   "code": "us-ia",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-nv",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-id",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-il",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-in",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-ma",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-md",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-sc",
                   "value": 17,
                   "color": "#f8991c",


           }, {
                   "code": "us-sd",
                   "value": 17,
                   "color": "#f8991c",

           },
           {
                   "code": "us-mn",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-wa",
                   "value": 18,
                   "color": "#f8991c"
           }, {
                   "code": "us-wi",
                   "value": 17,
                   "color": "#f8991c"

           },
           {
                   "code": "us-ny",
                   "value": 16,
                   "color": "#f8991c",

           },
           {
                   "code": "us-ms",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-nm",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-or",
                   "value": 18,
                   "color": "#f8991c",


           }, {
                   "code": "us-pa",
                   "value": 18,
                   "color": "#f8991c",

           },
           {
                   "code": "us-ut",
                   "value": 18,
                   "color": "#f8991c",

           }]
       },{
       name: 'Certain violent felonies automatically move to adult court. Prosecutors have discretion to try juveniles as adults in other cases.',
       mapData: Highcharts.maps['countries/us/us-all'],
       joinBy: ['hc-key', 'code'],
       type: 'map',
       data: [{

                    "code": "us-ar",
                    "value": 18,
                    "color": "#aca668",

            }, {
                    "code": "us-az",
                    "value": 18,
                    "color": "#aca668",

            }, {
                    "code": "us-ca",
                    "value": 18,
                    "color": "#aca668",

            }, {
                    "code": "us-ga",
                    "value": 17,
                    "color": "#aca668",
            }, {
                    "code": "us-la",
                    "value": 17,
                    "color": "#aca668",


            }, {
                    "code": "us-mt",
                    "value": 18,
                    "color": "#aca668",

            },{
                    "code": "us-ok",
                    "value": 18,
                    "color": "#aca668",

            },{
                    "code": "us-vt",
                    "value": 18,
                    "color": "#aca668"

            }], },{
                name: 'Only judges can determine whether a juvenile should be tried in adult court.',
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['hc-key', 'code'],
                type: 'map',
                data: [{
                    "code": "us-ct",
                    "value": 18,
                    "color": "#56488f"
            },  {
                    "code": "us-wv",
                    "value": 18,
                    "color": "#56488f"

            }, {
                    "code": "us-hi",
                    "value": 18,
                    "color": "#56488f"
            }, {
                    "code": "us-ks",
                    "value": 18,
                    "color": "#56488f"

            }, {
                    "code": "us-ky",
                    "value": 18,
                    "color": "#56488f"

            },   {
                    "code": "us-me",
                    "value": 18,
                    "color": "#56488f"


            }, {
                    "code": "us-ne",
                    "value": 18,
                    "color": "#56488f"

            },  {
                    "code": "us-nd",
                    "value": 18,
                    "color": "#56488f"

            }, {
                    "code": "us-nh",
                    "value": 18,
                    "color": "#56488f"

            },{
                    "code": "us-nj",
                    "value": 18,
                    "color": "#56488f"

            },   {
                    "code": "us-ri",
                    "value": 18,
                    "color": "#56488f"

            },  {
                    "code": "us-oh",
                    "value": 18,
                    "color": "#56488f"

            },{
                    "code": "us-nc",
                    "value": 16,
                    "color": "#56488f"

            }, {
                    "code": "us-tn",
                    "value": 18,
                    "color": "#56488f"

            }, {
                    "code": "us-tx",
                    "value": 17,
                    "color": "#56488f"

            },{
                    "code": "us-mo",
                    "value": 17,
                    "color": "#56488f"

            }], },{
                name: 'Prosecutors are given discretion to try a juvenile in adult court.',
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['hc-key', 'code'],
                type: 'map',
                data: [{
                    "code": "us-mi",
                    "value": 17,
                    "color": "#7299ac"

            },  {
                    "code": "us-va",
                    "value": 18,
                    "color": "#7299ac"

            }, {
                    "code": "us-wy",
                    "value": 18,
                    "color": "#7299ac"
            },{

                "code": "us-co",
                "value": 18,
                "color": "#7299ac"
        }]
        }],

    });
});
