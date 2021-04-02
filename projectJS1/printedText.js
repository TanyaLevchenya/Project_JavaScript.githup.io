// Печатающийся текст
export function printedText (pCitation, citation) {
    const text = pCitation.textContent;
      for (let i = 0; i < text.length; i++) {
        (function (i) {
        setTimeout(function() {
          const span = document.createElement('span');
          span.append(text[i]);
          span.className = 'effect';
          citation.append(span);
        }, 85 * i);
      }(i));
    }
  }