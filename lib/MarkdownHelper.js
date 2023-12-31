// forked from http://github.com/jamiebicknell/Markdown-Helper
function MarkdownHelper(block, event) {
    var check, input, start, range, lines, state, value, first, prior, label, begin, width, caret;
    if (event.key === 'Enter') {
        check = false;
        input = block.value.replace(/\r\n/g, '\n');
        if (block.selectionStart) {
            start = block.selectionStart;
        } else {
            block.focus();
            range = document.selection.createRange();
            range.moveStart('character', -input.length);
            start = range.text.replace(/\r\n/g, '\n').length;
        }
        lines = input.split('\n');
        state = input.substring(0, start).split('\n').length;
        value = lines[state - 1].replace(/^\s+/, '');
        first = value.substring(0, 2);
        if (new RegExp('^[0-9]+[.] (.*)$').test(value)) {
            prior = value.substring(0, value.indexOf('. '));
            begin = prior + '. ';
            label = (parseInt(prior, 10) + 1) + '. ';
            check = true;
        }
        if (value && !check && lines[state - 1].substring(0, 4) === '    ') {
            begin = label = '    ';
            check = true;
        }
        if (['* ', '+ ', '- ', '> '].indexOf(first) >= 0) {
            begin = label = first;
            check = true;
        }
        if (check) {
            width = lines[state - 1].indexOf(begin);
            if (value.replace(/^\s+/, '') === begin) {
                block.value = input.substring(0, start - 1 - width - label.length) + '\n\n' + input.substring(start, input.length);
                caret = start + 1 - label.length - width;
            } else {
                block.value = input.substring(0, start) + '\n' + (new Array(width + 1).join(' ')) + label + input.substring(start, input.length);
                caret = start + 1 + label.length + width;
            }
            if (block.selectionStart) {
                block.setSelectionRange(caret, caret);
            } else {
                range = block.createTextRange();
                range.move('character', caret);
                range.select();
            }
            return false;
        }
    }
}

window.MarkdownHelper = MarkdownHelper;
