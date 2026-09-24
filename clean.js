const fs = require('fs');
const files = [
    'data/htmlQuestions.js',
    'data/cssQuestions.js',
    'data/javascriptQuestions.js',
    'data/bootstrapQuestions.js',
    'data/jqueryQuestions.js'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace < and > with &lt; and &gt; in question strings
    content = content.replace(/(question|correctAnswer|explanation):\s*"([^"]*)"/g, (match, p1, p2) => {
        return p1 + ': "' + p2.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '"';
    });
    
    // Replace < and > with &lt; and &gt; in options array strings
    content = content.replace(/options:\s*\[([^\]]*)\]/g, (match, p1) => {
        return 'options: [' + p1.replace(/</g, '&lt;').replace(/>/g, '&gt;') + ']';
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log('Cleaned ' + file);
});
