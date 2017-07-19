module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone-test'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'postgres://aplbrxwjcilsin:c7e4a9de03650cee5c2a4f9384e339f4e37b24dba45aee50753536264f11a576@ec2-54-243-252-232.compute-1.amazonaws.com:5432/dae7eolr4h1mvc'
    }
  }

};
