Exercício:
 
- Instalar typescript no projeto (--save-dev)
- Instalar ts-node globalmente (-g)
- npx tsc --init (comando para inicializar a configuração do typescript)
- npm install --save express mongoose
- npm install --save-dev typescript @types/node @types/express
- Criar interfaces/types typescript que descrevam aluno, pessoa e grupo de alunos com suas devidas propriedades. Cada interface deve ter campos obrigatórios e opcionais. 
- Criar uma API com node.js que se connecte ao banco de dados mongodb com a string (mongodb+srv://root:root@cluster0.dcfek.mongodb.net/?retryWrites=true&w=majority) no banco revisao_prefeitura 
- Essa API deve ter um CRUD de usuários, um CRUD de ponto eletrônico (a fim de registrar as entradas e saídas do usuário no trabalho) que receba id do usuário, data e hora de registro do ponto.
- O módulo de ponto deve obrigatoriamente ter uma rota que pesquise todos os pontos do usuário no dia, na semana e no mês e que calcule as horas trabalhadas
- obrigatório: utilizar typescript para criação da API
