const { readFileSync } = require('fs');
const { Sequelize } = require('sequelize');
const Importer = require('mysql-import');

describe('Desafios iniciais', () => {
  let sequelize;

  beforeAll(async () => {
    const {
      MYSQL_USER,
      MYSQL_PASSWORD,
      HOSTNAME
    } = process.env;

    const importer = new Importer(
      { user: MYSQL_USER, password: MYSQL_PASSWORD, host: HOSTNAME }
    );

    await importer.import('./w3schools.sql');

    importer.disconnect();

    sequelize = new Sequelize(
      `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${HOSTNAME}:3306/w3schools`
    );
  });

  afterAll(async () => {
    await sequelize.query('DROP DATABASE w3schools;', { type: 'RAW' });

    sequelize.close();
  });

  describe('Exibe todos os produtos cuja empresa que fez o envio seja `"Speedy Express"` ou `"United Package"`', () => {
    it('Verifica o desafio 8', async () => {
      const challengeQuery = readFileSync('desafio8.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult8');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });
});
