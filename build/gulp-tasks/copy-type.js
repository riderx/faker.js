const { src, dest, task } = require('gulp');

module.exports = function copyType () {
    return src('./type/faker.d.ts')
        .pipe(dest('./dist'));
};