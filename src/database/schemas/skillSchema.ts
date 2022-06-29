// schema é a instrução que eu vou dar para o watermelon criar as tabelas
import { tableSchema  } from '@nozbe/watermelondb';

// para cada tabela que vai ter dentro do banco, é necessário criar um schema
export const skillSchema = tableSchema({
  // não é necessário criar um id porque por padrão o watermelon já faz isso
  name: 'skills',
  columns: [
    {
      // nome da habilidade
      name: 'name',
      type: 'string',
    },
    {
      // tipo da habilidade(hard ou soft)
      name: 'type',
      type: 'string',
    }
  ]
});