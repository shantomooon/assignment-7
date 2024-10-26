import { useEffect, useState } from "react";


const fake = () => {
    const [fake, setFake] = useState([])
    useEffect( () =>{
        fetch('/fake.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    console.log(fake)
    return (
        <div>
           {
          Fake.map(Fake=><p>{Fake.Fake_name}</p>)
        }
        </div>
    );
};

export default fake;