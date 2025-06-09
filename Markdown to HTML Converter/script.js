const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

const regex = {
    headingRegex: /^(#+)\s*(.+)/,
    boldRegex: /(?:\*\*|__)(.+?)(?:\*\*|__)/g,
    italicRegex: /(?:\*|_)(.+?)(?:\*|_)/g,
    imgRegex: /!\[(.+?)\]\s*\((.+?)\)/g,
    linkRegex: /\[(.+?)\]\((.+?)\)/g,
    quoteRegex: /^>\s*(.+)/,
};

function convertMarkdown() {
    const html = [];
    let markdownLines = markdownInput.value.split('\n');

    for (let line of markdownLines) {
        line = line.replace(regex.boldRegex, '<strong>$1</strong>');
        line = line.replace(regex.italicRegex, '<em>$1</em>');
        line = line.replace(regex.imgRegex, '<img alt="$1" src="$2">')
        line = line.replace(regex.linkRegex, '<a href="$2">$1</a>');
        line = line.replace(regex.quoteRegex, '<blockquote>$1</blockquote>')
        
        if (regex.headingRegex.test(line)) {
            let [, hashes, text] = line.match(regex.headingRegex);
            const lvl = hashes.length;
            line = `<h${lvl}>${text}</h${lvl}>`
        }
        html.push(line)
}
return html.join("\n")
}
markdownInput.addEventListener('input', function () {
    let markdownConverted = convertMarkdown();
    htmlOutput.textContent = markdownConverted;
    preview.innerHTML = markdownConverted;
});
