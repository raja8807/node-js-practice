module.exports = createHtml = function createHtml(title,parentElement, content) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <${parentElement}>
        ${content}
        </${parentElement}>
    </body>
    </html>`
}

