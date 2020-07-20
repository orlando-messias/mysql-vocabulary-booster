# Bem vindo ao repositório do projeto Vocabulary Booster

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

## O que deverá ser desenvolvido

Hoje você fará um projeto com o codinome *Vocabulary Booster*, em que vai explorar todos os conceitos vistos até o momento sobre SQL.

Os desafios deste projeto foram criados com o intuito de providenciar meios para que você possa praticar a criação de queries mais elaboradas, utilizando, muitas vezes, diferentes comandos em uma mesma query.

Para te deixar preparado(a) para lidar com qualquer situação, independente da estrutura do banco de dados que esteja utilizando, escolhemos um novo banco para este projeto: o `W3Schools`.

Comece esse novo projeto seguindo as instruções abaixo para restaurar o banco de dados. Bons estudos!

---

## Instruções para restaurar os bancos de dados `W3Schools` e `HR`

Se você já possuir esses bancos em seu MySQL Server e quiser restaurá-los, antes de seguir os passos abaixo será necessário apagá-los, clicando com o botão direito no banco e escolhendo a opção `Drop Schema...`.

1. Faça o download dos arquivos de backup [aqui](w3schools.sql) e [aqui](hr.sql), clicando com botão direito e selecionando "Salvar como" para salvar os arquivos em seu computador.

2. Abra o MySQL Workbench.

3. Vá em `File -> Open SQL Script...` e selecione o arquivo `w3schools.sql`.

4. Selecione todo o código com o atalho `CTRL-A` e clique no ícone de trovão para executar o script.

    ![Restaurando o banco w3schools](images/restore_database_1.png)

5. Aguarde alguns segundos (espere em torno de 30 segundos antes de tentar fazer algo).

6. Clique no botão apontado na imagem a seguir para atualizar a listagem de banco de dados:

    ![Tabelas do banco w3schools](images/refresh_databases.png)

7. Verifique se o banco restaurado possui todas as seguintes tabelas:

    ![Tabelas do banco w3schools](images/w3school.png)

8. Clique com botão direito em cada tabela e selecione "Select Rows". Certifique-se de que todas as tabelas possuem registros. Se alguma estiver vazia ou ausente, faça o passo a seguir. Caso contrário, vá direto para o passo 10.

9. Caso haja tabelas faltando, delete o banco de dados clicando com o botão direito em cima do banco de dados `w3schools` e selecione a opção `Drop Schema...`. Refaça os passos anteriores, desta vez aguardando um tempo maior quando executar o script de restauração.

    ![Drop Schema](images/drop_schema.png)

10. O mesmo processo mencionado anteriormente também deve ser feito para restaurar o banco `HR`. Verifique se o banco `HR` restaurado possui todas as tabelas indicadas na imagem abaixo. Se alguma estiver vazia ou ausente, faça o passo a seguir. Caso contrário, vá direto para a próxima seção.

    ![Tabelas do banco hr](images/hr.png)

11. Caso haja tabelas faltando, delete o banco de dados clicando com o botão direito em cima do banco de dados `hr` e selecione a opção `Drop Schema...`. Refaça o passo anterior, desta vez aguardando um tempo maior quando executar o script de restauração.

---

## Como desenvolver e entregar este projeto

Temos, a seguir, uma série de desafios com diferentes níveis de complexidade. Cada desafio deve ser resolvido em seu próprio arquivo.

1. Leia a pergunta e crie um arquivo chamado `desafioN.sql`, em que N é o número do desafio.

2. O arquivo deve conter apenas o código SQL do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries e também de **colocar o nome do banco_de_dados.tabela por completo**, como no exemplo a seguir:

```sql
SELECT * FROM w3schools.customers;
```

3. Faça isso até finalizar todos os desafios e depois siga as instruções de como entregar o projeto em **Instruções para entregar seu projeto**.

---

## Desafios SQL

### Desafio 1

Foi decidido que vamos continuar atendendo apenas à região `"Europa"`. Sendo assim, usando o banco `hr` como referência, precisamos de um relatório que deve apresentar duas colunas:

1. A primeira coluna deve possuir o alias "**País**" e exibir o nome do país.

2. A segunda coluna deve possuir o alias "**Status Inclusão**" e deve exibir `"incluído"` se o país em questão está incluso na `"Europa"`, ou `"não incluído"`, caso contrário.

Os resultados devem estar ordenados pelo nome do país em ordem alfabética.

---

### Desafio 2

Com base em todos os cargos presentes, queremos categorizar o nível de remuneração de cada cargo. Utilizando o banco `hr` como referência, seu relatório deve possuir as seguintes colunas:

1. A primeira coluna deve possuir o alias "**Cargo**" e exibir o nome do cargo.

2. A segunda coluna deve possuir o alias "**Nível**" e exibir o nível de remuneração do cargo com base no seu **salário máximo**, categorizando os níveis de remuneração da seguinte forma:

    Salário máximo entre 5000 e 10000 -> Baixo

    Salário máximo entre 10001 e 20000 -> Médio

    Salário máximo entre 20001 e 30000 -> Alto

    Salário máximo acima de 30000 -> Altíssimo

Os resultados devem estar ordenados pelo nome do cargo em ordem alfabética.

---

### Desafio 3

Usando o banco `hr` como referência, crie uma query que exiba duas colunas:

1. A primeira coluna deve possuir o alias "**Cargo**" e exibir o nome do cargo.

2. A segunda coluna deve possuir o alias "**Diferença entre salários máximo e mínimo**" e exibir a diferença entre os salários máximo e mínimo para o cargo em questão.

Os resultados devem estar ordenados pela diferença entre salários máximo e mínimo em ordem crescente. Em caso de empate nessa diferença os resultados devem ser ordenados pelo nome do cargo em ordem alfabética.

---

### Desafio 4

Usando o banco `hr` como referência, queremos extrair informações a respeito **dos salários das pessoas empregadas**. Para isso, crie uma query que exiba três colunas:

1. A primeira coluna deve possuir o alias "**Cargo**" e exibir o nome do cargo.

2. A segunda coluna deve possuir o alias "**Média salarial**" e exibir a média dos salários das pessoas empregadas que possuem o cargo em questão.

3. A terceira coluna deve possuir o alias "**Salarial**" e categorizar o nível de senioridade do cargo com base na média salarial, da seguinte forma:

    Média salarial entre 2000 - 5800 -> 'Júnior'

    Média salarial entre 5801 - 7500 -> 'Pleno'

    Média salarial entre 7501 - 10500 -> 'Sênior'

    Média salarial acima de 10500 -> 'CEO'

Devido ao fato de a média salarial ser um valor monetário, sempre que for fazer uso da média salarial, é preciso arredondá-la usando apenas duas casas decimais.

Os resultados devem estar ordenados pela média salarial em ordem crescente. Em caso de empate na média, os resultados devem ser ordenados pelo nome do cargo em ordem alfabética.

---

### Desafio 5

Usando o banco `hr` como referência, queremos exibir informações sobre os cargos cadastrados nesse banco em um formato mais próximo da realidade brasileira. Considerando que os salários máximo e mínimo de um cargo são salários anuais, crie uma query que exiba quatro colunas:

1. A primeira coluna deve possuir o alias "**Cargo**" e exibir o nome do cargo.

2. A segunda coluna deve possuir o alias "**Variação Salarial**" e exibir a diferença entre os salários máximo e mínimo daquele cargo.

3. A terceira coluna deve possuir o alias "**Média mínima mensal**" e exibir a média mínima **mensal** daquele cargo. Arredonde a média com uma precisão de duas casas decimais.

4. A quarta coluna deve possuir o alias "**Média máxima mensal**" e exibir a média máxima **mensal** daquele cargo. Arredonde a média com uma precisão de duas casas decimais.

Os resultados devem estar ordenados pela variação salarial em ordem crescente. Em caso de empate na variação, os resultados devem ser ordenados pelo nome do cargo em ordem alfabética.

---

### Desafio 6

Faça um relatório que mostra o **histórico de cargos das pessoas empregadas**. Para isso, usando o banco `hr` como referência, monte uma query que exiba quatro colunas:

1. A primeira coluna deve possuir o alias "**Nome completo**" e exibir o **nome completo** da pessoa empregada (não se esqueça do espaço entre o nome e o sobrenome).

2. A segunda coluna deve possuir o alias "**Cargo**" e exibir o nome do cargo da pessoa.

3. A terceira coluna deve possuir o alias "**Data de início do cargo**" e exibir a data que a pessoa iniciou o cargo.

4. A quarta coluna deve possuir o alias "**Departamento**" e mostrar o nome do departamento em que a pessoa exerceu seu cargo.

Os resultados devem estar ordenados pelo nome completo das pessoas empregadas em ordem decrescente. Em caso de empate no nome completo, ordene os resultados pelo nome do cargo em ordem alfabética.

---

### Desafio 7

Faça um relatório que mostra o **histórico de cargos das pessoas empregadas** que iniciaram seus cargos nos meses de janeiro, fevereiro ou março. Para isso, usando o banco `hr` como referência, monte uma query que exiba três colunas:

1. A primeira coluna deve possuir o alias "**Nome completo**" e exibir o **nome completo** da pessoa empregada em CAIXA ALTA (não se esqueça do espaço entre o nome e o sobrenome).

2. A segunda coluna deve possuir o alias "**Data de início**" e exibir a data que a pessoa iniciou o cargo.

3. A terceira coluna deve possuir o alias "**Salário**" e exibir o salário que a pessoa teve para aquele cargo.

Os resultados devem estar ordenados pelo nome completo das pessoas empregadas em ordem alfabética. Em caso de empate no nome completo, ordene os resultados pela data de início que a pessoa iniciou seu cargo, em ordem crescente.

---

### Desafio 8

Exibe todos os produtos cuja empresa que fez o envio seja `"Speedy Express"` ou `"United Package"`. Para isso, usando o banco `w3schools` como referência, monte uma query que exiba três colunas:

1. A primeira coluna deve possuir o alias "**Nome de contato**" e exibir **o nome de contato** de quem fez o pedido.

2. A segunda coluna deve possuir o alias "**Empresa que fez o envio**" e exibir o nome da empresa que efetuou o envio do pedido.

3. A terceira coluna deve possuir o alias "**Data do pedido**" e exibir a data que o pedido foi feito.

Seus resultados devem estar ordenados pelo nome de contato da pessoa que fez o pedido em ordem alfabética. Em caso de empate no nome de contato, ordene os resultados pelo nome da empresa que fez o envio do produto em ordem alfabética e caso há empresas com o mesmo nome, ordene os resultados pela data do pedido em ordem crescente.

---

### Desafio 9

Exibe todos as pessoas funcionárias que já realizaram algum pedido, mostrando também seu total de pedidos feitos. Usando o banco `w3schools` como referência, monte uma query que exiba duas colunas:

1. A primeira coluna deve possuir o alias "**Nome completo**" e exibir o nome completo da pessoa funcionária (não se esqueça do espaço entre o nome e o sobrenome).

2. A segundo coluna deve possuir o alias "**Total de pedidos**" e exibir a quantidade total de pedidos feitos pela pessoa.

Ordene seus resultados pelo total de pedidos em ordem crescente.

---

### Desafio 10

Exibe todos os produtos que já foram pedidos, que possuem uma média de quantidade nos pedidos registrados acima de `20.00`. Usando o banco `w3schools` como referência, monte uma query que exiba quatro colunas:

1. A primeira coluna deve possuir o alias "**Produto**" e exibir o nome do produto.

2. A segunda coluna deve possuir o alias "**Mínima**" e exibir a **quantidade mínima** que já foi pedida desse produto.

3. A segunda coluna deve possuir o alias "**Máxima**" e exibir a **quantidade máxima** que já foi pedida desse produto.

4. A quarta coluna deve deve possuir o alias "**Média**" e exibir a **média de quantidade nos pedidos** deste produto, arredondada para duas casas decimais.

Os resultados devem estar ordenados pela média de quantidade nos pedidos em ordem crescente. Em caso de empate na média, os resultados devem ser ordenados pelo nome do produto em ordem alfabética.

---

### Desafio 11

Exibe todas as pessoas clientes **que possuem compatriotas**, mostrando a quantidade de compatriotas para cada pessoa cliente. Ou seja, suponha que houvese apenas quatro clientes:

1. `Maria`, do `Brasil`.

2. `João`, do `Brasil`.

3. `Gabriela`, do `Brasil`.

4. `Alex`, da `Irlanda`.

Logo, podemos dizer que `Maria`, `João` e `Gabriela` são compatriotas entre si, haja visto que as três pessoas moram no `Brasil`. Além disso, podemos dizer que tanto `Maria` quanto `João` e `Gabriela` possuem duas pessoas compatriotas associadas. Já `Alex` não possui compatriota, haja visto que não há outras pessoas da `Irlanda`.

Usando o banco `w3schools` como referência, monte uma query que exiba três colunas:

1. A primeira coluna deve possuir o alias "**Nome**" e exibir **o nome de contato** da pessoa cliente.

2. A segunda coluna deve possuir o alias "**País**" e exibir o nome do país em que a pessoa reside.

3. A terceira coluna deve possuir o alias "**Número de compatriotas**" e exibir o número de pessoas que moram no mesmo país.

Os resultados devem estar ordenados pelo nome de contato da pessoa cliente em ordem alfabética.

---

### Desafio 12

Faça um relatório que lista todas as pessoas funcionárias **que possuem o mesmo cargo**. Ou seja, suponha que houvesse somente três pessoas funcionárias, `João`, `Maria` e `Alex`, e:

* `João` e `Maria` possuem o mesmo cargo;

* `Alex` não tem outra pessoa funcionária com o mesmo cargo.

Logo, podemos dizer que `João` tem uma pessoa funcionária associada, `Maria`, que possui o mesmo cargo. Também podemos dizer que `Maria` tem uma pessoa funcionária associada, `João`, que possui o mesmo cargo. Já `Alex` não tem outra pessoa funcionária associada com o mesmo cargo. Portanto, seu relatório deveria ter dois resultados, um indicando que `Maria` tem uma pessoa associada `João` que possui o mesmo cargo, e o outro resultado indicando que `João` tem uma pessoa associada `Maria` que possui o mesmo cargo.

Com base nisso, usando o banco `hr` como referência, monte uma query que exiba seis colunas:

1. A primeira coluna deve possuir o alias "**Nome completo funcionário 1**" e exibir o **nome completo** da pessoa funcionária (não se esqueça do espaço entre o nome e o sobrenome).

2. A segunda coluna deve possuir o alias "**Salário funcionário 1**" e exibir o salário dessa pessoa.

3. A terceira coluna deve possuir o alias "**Telefone funcionário 1**" e exibir o número de telefone dessa pessoa.

4. A quarta coluna deve possuir o alias "**Nome completo funcionário 2**" e exibir o **nome completo** da pessoa funcionária associada que possui o mesmo cargo (não se esqueça do espaço entre o nome e o sobrenome).

5. A quinta coluna deve possuir o alias "**Salário funcionário 2**" e exibir o salário da pessoa funcionária associada que possui o mesmo cargo.

6. A sexta coluna deve possuir o alias "**Telefone funcionário 2**" e exibir o número da pessoa funcionária associada que possui o mesmo cargo.

Os resultados devem estar ordenados pela coluna "**Nome completo funcionário 1**" em ordem alfabética. Em caso de empate, os resultados devem ser ordenados pela coluna **Nome completo funcionário 2**" em ordem alfabética.

---

13. Exiba o **nome dos produtos** e **preço dos produtos** cadastrados na tabela `products` do banco `w3schools`. Porém, exiba somente produtos que têm uma quantidade de produtos correspondente maior que 80 na tabela `order_details`. Sua query deve produzir exatamente 3 resultados e ser ordenada pelo nome do produto.

    ![test13](images/test13.png)

14. O banco `w3schools` possui países cadastrados nas tabelas `customers` e `suppliers`. Queremos saber quais são os cinco primeiros países que estão cadastrados no banco, em ordem alfabética, em qualquer uma das tabelas. Crie uma query que retorne esse resultado.

    ![test14](images/test14.png)

15. Crie uma procedure chamada `BuscarMediaPorCategoriaDeTrabalho` que recebe um parâmetro `VARCHAR` correspondente a um `job_id` da tabela `employees` do banco de dados `hr`. Ao ser executada, sua procedure deverá obter da tabela `employees` a **média salarial arredondada** deste trabalho, arredondada para as duas casas decimais. Dica importante: não esqueça de incluir a linha `USE hr;` antes da declaração de sua procedure. Quando sua procedure for executada com parâmetro 'IT_PROG', deve retornar 5760.00.

    ![test15](images/test15.png)

16. Crie uma função chamada `BuscarQuantidadeDeEmpregosPorFuncionario` que, ao receber o **id de um funcionário**, vá até a tabela `job_history`, no banco de dados `hr` e retorne a quantidade de empregos já gravados no sistema relacionados a esse funcionário. Confirme que sua function retorna o valor **2** ao ser chamada passando um funcionário com id **101**.

    ![test16](images/test16.png)

### BÔNUS:

17. Usando a tabela `job_history` do banco `hr`, monte um relatório que exiba o `employee_id`, a sua data de início (`start_date`), no formato brasileiro "dd/mm/aaaa" e com o apelido de "Data Início", a sua data de saída (`end_date`), também no formato brasileiro "dd/mm/aaaa" e com o apelido de "Data Rescisão", e, finalmente, calcule os anos trabalhados (apelidado de "Anos trabalhados") usando como base as datas de saída e entrada, arredondadas para as duas casas decimais. Ordene seus resultados pelo `employee_id`. Sua query deve produzir 11 resultados.

    ![test17](images/test17.png)

18. Crie uma function chamada `ExibirQuantidadePessoasContratadasPorMesEAno` que recebe dois parâmetros: `mes` (sem acento) e `ano`, ambos do tipo `INT`. A function deve ir até a tabela `employees` do banco `hr` e retornar a **quantidade de funcionários** que foram contratados (`hire_date`) dentro do `mes` e `ano` informados. Sua function deverá retornar o resultado **14**, ao ser executada com os parâmetros **mês 6 e ano 1987**.

    ![test18](images/test18.png)

19. Crie uma procedure chamada `ExibirHistoricoCompletoPorFuncionario` que retorna uma informação completa de um funcionário, fazendo uso do banco `hr`. Sua procedure deve receber apenas um parâmetro `employee_id` do tipo `INT` de um funcionário e deve exibir quatro colunas. A coluna primeira será o próprio id que foi passado. A segunda será o nome completo desse funcionário, com o apelido "Nome Completo". A terceira coluna deve conter a descrição do seu cargo, com o apelido "Cargo". A quarta coluna deve exibir o nome do departamento onde este funcionário trabalhou, com o apelido de "Departamento". Quando sua procedure for executada com parâmetro 101, deve retornar a seguinte listagem:

    ![test19](images/test19.png)

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-0x-mysql-vocabulary-booster.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-mysql-vocabulary-booster`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b jhonatan-de-souza-vocabulary-booster`

3. Para cada exercício você deve criar um novo arquivo sql seguindo a seguinte estrutura:
  * desafio1.sql, desafio2.sql, ..., desafioN.sql

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.sql)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando solução para desafio 1)
        * `git status` (deve aparecer listado o arquivo _desafio1.sql_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto MySQL Vocabulary Booster'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin seunome-mysql-vocabulary-booster`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-mysql-vocabulary-booster/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-mysql-vocabulary-booster/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros estudantes forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
