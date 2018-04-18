import loadComponents from './components';

export default grapesjs.plugins.add('mavoPlugin', (editor, opts = {}) => {
  const defaultOpts = {
    // Defaults
  }
  const options = Object.assign({}, defaultOpts, opts);

  loadComponents(editor, options);
});