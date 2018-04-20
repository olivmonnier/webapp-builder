export default function (editor, config = {}) {
  const { DomComponents } = editor;
  let defaultModel = DomComponents.getType('default').model;
  let defaultView = DomComponents.getType('default').view;

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
            default: 'read',
            options: [
              { name: 'read', value: 'read' },
              { name: 'edit', value: 'edit' }
            ]
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
  });

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

  defaultModel = DomComponents.getType('default').model;
  defaultView = DomComponents.getType('default').view;

  const inputModel = DomComponents.getType('input').model;
  const inputView = DomComponents.getType('input').view;

  DomComponents.addType('input', {
    model: inputModel.extend({
      defaults: Object.assign({}, inputModel.prototype.defaults, {
        traits: inputModel.prototype.defaults.traits.concat(defaultModel.prototype.defaults.traits)
      })
    }),
    view: inputView
  });

  const textareaModel = DomComponents.getType('textarea').model;
  const textareaView = DomComponents.getType('textarea').view;

  DomComponents.addType('textarea', {
    model: textareaModel.extend({
      defaults: Object.assign({}, textareaModel.prototype.defaults, {
        traits: textareaModel.prototype.defaults.traits.concat(defaultModel.prototype.defaults.traits)
      })
    }),
    view: textareaView
  });

  const selectModel = DomComponents.getType('select').model;
  const selectView = DomComponents.getType('select').view;

  DomComponents.addType('select', {
    model: selectModel.extend({
      defaults: Object.assign({}, selectModel.prototype.defaults, {
        traits: selectModel.prototype.defaults.traits.concat(defaultModel.prototype.defaults.traits)
      })
    }),
    view: selectView
  });

  const checkboxModel = DomComponents.getType('checkbox').model;
  const checkboxView = DomComponents.getType('checkbox').view;

  DomComponents.addType('checkbox', {
    model: checkboxModel.extend({
      defaults: Object.assign({}, checkboxModel.prototype.defaults, {
        traits: checkboxModel.prototype.defaults.traits.concat(defaultModel.prototype.defaults.traits)
      })
    }),
    view: checkboxView
  });
}