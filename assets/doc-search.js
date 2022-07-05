require(["gitbook"], function(gitbook) {
    var pluginsConfig = {};
    var initDocSearch = function() {
        var cfg = pluginsConfig.docSearch;
        docsearch({
            apiKey: cfg.apiKey,
            appId: cfg.appId
            indexName: cfg.index,
            container: '#book-search-input',
            debug: false
        });
    }
    gitbook.events.bind("start", function(e, config) {
        pluginsConfig = config;
        initDocSearch();
    });
    gitbook.events.bind("page.change", function() {
        initDocSearch();
    });
});
