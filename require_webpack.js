module.exports.getRequireLoader = function (filePath, chunkName, moduleName, inline) {
    var requireString = module.exports.getRequireString(filePath, moduleName);
    var webpackChunkName = chunkName ? ', \'' + chunkName + '\'' : '';

    var result = [
        'loadChildren: () => new Promise(function (resolve) {',
        '  (require as any).ensure([], function (require: any) {',
        '    resolve(' + requireString + ');',
        '  }' + webpackChunkName + ');',
        '})'
    ];

    return inline ? result.join('') : result.join('\n');
};