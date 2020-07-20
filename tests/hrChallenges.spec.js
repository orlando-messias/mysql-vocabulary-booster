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

  describe('Exiba os cargos com a diferença entre seus salários máximo e mínimo', () => {
    it('Verifica o desafio 3', async () => {
      const challengeQuery = readFileSync('desafio3.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult3');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('Exiba a média salarial e o nível de senioridade de todas as pessoas empregadas, agrupadas pelo cargo', () => {
    it('Verifica o desafio 4', async () => {
      const challengeQuery = readFileSync('desafio4.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult4');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('Exiba os cargos com sua variação salarial e suas médias máxima e mínima mensal, considerando salários máximo e minímo como anuais', () => {
    it('Verifica o desafio 5', async () => {
      const challengeQuery = readFileSync('desafio5.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult5');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('Faça um relatório que mostra o **histórico de cargos das pessoas empregadas**', () => {
    it('Verifica o desafio 6', async () => {
      const challengeQuery = readFileSync('desafio6.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult6');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('Faça um relatório que mostra o **histórico de cargos das pessoas empregadas** que iniciaram seus cargos nos meses de janeiro, fevereiro ou março', () => {
    it('Verifica o desafio 7', async () => {
      const challengeQuery = readFileSync('desafio7.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult7');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });
});
