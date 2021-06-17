var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

var urls = [];

module.exports = {
    book: {
        assets: './assets',
        js: [
             'doc-search-lib.js',
             'doc-search.js'
        ],
        css: [
            'doc-search.css'
        ]
    },
    hooks: {
        "page": function (page) {

            if (this.output.name != 'website') return page;

            var lang = this.isLanguageBook() ? this.config.values.language : '';
            if (lang) lang = lang + '/';

            var outputUrl = this.output.toURL('_book/' + lang + page.path);
            var normalizedUrl = outputUrl + (path.extname(outputUrl) !== '.html' ? 'index.html' : '');
            if (!urls.some(item => item.url === normalizedUrl)) {
                urls.push({
                    url: normalizedUrl
                });
            }

            return page;
        }
    }
}
