import React, { useState, useEffect } from 'react'
import axios, {Axios} from 'axios'
import { json } from 'react-router-dom'

const questions = () => {
  const [question, setQuestion] = useState([])
  const [response, setResponse] = useState({})
  const fetch = async () => {
     let res = await axios.post('https://cpc-api.fly.dev/v1/sessions/start')
    setQuestion(res.data) 
    
   }
  useEffect(() => {
    try {
      fetch()
      console.log(question.payload)
    } catch {
      console.log(error)
    }
  }, [])
  
  
    // switch (question.payload.question.kind) {
    //   case 'MCQ':
    //     return (
    //       < div className='items-center flex flex-col px-16 w-3/4 m-auto' >
    //         <p className='text-2xl'>{question.question.body}</p>
    //         {question.question.options.map((e, i) => {
    //           <div className='flex flex-row p-2'>
    //             <input type="radio" name={`option-${i}`} className="radio" />
    //             <p>{e}</p>
    //           </div>
    //         })}
    //         <button className="btn btn-accent  w-2/5 my-2">Next</button>
    //       </div>
    //     )
    //   case 'PROMPT':
    //     return (
    //       < div className='items-center flex flex-col px-16 w-3/4 m-auto' >
    //         <p className='text-2xl'>{question.question.body}</p>
    //         <textarea className="textarea textarea-info w-2/5 h-1/5 border-2" placeholder=""></textarea>
    //         <button className="btn btn-accent  w-2/5 my-2">Next</button>
    //       </div>
    //     )
    //   default:
    //     return (
    //       < div className='items-center flex flex-col px-16 w-3/4 m-auto' ></div>
    //     )
    // }
  }
  


export default questions