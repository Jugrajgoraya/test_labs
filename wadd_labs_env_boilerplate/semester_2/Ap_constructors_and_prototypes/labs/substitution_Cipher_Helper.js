class SubstitutionCipher{
    constructor(a, b){ 
        this.a = a;
        this.b = b;
    }
    encode(string){
        this.result = '';
        for (let char of string){
            for (let i =0; i<this.a.length; i++){
                if(char === this.a[i]){
                    if(this.b[i]){
                        this.result += this.b[i];
                    }else{
                        this.result += this.a[i];
                    }
                }
            }
        }
        return this.result;
    }
    decode(string){
        this.result = '';
        for (let char of string){
            for (let i =0; i<this.b.length; i++){
                if(char === this.b[i]){
                    if(this.a[i]){
                        this.result += this.a[i];
                    }else{
                        this.result += this.b[i];
                    }
                }
            }
        }
        return this.result;
    }
}

const scipher = new SubstitutionCipher("abcdefghijklmn","opqrstuvwxyz");

console.log(scipher.encode("akn"));
