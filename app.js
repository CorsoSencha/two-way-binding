Ext.require(['MyApp.view.Main', 'MyApp.view.TestView', 'MyApp.view.TestView2' ])
Ext.application({
    name: 'App',
    mainView: 'MyApp.view.Main',
    // launch: function () {
    //     Ext.onReady(function () {
    //         // Ext.create('MyApp.view.TestView', {
    //         //     renderTo: Ext.getBody(),
    //         //     width: 400
    //         // });

    //         // Ext.create('MyApp.view.Main', {
    //         //     renderTo: Ext.getBody(),
    //         //     // width: 400
    //         // });
    //     });
    // }

});
