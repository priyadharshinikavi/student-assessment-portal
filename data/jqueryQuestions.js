window.jqueryQuestions = {
    set1: Array.from({length: 50}, (_, i) => ({
        id: `JQ1_${i+1}`, type: "objective", question: `jQuery Question ${i+1}?`, codeSnippet: "", 
        options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: "Option A", explanation: "Option A is correct."
    }))
};
for (let i = 2; i <= 10; i++) {
    window.jqueryQuestions['set' + i] = window.jqueryQuestions.set1.map(q => ({ ...q, id: q.id.replace('JQ1_', 'JQ'+i+'_'), question: `[Set ${i}] ` + q.question })); 
}
