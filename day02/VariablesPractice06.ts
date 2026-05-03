//It is not possible to define function which used const keyword outside a block

function constMethod02()
{
    if(true)
    {
        const msg06="This is a function which uses const keyword and is defined outside a block";
        //console.log(msg04);
    }
console.log(msg06);
}
constMethod02();