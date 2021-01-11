function solve(input){
    input = input.split('\\')
    for (let token of input) {
        if (token.includes('.')){
            token = token.split('.');
            console.log(`File name: ${token[0]}`);
            console.log(`File extension: ${token[1]}`)
        }
    }
}
solve('C:\\Internal\\training-internal\\Template.pptx')
