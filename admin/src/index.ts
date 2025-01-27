import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';
import { PLUGIN_ID } from './pluginId';
import './styles/globals.css';

export default {
  register(app: any) {
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });

    app.customFields.register({
      name: 'icon',
      pluginId: PLUGIN_ID,
      icon: PluginIcon,
      type: 'string',
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID,
      },
      intlDescription: {
        id: `${PLUGIN_ID}.plugin.description`,
        defaultMessage: PLUGIN_ID,
      },
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/input'),
      },
      options: {
        base: [],
        advanced: [
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: `${PLUGIN_ID}.options.advanced.requiredField`,
                  defaultMessage: 'Required field',
                },
                description: {
                  id: `${PLUGIN_ID}.options.advanced.requiredField.description`,
                  defaultMessage: "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
      },
    });
  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
