module.exports = {
  // Target must be serverless
  target: 'serverless',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: webpack is provided, so we do not need to `require` it

    // Do not include .native which tries to load pg-native
    // See: https://github.com/sequelize/sequelize/issues/3781#issuecomment-537979334
    config.plugins.push(
      new webpack.IgnorePlugin(/mariasql/, /\/knex\//),
      new webpack.IgnorePlugin(/mssql/, /\/knex\//),
      new webpack.IgnorePlugin(/mysql/, /\/knex\//),
      new webpack.IgnorePlugin(/mysql2/, /\/knex\//),
      new webpack.IgnorePlugin(/oracle/, /\/knex\//),
      new webpack.IgnorePlugin(/oracledb/, /\/knex\//),
      new webpack.IgnorePlugin(/pg-query-stream/, /\/knex\//),
      new webpack.IgnorePlugin(/sqlite3/, /\/knex\//),
      new webpack.IgnorePlugin(/strong-oracle/, /\/knex\//),
      new webpack.IgnorePlugin(/pg-native/, /\/pg\//)
    );

    // Important: return the modified config
    return config;
  },
};
