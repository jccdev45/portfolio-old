// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './../**/*.js',
  ],
  theme: {},
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
