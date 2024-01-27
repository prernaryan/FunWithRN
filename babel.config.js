module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@constants': './src/constants/index',
          '@service': './src/service',
          '@components': './src/components',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@redux': './src/redux',
          '@navigations': './src/navigations',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
