export default function (editor, config = {}) {
  const { Commands } = editor;

  Commands.add('preview-app', {
    run(editor, sender) {
      const html = editor.getHtml();
      const css = editor.getCss();
      const newWindow = window.open();

      const link = newWindow.document.createElement('link');
      link.href = `${window.location.origin}/mavo/mavo.css`;
      link.rel = 'stylesheet';
      newWindow.document.head.appendChild(link);

      const script = newWindow.document.createElement('script');
      script.src = `${window.location.origin}/mavo/mavo.min.js`;
      newWindow.document.head.appendChild(script);

      const styles = newWindow.document.createElement('style');
      styles.textContent = css;
      newWindow.document.head.appendChild(styles);
      
      newWindow.document.body.innerHTML = html;
    }
  })  
}