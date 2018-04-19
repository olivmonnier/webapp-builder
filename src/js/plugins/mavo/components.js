export default function (editor, config = {}) {
  const { DomComponents } = editor;
  let defaultModel = DomComponents.getType('default').model;
  let defaultView = DomComponents.getType('default').view;

  DomComponents.addType('default', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
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
            label: 'Other collection accepted',
            name: 'mv-accepts'
          },
          {
            type: 'select',
            label: 'Order when added',
            name: 'mv-order',
            default:  'desc',
            options: [
              { name: 'desc', value: 'desc' },
              { name: 'asc', value: 'asc' }
            ]
          }
        ])
      })
    }),
    view: defaultView
  });

  DomComponents.addType('app-container', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        traits: [
          {
            type: 'input',
            label: 'Id',
            name: 'id'
          },
          {
            type: 'input',
            label: 'Title',
            name: 'title'
          },
          {
            type: 'select',
            label: 'Mode',
            name: 'mv-mode',
            default: 'edit',
            options: [
              { name: 'Edit', value: 'edit' },
              { name: 'Read', value: 'read' }
            ]
          }
        ]
      })
    }, {
      isComponent(el) {
        if (typeof el.hasAttribute == 'function' && el.hasAttribute('mv-app')) {
          return { type: 'app-container' }
        }
      }
    }),
    view: defaultView
  })
}