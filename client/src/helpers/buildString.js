const randomString = () => {
    const chars = '0123456789abcdefghiklmnopqrstuvwxyz ';
    const lengths = [5, 10, 15, 20];
    const selectedLength = lengths[Math.floor(Math.random() * lengths.length)];
    const string_length = 1 + Math.random() * selectedLength;
    let randomStr = '';
    for (let i = 0; i < string_length; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        randomStr += chars.substring(rnum, rnum + 1);
    }
    return randomStr;
};

const buildString = (args) => {
    let string = '';
    let s;
    for (s of args) {
        string += s + ' ';
    }
    if (!string) {
        string = randomString();
    }
    return string;
};
export default buildString;
