let a = {
    id: 1,
    name: 'Carlton Moseti',
    age: 23,
    address: {
        physical: 'P.O BOX 55034',
        code: '00200',
        city: 'Nairobi',
        country: 'Kenya',
    }
}

let newA = {
    name: 'Carlton John Moseti',
    age: 24,
    address : {
        city: 'Nairobi Central',
        isoCountryCode: 'KE'
    }
}

const isObject = (obj={})=>{
    return typeof obj === "object" && !Array.isArray(obj);
}

const deepMerge = (a={},newA={})=>{
    if (Object.keys(newA).length!==0){
        Object.keys(newA).forEach(property=>{
            if (!a.hasOwnProperty(property)){
                a[property] = newA[property];
            }else{
                if (isObject(a[property]) && isObject(newA[property])){
                    deepMerge(a[property],newA[property]);
                }else{
                    a[property] = newA[property];
                }
            }
        });
    }
}

console.log('Before : ', a);
console.log('Changes : ', newA);

deepMerge(a,newA);

console.log('After : ', a);