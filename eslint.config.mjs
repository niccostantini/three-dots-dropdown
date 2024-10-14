import config from "eslint-config-standard";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  {
    "extends": [
      "some-other-config-you-use",
      "prettier"
    ]
  }
];
[...[].concat(config)];

