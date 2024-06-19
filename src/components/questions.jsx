import React, { useState, useEffect } from 'react'
import { fetchApi } from './api'
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { Link } from 'react-router-dom'
//https://b2c6-2c0f-2a80-e-b410-d0c2-e8cf-36d4-3a97.ngrok-free.app/v1/sessions/start
 
const questions = () =>{
  const [count, setCount] = useState(0)
  const [res, setRes] = useState('')
  const [result, setResult] = useState({})

  const fetchServer = () => {
    fetch('https://b2c6-2c0f-2a80-e-b410-d0c2-e8cf-36d4-3a97.ngrok-free.app/v1/sessions/start', {
      method: 'POST',
      headers: 'Application/json',
      body: {}
    })
  }

  const { data, isFetching, error} = useQuery({
    queryFn: () => fetchApi(),
    queryKey: ["api"],
   
  });
  function handleChange(e) {
    setRes(e.target.value)
  
  }
  function handleClick(e) {
    setCount(c => c + 1)
    if (count===0 || count=== 1 )
    setResult(prev => ({
      ...prev, [count]:res
    }))
    setRes('')
   
    
  }
   console.log(result)
  if (isFetching) return <div className='m-auto w-3/4 loading loading-spinner text-secondary h-2/4'>
    <span className=""></span>
  </div>
  if (error) {
    return <div role="alert" className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Error! Unable to load data.</span>
  </div>
  }
  
  //console.log(data)
  let career =''
  const { question, options } = data[count].body
  if (data[count].id === 10) {
    if (result['0'] === 'Computer Engineering') career = options[0]
    else if (result['0'] === 'Computer Science with Economics') career = options[1]
    else career=options[2]
  }
  return (
    data[count].id!==10?
     < div className='max-w-fit flex flex-col px-16 w-3/4 m-auto h-1/5 ' >
        <p className='text-2xl mb-8 '>{question}</p>
        <div className='min-h-40'>
          {options.map((el, i) => {
            
          return (
            <div className='flex flex-row mb-2 min-h-6 mt-2' key={i} >
              <input type="radio" name={data[count].body.id} className="radio"
                value={el}
                checked={el===res}
                onChange={handleChange} />
              <label htmlFor={data[count].body.id} >{ el}</label>
            </div>
          )  
            })}
        </div>
        <button className="btn btn-accent  w-full mt-8"
          onClick={handleClick}>Next</button>
       
      </div>
      :(
      <div className='max-w-fit flex flex-col px-16 w-3/4 m-auto  ' >
        <h3 className='text-8xl mb-6 '>Recommendation</h3>
        <p className='text-2xl'>{career.career} </p>
        <div className='flex flex-col w-full items-center'>
            <p className='text-4xl'>Confidence</p>
          <div className="radial-progress text-2xl" style={{ "--value": career.confidence, "--size": "8rem", "--thickness": "1rem" }} role="progressbar">{career.confidence}%</div>
        </div>
        <p>{()=>options.reason} </p>
        <Link to={'/'}><button className="btn btn-secondary  w-full mt-8">Back to Home</button></Link>
        </div>
      )
  )
  }
  


export default questions