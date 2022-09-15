Ext.require(['MyApp.view.TestView', 'MyApp.view.TestView2' ])
Ext.application({
    name: 'App',
    launch: function () {
        Ext.onReady(function () {
            // Ext.create('MyApp.view.TestView', {
            //     renderTo: Ext.getBody(),
            //     width: 400
            // });
            Ext.create('MyApp.view.TestView2', {
                renderTo: Ext.getBody(),
                width: 400
            });
        });
    }

});
