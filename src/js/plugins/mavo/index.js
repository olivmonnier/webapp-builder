import loadBlocks from './blocks';
import loadComponents from './components';
import loadCommands from './commands';

export default grapesjs.plugins.add('mavoPlugin', (editor, opts = {}) => {
  const defaultOpts = {
    // Defaults
  }
  const options = Object.assign({}, defaultOpts, opts);

  loadCommands(editor, options);
  loadComponents(editor, options);
  loadBlocks(editor, options);
});