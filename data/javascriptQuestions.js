window.javascriptQuestions = {
    set1: Array.from({length: 50}, (_, i) => ({
        id: `JS1_${i+1}`, type: "objective", question: `JS Question ${i+1}?`, codeSnippet: "", 
        options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: "Option A", explanation: "Option A is correct."
    }))
};
for (let i = 2; i <= 10; i++) {
    window.javascriptQuestions['set' + i] = window.javascriptQuestions.set1.map(q => ({ ...q, id: q.id.replace('JS1_', 'JS'+i+'_'), question: `[Set ${i}] ` + q.question })); 
}
