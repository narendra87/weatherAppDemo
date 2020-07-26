// jest.config.js
const { defaults } = require('jest-config');
module.exports = {
    // ...
    //moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    // ...
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    }
};

setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
]