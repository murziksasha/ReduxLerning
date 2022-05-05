//ЭТо и есть action creatoru:
export const zero = () => ({type: 'ZERO'});
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (value) => ({type: 'RND', payload: value});