//It is not possible to define function which used let keyword outside a block

function letMethod02()
{
    if(true)
    {
        let msg04="This is a function which uses let keyword and is defined outside a block";
        //console.log(msg04);
    }
console.log(msg04);
}
letMethod02();