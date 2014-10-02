Package.describe({
  summary: "Meteor bindings for Spreedly payment tokenization and charge processing",
  "version": "1.0.13",
  "git": "https://github.com/mycartio/spreedly.git",
  "name": "mycartio:spreedly"
});

Npm.depends({ 
	"spreedly-node-new": "0.1.0"
});

Package.on_use(function(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.export(['Spreedly']);

  api.add_files(['lib/server.js'], 'server');
});
