// console.log('Person1:shows ticket');
// console.log('Person2:shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log('wife: Here is the ticket');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => 
//         resolve(`${t} popcorn`));
    
// })

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband: I got some Popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need Butter on Popcorn');
//     return new Promise((resolve, reject) => 
//         resolve(`${t} Butter`));
    
// })

// const getColdDrinks = getButter.then((t)=>{
//     console.log('wife: I need ColdDrink also');
//     console.log('husband: we should go in');
//     return new Promise((resolve, reject) => 
//         resolve(`${t} ColdDrink`));
    
// })

// getColdDrinks.then((t)=>console.log(t));
// console.log('Person4:shows ticket');
// console.log('Person5:shows ticket');

console.log('Person1:shows ticket');
console.log('Person2:shows ticket');

const preMovie = async()=>{

    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve('ticket')
            },3000)
        })


        const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
        const addButter = new Promise((resolve, reject) => resolve(`Butter`));
        const addcoldDrink = new Promise((resolve, reject) => resolve(`coldDrink`));


         let ticket = await promiseWifeBringingTickets;
        // console.log(`wife: Here is the ${ticket}`);
        // console.log('husband: we should go in');
        // console.log('wife: no i am hungry');

        // let popcorn = await getPopcorn;
        // console.log(`husband: I got some ${popcorn}`);
        // console.log('husband: we should go in');
        // console.log('wife: I need Butter on Popcorn');

        // let coldDrink = await addcoldDrink;
        // console.log(`wife: I need ${coldDrink} also`);
        // console.log('husband: we should go in');

        let [popcorn,Butter,coldDrink] = await Promise.all([getPopcorn,addButter,addcoldDrink])

        console.log(`${popcorn},${Butter},${coldDrink}`);

        return ticket;

}

preMovie().then((m)=>console.log(`Person3: shows ${m} `));

console.log('Person4:shows ticket');
console.log('Person5:shows ticket');

