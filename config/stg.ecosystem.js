module.exports = {
  apps: [
    {
      name: 'nest',
      script: './dist/main.js',
      watch: true,
      env: {
        SERVICE: 'staging',
      },
    },
  ],
};
