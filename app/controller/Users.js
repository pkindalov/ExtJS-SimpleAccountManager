Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users'
    ],

    models: [
        'User'
    ],

    views: [
        'user.List',
        'user.Edit'
    ],

    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        })
    },

    editUser: function(grid, record) {
        let view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        let win = button.up('window');
        let form = win.down('form');
        let record = form.getRecord();
        let values = form.getValues();

        record.set(values);
        win.close();

        // synchronize the store after editing the record
        this.getUsersStore().sync();
    }

});