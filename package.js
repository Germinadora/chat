Package.describe({
  summary: "CodersTV Chat",
  version: "0.1.1",
  git: "https://github.com/CodersTV/chat",
  name: "coderstv:chat"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  var both = ['client', 'server'];
  api.use([
    'meteor',
    'standard-app-packages',
    'tmeasday:presence@1.0.0', 
    'lepozepo:streams@0.2.0'
  ], both);

  api.use([
    'deps',
    'startup',
    'session',
    'templating',
    'less',
    'jquery',
    'coderstv:reactive-path@0.2.1',
    'natestrauser:font-awesome@4.2.0'
  ], 'client');

  api.add_files([
    'lib/common.js'
  ], both);

  api.add_files([
    'client/lib/startup.js',
    'client/lib/helpers.js',
    'client/stylesheets/superchat.less',
    'client/views/chatroom.html',
    'client/views/chatroom.js'
  ], 'client');
  api.add_files([
    'client/compatibility/jquery.nicescroll.min.js',
    'client/compatibility/keyboard.js'
  ], 'client', {raw: true});

  api.add_files([
    'server/publications.js',
    'server/unban.js'
  ], 'server');

  if (typeof api.export !== 'undefined') {
    api.export('Superchat', both);
  }

});
