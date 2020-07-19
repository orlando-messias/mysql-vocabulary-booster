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

    await importer.import('./hr.sql');

    importer.disconnect();

    sequelize = new Sequelize(
      `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${HOSTNAME}:3306/hr`
    );
  });

  afterAll(async () => {
    await sequelize.query('DROP DATABASE hr;', { type: 'RAW' });

    sequelize.close();
  });

  describe('Exiba os países e indicando se cada um deles se encontra ou não na região formada pela Europa', () => {
    it('Verifica o desafio 1', async () => {
      const challengeQuery = readFileSync('desafio1.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult1');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('Exiba os cargos com seu nível de renumeração associado, com base no salário máximo do cargo', () => {
    it('Verifica o desafio 2', async () => {
      const challengeQuery = readFileSync('desafio2.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult2');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });
});
