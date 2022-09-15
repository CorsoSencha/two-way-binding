Ext.define('MyApp.view.TestViewModel2', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.test2',

    formulas: {
        something: {
            bind: {
                x: '{foo.bar.x}',
                y: '{bar.foo.thing.zip.y}'
            },

            get: function (data) {
                return data.x + data.y;
            }
        }
    }
});

Ext.define('MyApp.view.TestView2', {
    extend: 'Ext.panel.Panel',
    // layout: '',

    // Always use this form when defining a view class. This
    // allows the creator of the component to pass data without
    // erasing the ViewModel type that we want.
    viewModel: {
        type: 'test2'  // references alias "viewmodel.test2"
    },

    items: [{
        bind: {
            html: "Hello {something}"

        }
    }]
})

