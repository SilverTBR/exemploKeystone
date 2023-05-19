import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  float,
  image,
} from '@keystone-6/core/fields';

import { document } from '@keystone-6/fields-document';

import type { Lists } from '.keystone/types';

export const lists: Lists = {
  Fabricante: list({
    access: allowAll,
    fields:{
      nome: text({validation: {isRequired: true}}),
      produtos: relationship({ref: "Produto.fabricantes", many: true, ui:{ labelField: "nome"}})
    }
  }),

  Produto: list({
    access: allowAll,
    fields: {
      nome: text({validation: { isRequired: true}}),
      descricao: document({
        formatting: true,
      }),
      preco: float({validation: {isRequired: true}}),
      fabricantes: relationship({ref: "Fabricante.produtos", many: false, ui:{ labelField: "nome"}}),
      Departamento: relationship({ref: "Departamento.Produtos", many: false})
    }
    
  }),

  User: list({
    access: allowAll,

    fields: {
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),

      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),
  Departamento: list({
    access: allowAll,
    fields:{
      nome: text({ validation: {isRequired: true}}),
      Produtos: relationship({ref: "Produto.Departamento", many: true})
    },
  })

};