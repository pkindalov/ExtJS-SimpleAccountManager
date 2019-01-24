Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        })
    },

    onPanelRendered: function() {
        console.log('Panel has been renderd');
    }

});