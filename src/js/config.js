export default {
  container: '#gjs',
  fromElement: true,
  height: '100%',
  style: '[mv-app]{min-height:100px}',
  plugins: ['gjs-blocks-basic', 'gjs-plugin-forms', 'mavoPlugin', 'customHtmlPlugin'],
  layerManager: {
    appendTo: '#layers-container'
  },
  panels: {
    defaults: [
      {
        id: 'panelLeft',
        el: '.column.left',
        resizable: {
          tc: 0,
          cr: 1,
          bc: 0,
          keyWidth: 'flex-basis',
          keyHeight: null
        }
      },
      {
        id: 'panelRight',
        el: '.column.right',
        resizable: {
          tc: 0,
          cr: 0,
          cl: 1,
          bc: 0,
          keyWidth: 'flex-basis',
          keyHeight: null
        }
      },
      {
        id: 'views',
        el: '#buttons-view',
        buttons: [
          {
            id: 'open-style-manager',
            className: 'fa fa-paint-brush',
            command: 'open-sm',
            active: true,
            attributes: { title: 'Open Style Manager' }
          },
          {
            id: 'open-traits-manager',
            className: 'fa fa-cog',
            command: 'open-tm',
            attributes: { title: 'Settings' }
          },
          {
            id: 'open-blocks-manager',
            className: 'fa fa-th-large',
            command: 'open-blocks',
            attributes: { title: 'Open Blocks' }
          }
        ]
      },
      {
        id: 'views-container',
        el: '#views-container'
      },
      {
        id: 'devices-c',
        el: '#devices-container'
      },
      {
        id: 'options',
        el: '#options-container',
        buttons: [
          {
            id: 'undo',
            className: 'fa fa-undo',
            command: 'core:undo',
            attributes: {
              'data-tooltip': 'Undo',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'redo',
            className: 'fa fa-repeat',
            command: 'core:redo',
            attributes: {
              'data-tooltip': 'Redo',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'clear',
            className: 'fa fa-trash',
            command: editor => confirm('Are you sure to clean the canvas?') && editor.runCommand('core:canvas-clear'),
            attributes: {
              'data-tooltip': 'Clear',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            active: true,
            id: 'sw-visibility',
            className: 'fa fa-square-o',
            command: 'sw-visibility',
            context: 'sw-visibility',
            attributes: {
              'data-tooltip': 'View components',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'preview',
            className: 'fa fa-eye',
            command: editor => editor.runCommand('preview-app'),
            context: 'preview',
            attributes: {
              'data-tooltip': 'Preview',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'fullscreen',
            className: 'fa fa-arrows-alt',
            command: 'fullscreen',
            context: 'fullscreen',
            attributes: {
              'data-tooltip': 'Fullscreen',
              'data-tooltip-pos': 'bottom'
            }
          },
          {
            id: 'export-template',
            className: 'fa fa-code',
            command: 'export-template',
            attributes: {
              'data-tooltip': 'View code',
              'data-tooltip-pos': 'bottom'
            }
          }
        ]
      }
    ]
  }
}