const fsbx = require('fuse-box');

const config1 = {
    cache: false,
    homeDir: 'src/',
    outFile: './build/heroesModule.js',
    standalone: false,
    sourcemap: false,
    package: 'myAngularModule'
}
let fuseBox1 = fsbx.FuseBox.init(config1);
fuseBox1.bundle('>app/heroes/heroes.module.ts');