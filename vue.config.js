module.exports = () => ({
    chainWebpack: config => {
        config
            .entry('app')
            .add('./src/styles/main.scss')
            .end();

        // lazy load
        config.plugins.delete('prefetch').end();
    }
});
