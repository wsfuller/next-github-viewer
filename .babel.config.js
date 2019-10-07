module.exports = function() {
  const presets = ['next/babel', '@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ];
  return {
    presets,
    plugins
  };
};
