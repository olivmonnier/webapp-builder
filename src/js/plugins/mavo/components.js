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
            type: 'input',
            label: 'Customize how property is edited',
            name: 'mv-edit'
          },
          {
            type: 'input',
            label: 'Hide or show element by condition',
            name: 'mv-if'
          },
          {
            type: 'checkbox',
            label: 'Become a collection',
            name: 'mv-multiple'
          },
          {
            type: 'input',
            label: 'Other collection accepted',
            name: 'mv-accepts'
          },
          {
            type: 'select',
            label: 'Sort collection when new item added',
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
            label: 'Storage',
            name: 'mv-storage',
            default: 'none',
            options: [
              { name: 'none', value: 'none' },
              { name: 'local', value: 'local' }
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