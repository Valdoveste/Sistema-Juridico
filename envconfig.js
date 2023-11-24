const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    const targetPath = '.env.ts';

    // `environment.ts` file structure
    const envConfigFile = `export const environment = {
    URL_API: '${process.env.URL_API}',
    production: true
    };`;

    writeFile(targetPath, envConfigFile, (err) => {
        if (err) {
            console.error(err);
            throw err;
        }
    });
}

setEnv();