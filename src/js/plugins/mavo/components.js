export default function (editor, config = {}) {
  const { DomComponents } = editor;
  const defaultModel = DomComponents.getType('default').model;
  const defaultView = DomComponents.getType('default').view;

  DomComponents.addType('default', {
    model: defaultModel.extend({
      defaults: Object.assign(defaultModel.prototype.defaults, {
        traits: defaultModel.prototype.defaults.traits.concat([
          {
            type: 'input',
            label: 'Property',
            name: 'property'
          },
          {
            type: 'checkbox',
            label: 'Repeatable',
            name: 'mv-multiple'
          },
          {
            type: 'input',
            label: 'Properties',
            name: 'mv-accepts'
          }
        ])
      })
    }),
    view: defaultView
  })
}