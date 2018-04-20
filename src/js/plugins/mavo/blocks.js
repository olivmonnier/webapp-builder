export default function (editor, config = {}) {
  const { BlockManager } = editor;

  BlockManager.add('app-container', {
    attributes: { class: 'fa fa-caret-square-o-right' },
    label: 'App Container',
    content: '<div mv-app></div>'
  });
}