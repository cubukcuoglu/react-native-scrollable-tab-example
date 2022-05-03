module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      'root': ['./src'],
      'alias': {
        'src': './src',
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@constants": "./src/helpers/constants",
        "@hooks": "./src/hooks",
        "@navigation": "./src/navigation",
        "@services": "./src/services",
        "@screens": "./src/screens",
        "@utils": "./src/helpers/utils"
      },
    }],
    [
      'react-native-reanimated/plugin'
    ],
  ],
};