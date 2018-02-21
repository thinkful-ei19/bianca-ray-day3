function makeStudentsReport(data){
    const result = [];
    for(let i = 0; i < data.length; i++){
       const person = data[i];
        result.push(`${person.name}: ${person.grade}`);
    }
    return result;
}

function enrollInSummerSchool(students){
   const result = [];
   for(let i = 0; i < students.length; i++){
       result.push({
        name: students[i].name,
        status: 'In Summer school',
        course: students[i].course,
       });
   }
   return result;
}

function findById(items, idNum){
    for(let i =0; i < items.length; i++){
        if(idNum === items[i].id){
            return items[i];
        }
    }
}

function validateKeys(object, expectedKeys){
    for(let i = 0; i < object.length; i++){
        if(expectedKeys.length !== Object.keys(object).length){
            return false;
        }
         if(!Object.keys(object).find(key => key === expectedKeys[i])){
            return false;
        }
    }
    return true;
}