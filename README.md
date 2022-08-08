# eslint-config-strapi

## ⚠️ WORK-IN-PROGRESS ⚠️

This package provides Strapi's `.eslintrc` as an extensible shared config.

## Usage

> This package is meant for internal use only. The configurations are subject to change at any given point.

You can install this package using it's GitHub repository:

```sh
yarn add --dev @strapi/eslint-config
```

We export four ESLint configurations for your usage. Choose the version you need and look at the usage instructions.

### eslint-config-strapi/back

This configuration is aimed as a base.

1. Install the correct versions of each package:

```sh
yarn add --dev eslint@^8.10.0 \
               eslint-config-airbnb-base@^15.0.0 \
               eslint-config-prettier@^8.5.0 \
               eslint-plugin-import@^2.25.4
```

2. Add `"extends": "strapi"` to your `.eslintrc`

### eslint-config-strapi/back

This configuration is aimed for backend usage.

1. Install the correct versions of each package:

```sh
yarn add --dev eslint@^8.10.0 \
               eslint-config-airbnb-base@^15.0.0 \
               eslint-config-prettier@^8.5.0 \
               eslint-plugin-import@^2.25.4 \
               eslint-plugin-node@^11.1.0
```

2. Add `"extends": "strapi/back"` to your `.eslintrc`

### eslint-config-strapi/front

This configuration is aimed for frontend usage as it adds React specific rules.

1. Install the correct versions of each package:

```sh
yarn add --dev babel-eslint@10.0.0 \
               eslint@^8.10.0 \
               eslint-config-airbnb@^19.0.4 \
               eslint-config-prettier@^8.5.0 \
               eslint-plugin-import@^2.25.4 \
               eslint-plugin-jsx-a11y@^6.5.1 \
               eslint-plugin-node@^11.1.0 \
               eslint-plugin-react@^7.29.3 \
               eslint-plugin-react-hooks@^4.3.0
```

2. Add `"extends": "strapi/front"` to your `.eslintrc`

### eslint-config-strapi/typescript

This configuration is aimed for backend usage with TypeScript.

1. Install the correct versions of each package:

```sh
yarn add --dev @typescript-eslint/eslint-plugin@^5.14.0 \
               @typescript-eslint/parser@^5.14.0 \
               eslint@^8.10.0 \
               eslint-config-airbnb-base@^15.0.0 \
               eslint-config-airbnb-typescript@^16.1.1 \
               eslint-config-prettier@^8.5.0 \
               eslint-plugin-import@^2.25.4 \
               eslint-plugin-node@^11.1.0 \
               typescript@^4.6.2
```

2. Add `"extends": "strapi/typescript"` to your `.eslintrc`
