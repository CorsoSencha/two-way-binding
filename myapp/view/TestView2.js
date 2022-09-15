Ext.define('MyApp.view.TestViewModel2', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.test2',
    data: {
        x: 10,
        y: 20
    },

    formulas: {
        something: {
            bind: {
                x: '{x}',
                y: '{y}'
            },

            get: function (data) {
                return data.x + data.y;
            }
        }
    }
});

Ext.define('MyApp.view.TestView2', {
    extend: 'Ext.panel.Panel',
    xtype: 'test2',
    // layout: '',

    // Always use this form when defining a view class. This
    // allows the creator of the component to pass data without
    // erasing the ViewModel type that we want.
    viewModel: {
        type: 'test2'  // references alias "viewmodel.test2"
    },

    items: [{
        bind: {
            html: '<p style="text-align:center"> <b>{x} + {y} =  {something}</b></p>'

        }
    }]
})

