import { appSchema } from '@nozbe/watermelondb';

import { skillSchema } from './skillSchema';

export const schemas = appSchema({
  // através da version é possível controlar as atualizações na estrutura do banco
  // se mudar a version vai ser recriado toda a estrutura do banco
  version: 1,
  tables: [ skillSchema ]
});