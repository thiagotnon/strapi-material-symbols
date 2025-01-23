import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'icon',
    plugin: 'material-symbols',
    type: 'string',
  });
};

export default register;
