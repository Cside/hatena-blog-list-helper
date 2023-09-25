if (document.querySelector<HTMLInputElement>('input#syntax')?.value === 'markdown') {
  const input = document.querySelector<HTMLInputElement>('#body');
  if (!input) throw new Error('input#body is not found');

  input.addEventListener('keypress', (event) => {
    const ret = MarkdownHelper(input, event);
    if (ret === false) return event.preventDefault();
  });
}
