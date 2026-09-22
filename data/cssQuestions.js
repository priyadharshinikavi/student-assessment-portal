window.cssQuestions = {
    set1: Array.from({length: 50}, (_, i) => ({
        id: `C1_${i+1}`, type: "objective", question: `CSS Question ${i+1}?`, codeSnippet: "", 
        options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: "Option A", explanation: "Option A is correct."
    }))
};
for (let i = 2; i <= 10; i++) {
    window.cssQuestions['set' + i] = window.cssQuestions.set1.map(q => ({ ...q, id: q.id.replace('C1_', 'C'+i+'_'), question: `[Set ${i}] ` + q.question })); 
}
