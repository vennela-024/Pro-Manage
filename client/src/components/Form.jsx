import React, {useState} from 'react'
import styles from "./styles/Form.module.css"

export default function Form(props) {
  const [name, setName] = useState("")
  const [condition, setCondition] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setCondition(true)
  }
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>Submit</button>
        { condition && <h1>{name}</h1>}
         <h1>We are {props.name}</h1>
        </form>
    </div>
  )
}




// export default function Form(props) {
//     const validateForm = () => {};

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//   return (
//     <div className={styles.container}>
//         <input 
//         type="text" 
//         placeholder='Email'
//         value='Email'
//         onChange={(e)=> setEmail(e.target.value)}
//         />
//         <input 
//         type="text" 
//         placeholder='Password'
//         value='Password'
//         onChange={(e)=> setPassword(e.target.value)}
//         />
//         <h1>We are {props.name}</h1>
//     </div>
//   )
// }
