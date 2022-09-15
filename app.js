Ext.require(['MyApp.view.TestView'])
Ext.application({
    name: 'App',
    launch: function () {
        Ext.onReady(function () {
            Ext.create('MyApp.view.TestView', {
                renderTo: Ext.getBody(),
                width: 400
            });
        });
    }

});
