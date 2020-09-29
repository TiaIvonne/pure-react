// state as an object
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const MultiCounter = () => {
    const [counts, setCounts] = useState({
        countA: 0,
        countB: 0
    });

    const incrementA = () => (
        setCounts(counts => ({
            ...counts,
            countA: counts.countA + 1
        }))
    );

    // ambas funciones de incremento llegan al mismo resultado, una usa una arrow function y la otra no
    // const incrementB = () => (
    //     setCounts({
    //         ...counts,
    //         countB: counts.countB + 1
            
    //     })
    // );

    const incrementB = () => (
        setCounts(counts => ({
        ...counts,
        countB: counts.countB + 1
    }))
    );




    // aqui la funcion no hace el contenio pues no estoy iterando sobre el objeto
    // if your state is a complex value like an object or array, you need to take care, when updating it, 
    // to copy in all the other parts that you don’t intend to change.
    // The ...spread operator is a big help for making copies of arrays and objects.
    const badIncrementA =() => (
        setCounts({
            // aqui falta un spread operator que itere
            countA: counts.countA + 1
        })
    );

    return (
        <>
        <div>A: {counts.countA}</div>
        <div>B: {counts.countB}</div>
        <button onClick={incrementA}> Increment A</button>
        <button onClick={incrementB}> Increment B</button>
        <button onClick={badIncrementA}>Bad increment A</button>
        </>
    );
}

ReactDOM.render(
    <MultiCounter/>,
    document.getElementById('root')
)