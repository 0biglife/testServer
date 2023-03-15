module.exports = [
  {
    name: 'DeadpoolApp',
    script: 'dist/main.js',
    cwd: './',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development',
      MONGO_DATABASE:
        'mongodb+srv://0biglife:Rhdeotod1@cluster0.3tr58gx.mongodb.net/?retryWrites=true&w=majority',
    },
    wait_ready: true,
    listen_timeout: 30000,
    kill_timeout: 5000,
  },
];
