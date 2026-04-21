const { withAppBuildGradle } = require('@expo/config-plugins');

const withPackagingFix = (config) => {
  return withAppBuildGradle(config, (config) => {
    const buildGradle = config.modResults.contents;
    
    // Check if packaging block already exists
    if (!buildGradle.includes('packaging {')) {
      // Find the android block and add packaging inside it
      const androidBlockRegex = /(android\s*\{)/;
      const match = buildGradle.match(androidBlockRegex);
      
      if (match) {
        const packagingBlock = `
    packaging {
        resources {
            pickFirsts += ['META-INF/versions/9/OSGI-INF/MANIFEST.MF']
        }
    }`;
        
        // Insert after the android { line
        config.modResults.contents = buildGradle.replace(
          androidBlockRegex,
          `$1${packagingBlock}`
        );
      }
    }
    
    return config;
  });
};

module.exports = withPackagingFix;
