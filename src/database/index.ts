import { Database } from '@nozbe/watermelondb';
// utilizando o SQLite mas o watermelondb parecido com um ORM é quem vai fazer
// todo o gerenciamento dessas informações do banco e lidar para que fique o
// mais rápido e performático
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schemas';
import { SkillModel } from './model/skillModel';

// adapter é um design pattern de conexão
const adapter = new SQLiteAdapter({
  schema: schemas
});

export const database = new Database({
  // quem é responsável por fazer a conexão
  adapter,
  // quais são as classes de modelo
  modelClasses: [ SkillModel ]
});