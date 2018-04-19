export default function (editor, config = {}) {
  const { BlockManager } = editor;

  BlockManager.add('app-container', {
    label: 'App Container',
    content: '<div mv-app></div>'
  });
}