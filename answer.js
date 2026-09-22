const questions = [
        { id: 'H1_01', type: 'objective', question: 'Which tag is used to create a hyperlink?', options: ['<a>', '<link>', '<href>', '<url>'], correctAnswer: '<a>' },
        { id: 'H1_02', type: 'objective', question: 'How do you create a numbered list?', options: ['<ol>', '<ul>', '<dl>', '<list>'], correctAnswer: '<ol>' },
        { id: 'H1_03', type: 'objective', question: 'Which attribute specifies the destination of a link?', options: ['src', 'href', 'link', 'url'], correctAnswer: 'href' },
        { id: 'H1_04', type: 'objective', question: 'What is the correct HTML element for inserting a line break?', options: ['<br>', '<lb>', '<break>', '<hr>'], correctAnswer: '<br>' },
        { id: 'H1_05', type: 'objective', question: 'Which input type is used for a dropdown list?', options: ['<input type=\'dropdown\'>', '<select>', '<dropdown>', '<list>'], correctAnswer: '<select>' },
        { id: 'H1_06', type: 'objective', question: 'How can you make a numbered list start with \'C\'?', options: ['<ol start=\'C\'>', '<ol type=\'A\' start=\'3\'>', '<ol letter=\'C\'>', '<ol begin=\'3\'>'], correctAnswer: '<ol type=\'A\' start=\'3\'>' },
        { id: 'H1_07', type: 'objective', question: 'What is the correct HTML for adding a background color?', options: ['<body bg=\'yellow\'>', '<background>yellow</background>', '<body style=\'background-color:yellow;\'>', '<body bgcolor=\'yellow\'>'], correctAnswer: '<body style=\'background-color:yellow;\'>' },
        { id: 'H1_08', type: 'objective', question: 'Which HTML element is used to specify a header for a document or section?', options: ['<head>', '<top>', '<header>', '<section>'], correctAnswer: '<header>' },
        { id: 'H1_09', type: 'objective', question: 'What is the correct HTML for creating a checkbox?', options: ['<input type=\'checkbox\'>', '<checkbox>', '<input type=\'check\'>', '<check>'], correctAnswer: '<input type=\'checkbox\'>' },
        { id: 'H1_10', type: 'objective', question: 'Which HTML element is used to display a scalar measurement within a known range?', options: ['<gauge>', '<range>', '<measure>', '<meter>'], correctAnswer: '<meter>' },
        { id: 'H1_11', type: 'objective', question: 'How do you group related elements in a form?', options: ['<group>', '<fieldset>', '<form-group>', '<section>'], correctAnswer: '<fieldset>' },
        { id: 'H1_12', type: 'objective', question: 'Which attribute is used to provide an advisory text about an element?', options: ['alt', 'title', 'info', 'tooltip'], correctAnswer: 'title' },
        { id: 'H1_13', type: 'objective', question: 'In HTML5, which element is used to specify a footer for a document or section?', options: ['<bottom>', '<footer>', '<section>', '<base>'], correctAnswer: '<footer>' },
        { id: 'H1_14', type: 'objective', question: 'What is the correct HTML for playing an audio file?', options: ['<sound>', '<audio>', '<mp3>', '<music>'], correctAnswer: '<audio>' },
        { id: 'H1_15', type: 'objective', question: 'Which HTML attribute specifies that an input field must be filled out?', options: ['validate', 'required', 'placeholder', 'important'], correctAnswer: 'required' },
        { id: 'H1_16', type: 'objective', question: 'How can you open a link in a new tab/browser window?', options: ['target=\'_new\'', 'target=\'_blank\'', 'open=\'new\'', 'window=\'_blank\''], correctAnswer: 'target=\'_blank\'' },
        { id: 'H1_17', type: 'objective', question: 'Which element is used to define navigation links?', options: ['<nav>', '<navigate>', '<navigation>', '<menu>'], correctAnswer: '<nav>' },
        { id: 'H1_18', type: 'objective', question: 'What does the <aside> element represent?', options: ['A sidebar', 'Content tangentially related to the content around it', 'A warning message', 'A popup'], correctAnswer: 'Content tangentially related to the content around it' },
        { id: 'H1_19', type: 'objective', question: 'Which input type allows the user to select a date?', options: ['<input type=\'date\'>', '<input type=\'datetime\'>', '<input type=\'time\'>', '<input type=\'calendar\'>'], correctAnswer: '<input type=\'date\'>' },
        { id: 'H1_20', type: 'objective', question: 'What is the correct HTML for a text area?', options: ['<input type=\'textarea\'>', '<textarea>', '<text>', '<input type=\'textbox\'>'], correctAnswer: '<textarea>' },
        { id: 'H1_21', type: 'objective', question: 'Which tag is used to embed a YouTube video?', options: ['<video>', '<iframe>', '<embed>', '<youtube>'], correctAnswer: '<iframe>' },
        { id: 'H1_22', type: 'objective', question: 'What does the <caption> element do?', options: ['Adds a title to an image', 'Adds a title to a table', 'Adds a caption to a video', 'Creates a tooltip'], correctAnswer: 'Adds a title to a table' },
        { id: 'H1_23', type: 'objective', question: 'Which element is used to highlight text?', options: ['<highlight>', '<mark>', '<hl>', '<strong>'], correctAnswer: '<mark>' },
        { id: 'H1_24', type: 'objective', question: 'What is the purpose of the <datalist> element?', options: ['To store data offline', 'To provide a list of pre-defined options for an <input>', 'To create a table', 'To list external scripts'], correctAnswer: 'To provide a list of pre-defined options for an <input>' },
        { id: 'H1_25', type: 'objective', question: 'How do you define a table row?', options: ['<td>', '<th>', '<tr>', '<table>'], correctAnswer: '<tr>' },
        { id: 'H1_26', type: 'objective', question: 'Which tag represents a piece of self-contained content, like a blog post?', options: ['<section>', '<div>', '<article>', '<post>'], correctAnswer: '<article>' },
        { id: 'H1_27', type: 'objective', question: 'What is the correct way to add a comment in HTML?', options: ['// Comment', '<!-- Comment -->', '\\\' Comment', '/* Comment */'], correctAnswer: '<!-- Comment -->' },
        { id: 'H1_28', type: 'objective', question: 'Which attribute specifies an alternate text for an image, if the image cannot be displayed?', options: ['title', 'src', 'alt', 'longdesc'], correctAnswer: 'alt' },
        { id: 'H1_29', type: 'objective', question: 'What is the correct HTML for making a radio button?', options: ['<input type=\'radio\'>', '<radio>', '<input type=\'radiobutton\'>', '<radiobutton>'], correctAnswer: '<input type=\'radio\'>' },
        { id: 'H1_30', type: 'objective', question: 'Which element is used to group tabular data?', options: ['<tbody>', '<table>', '<tr>', '<thead>'], correctAnswer: '<tbody>' },
        { id: 'H1_31', type: 'objective', question: 'Which of these elements are all <table> elements?', options: ['<table><head><tfoot>', '<table><tr><td>', '<table><tr><tt>', '<thead><body><tr>'], correctAnswer: '<table><tr><td>' },
        { id: 'H1_32', type: 'objective', question: 'How can you specify that an input field should automatically get focus when the page loads?', options: ['autofocus', 'focus', 'onload', 'active'], correctAnswer: 'autofocus' },
        { id: 'H1_33', type: 'objective', question: 'What does the <figure> element represent?', options: ['A diagram or illustration', 'Self-contained content like illustrations, diagrams, photos', 'A mathematical equation', 'A chart plugin'], correctAnswer: 'Self-contained content like illustrations, diagrams, photos' },
        { id: 'H1_34', type: 'objective', question: 'Which attribute is used to specify multiple files in an input?', options: ['multiple', 'files=\'true\'', 'array', 'list'], correctAnswer: 'multiple' },
        { id: 'H1_35', type: 'objective', question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Tool Markup Language'], correctAnswer: 'Hyper Text Markup Language' },
        { id: 'H1_36', type: 'objective', question: 'Who is making the Web standards?', options: ['Mozilla', 'Microsoft', 'The World Wide Web Consortium', 'Google'], correctAnswer: 'The World Wide Web Consortium' },
        { id: 'H1_37', type: 'objective', question: 'What is the correct HTML element for the largest heading?', options: ['<h1>', '<heading>', '<h6>', '<head>'], correctAnswer: '<h1>' },
        { id: 'H1_38', type: 'objective', question: 'What is the correct HTML element for defining important text?', options: ['<strong>', '<b>', '<important>', '<i>'], correctAnswer: '<strong>' },
        { id: 'H1_39', type: 'objective', question: 'What is the correct HTML element for defining emphasized text?', options: ['<i>', '<italic>', '<em>', '<strong>'], correctAnswer: '<em>' },
        { id: 'H1_40', type: 'objective', question: 'Which character is used to indicate an end tag?', options: ['*', '^', '<', '/'], correctAnswer: '/' },
        { id: 'H1_41', type: 'objective', question: 'How can you make an email link?', options: ['<a href=\'mailto:xxx@yyy\'>', '<a href=\'xxx@yyy\'>', '<mail href=\'xxx@yyy\'>', '<a mail=\'xxx@yyy\'>'], correctAnswer: '<a href=\'mailto:xxx@yyy\'>' },
        { id: 'H1_42', type: 'objective', question: 'In HTML, which attribute is used to specify that an input field is read-only?', options: ['readonly', 'disabled', 'locked', 'static'], correctAnswer: 'readonly' },
        { id: 'H1_43', type: 'objective', question: 'Which HTML element is used to specify a drop-down list?', options: ['<list>', '<select>', '<dropdown>', '<input type=\'list\'>'], correctAnswer: '<select>' },
        { id: 'H1_44', type: 'objective', question: 'Which of the following is NOT an HTML5 element?', options: ['<article>', '<header>', '<blink>', '<footer>'], correctAnswer: '<blink>' },
        { id: 'H1_45', type: 'objective', question: "How do you specify a regular expression that an <input> element's value is checked against?", options: ['regex', 'pattern', 'match', 'validate'], correctAnswer: 'pattern' },
        { id: 'H1_46', type: 'objective', question: 'Which attribute is used to define the character encoding in the <meta> tag?', options: ['charset', 'encoding', 'type', 'lang'], correctAnswer: 'charset' },
        { id: 'H1_47', type: 'objective', question: 'What is the purpose of the <base> element?', options: ['To define the base layout', 'To specify a default URL and target for all relative links', 'To define a database connection', 'To reset CSS'], correctAnswer: 'To specify a default URL and target for all relative links' },
        { id: 'H1_48', type: 'objective', question: 'Which HTML tag is used to draw graphics via scripting (usually JavaScript)?', options: ['<svg>', '<canvas>', '<graphic>', '<draw>'], correctAnswer: '<canvas>' },
        { id: 'H1_49', type: 'objective', question: 'What does the <iframe> element do?', options: ['Embeds an image', 'Embeds another HTML document', 'Creates a form', 'Defines a frame for CSS'], correctAnswer: 'Embeds another HTML document' },
        { id: 'H1_50', type: 'objective', question: 'Which HTML attribute specifies the visible width of a <textarea>?', options: ['width', 'size', 'cols', 'span'], correctAnswer: 'cols' }
];

const seedStr = '101_html_1';
let seed = 0;
for (let i = 0; i < seedStr.length; i++) {
    seed = seedStr.charCodeAt(i) + ((seed << 5) - seed);
}
const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
};
for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
}

questions.forEach((q, idx) => {
    let optLetter = '';
    const optIndex = q.options.indexOf(q.correctAnswer);
    if(optIndex === 0) optLetter = 'A';
    if(optIndex === 1) optLetter = 'B';
    if(optIndex === 2) optLetter = 'C';
    if(optIndex === 3) optLetter = 'D';
    console.log((idx+1) + ' ' + optLetter);
});
