/* eslint-disable max-len */
/* eslint-disable node/no-unpublished-require */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const DUMMIES = {
    png: {
        base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
        type: 'image/png'
    },
    jpg: {
        base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q==',
        type: 'image/jpeg'
    },
    gif: {
        base64: 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=',
        type: 'image/gif'
    }
};

function surpassImage404sMiddleware(req, res, next) {
    const imageExt = req.url.split('.').pop();
    const dummy = DUMMIES[imageExt];

    if (dummy) {
        const img = Buffer.from(dummy.base64, 'base64');
        res.writeHead(200, {
            'Content-Type': dummy.type,
            'Content-Length': img.length
        });
        return res.end(img);
    }
    next();
}

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [ 'jasmine', '@angular-devkit/build-angular' ],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma'),
            { 'middleware:surpassImage404sMiddleware': [ 'value', surpassImage404sMiddleware ] },
        ],
        client: {
            jasmine: {
                // you can add configuration options for Jasmine here
                // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
                // for example, you can disable the random execution with `random: false`
                // or set a specific seed with `seed: 4321`
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true // removes the duplicated traces
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage/curiculum-vitae'),
            subdir: '.',
            reporters: [
                { type: 'html' },
                { type: 'text-summary' }
            ]
        },
        reporters: [ 'progress', 'kjhtml' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: process.env.NODE_ENV === 'production' ?
            [ 'ChromeHeadless' ] : [ 'Chrome' ],
        customLaunchers: {
            ChromeHeadless: {
                base: 'ChromeHeadless',
                flags: [ '--no-sandbox' ]
            }
        },
        singleRun: false,
        restartOnFileChange: true,
        middleware: [ 'surpassImage404sMiddleware' ],
    });
};
