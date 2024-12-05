const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../Users/JUANSE/Documents/PROYECTOS/PROJECTS/VSCODE/TFEEXPRES/frontend'),  // Ajusta nombre_proyecto a tu nombre real
  assetsDir: 'assets',
}
