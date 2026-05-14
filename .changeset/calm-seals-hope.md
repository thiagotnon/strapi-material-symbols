---
"strapi-plugin-material-symbols": patch
---

Fix crash in custom field input when description or placeholder is provided without an id.
The text field now formats both values with a fallback message id to satisfy react-intl requirements.
