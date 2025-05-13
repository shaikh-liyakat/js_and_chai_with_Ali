/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// ❗ NOTE that ❗
/*
Closer :

closer is that scope where we store properties of parent function or outer function by there user of there property in inner function and return that inner function by outter function  after removing of outter or parent existance when they execute

*/



function grandfather()
{
    let gp = 10000;
    let gp_surname =" gp-name"
    // console.log(`this grandpa func money ${gp}`)

    function father()
    {
        let father = 100000
        let father_name = gp_surname
        // console.log(`this is father func and there money ${father}`);

        function son()
        {
            let son = 100000;
            let son_surname = father_name
        //    return console.log(`this is sun func surname ${son_surname} and there money ${son} `);
        return (`${son}  ${son_surname}  ${father}  ${father_name}    ${gp}   ${gp_surname}`)
        }
        return son() 
        }

        return father()
    }

    

    






// debugger
// let properties = grandfather()
// console.dir(properties);
// grandfather()



function b()
{
    let a=0
    function child ()
    {
       a = a+1
       return a;
        // console.log(object);
    }

    return child()
}

// let call1 = b()


// let call2 = a(30)

// console.dir(call1);
// console.dir(call2);
