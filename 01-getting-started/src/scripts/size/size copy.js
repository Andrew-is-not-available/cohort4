// number size
const functions1 = {
    isSize: (num) => {
        if (num < 10) {
            return ("small");
        }
        else if (num >=10 && num <20) {
            return ("medium");
        }
        else if (num >= 20) {
            return ("large");
        }
    }
};

export default functions1;
