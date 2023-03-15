module.exports = {
  apps: [
    {
      name: 'Deadpool Backend',
      script: './dist/main.js',
      watch: false,
      env: {
        NODE_ENV: 'development',
        MONGO_DATABASE:
          'mongodb+srv://0biglife:Rhdeotod1@cluster0.3tr58gx.mongodb.net/?retryWrites=true&w=majority',
      },
    },
  ],
};
