// import axios from 'axios'
// // no olvidar instalar axios npm install --save axios 
// // en la consola del browser se puede revisar el objeto 
// axios
//     .get(
//         `http://www.reddit.com/r/reactjs.json`
//     )
//     .then(response => {
//         const posts = response.data.data.children.map(
//             obj => obj.data
//         );
//         console.log(posts)
//     })
//     .catch(error => {
//         console.error(error)
//     });

// el mismo request de data pero con fetch que es estandar de JS
// no se debe importar nada

fetch(`http://www.reddit.com/r/reactjs.json`)
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw new Error ('He fallado estoi chikito');
    })
    .then( data => {
            const posts = data.data.children.map(
                obj => obj.data
            );
            console.log(posts);
        })
    .catch(error => {
        console.log(error);
    });
