Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    fullscreen: true,
    tabPosition: 'bottom',
    tabBarPosition: 'bottom',

    defaults: {
        styleHtmlContent: true
    },

    items: [{
        title: 'two-way',
        xtype:'test1'
    }, 
    {
        title: 'formulas',
        xtype:'test2'
    }
    ]
})