const fsbx = require('fuse-box');

const config1 = {
    cache: false,
    homeDir: 'src/',
    outFile: './build/heroesModule.js',
    standalone: false,
    sourcemap: false,
    package: 'myAngularModule',
    plugins : [
         fsbx.TypeScriptHelpers(),
    ]
}
let fuseBox1 = fsbx.FuseBox.init(config1);
fuseBox1.bundle('>app/heroes/heroes.module.ts');
// fuse.bundle({
//     "_build/test_vendor.js": "+path",
//     "_build/app.js": ">[index.ts]"
// });