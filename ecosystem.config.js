module.exports = {
  apps: [
    {
      name: 'NestJS App',
      script: '/usr/bin/ts-node',
      args: '-r tsconfig-paths/register src/main.ts',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
