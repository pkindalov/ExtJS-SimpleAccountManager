Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layot: 'fit',
            items: [{
                xtype: 'panel',
                title: 'Users',
                html: 'List of users will go here'
            }]
        });
    }
})