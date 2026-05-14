# Strapi Plugin Material Symbols and Icons

![cover!](/.github/cover.png)

Strapi Plugin Material Symbols and Icons allows you to add a custom field to Strapi for selecting icons from Google's Material Symbols typography.

![input!](/.github/input.png)

## Installation

To install the plugin, run the following command in your Strapi project directory:

```bash
npm install strapi-plugin-material-symbols
```

After installation, add the following configuration to your project's config/plugins.ts or config/plugins.js file:

```ts
module.exports = {
  'material-symbols': true,
};
```

## Usage

Once the plugin is installed and configured, a new menu will appear in the Strapi admin panel listing all available icons.

## Automated versioning and releases

This plugin now uses Changesets for automatic versioning and npm releases.

- Add a changeset for user-facing changes:

```bash
npm run changeset
```

- Open a pull request and merge changes into `main`.
- After merge to `main`, GitHub Actions automatically bumps package versions and publishes to npm.

Releases are generated only from the `main` branch workflow. Use feature branches for all changes and merge through pull requests.

## Adding a custom field

- In the Strapi admin panel, go to content configuration.
- Add a new custom field.
- In the `Custom` tab, click on the `Strapi Material Symbols` plugin button.
- Enter a `name` for the field.
- In the `Advanced Settings` tab, set the field as required or not.
- Save the changes.

### 🖖👽 Support

If you want to say **Thank You** and/or support the active development of `Strapi Material Symbols and Icons`:

Support the project by donating a [cup of coffee](https://ko-fi.com/thiagotnon).
