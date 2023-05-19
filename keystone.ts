import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'mysql',
      url: 'mysql://root:1234@localhost:3306/Apresenta2',
    },
    lists,
    session,
  })
);
