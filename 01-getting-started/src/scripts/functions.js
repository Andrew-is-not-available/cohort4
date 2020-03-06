const functions = {

    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply:  (num1,num2) => {
        return num1*num2;
    },

    divide: (num1,num2) => {
        return num1/num2;
    },

    taxMePlease: (taxableIncome) => {
        // return("Congratulations, you are tax exempt for life wooooooot");
        if(taxableIncome<0) return ""
        if (taxableIncome <= 48535) return taxableIncome*0.15;
        if (taxableIncome > 48535  && taxableIncome <= 97069) 
        return 48535*0.15+(taxableIncome-48535)*0.205;
        if (taxableIncome > 97069  && taxableIncome <= 150473) 
        return 48535*0.15+(97069-48535)*0.205+(taxableIncome-97069)*.26;
        if (taxableIncome > 150473  && taxableIncome <= 214368) 
        return 48535*0.15+(97069-48535)*0.205+(150473-97069)*.26+
        (taxableIncome-150473)*0.29;
        if (taxableIncome > 214368) 
        return 48535*0.15+(97069-48535)*0.205+(150473-97069)*.26+
        (214368-150473)*0.29+(taxableIncome-214368)*0.33;
    }

};


export default functions;
