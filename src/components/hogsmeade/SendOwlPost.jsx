import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { OWL_URL, headers } from "../services/index.js"

export default function SendOwlPost() {

  const [post, setPost] = useState('')
  const [name, setName] = useState('')
  const [results, setResults] = useState({})
  const { owl } = useParams()

  const history = useHistory()

  useEffect(() => {
    const getResults = async () => {
      const resultsURL = `${OWL_URL}/${owl}`
      const res = await axios.get(resultsURL, { headers })
      setResults(res.data)
    }
    getResults()
  }, [owl])

  const handlePost = async (e) => {
    e.preventDefault()
    const fields = {
      name,
      message: post,

    }
    await axios.post(OWL_URL, { fields }, { headers })
    history.push('/owl-post')
  }




  return (
    <>
      <div>
        <form className="owl-form" onSubmit={handlePost}>
          <input value={name} name="name" onChange={(e) => setName(e.target.value)}></input>
          <input value={post} name="message" onChange={(e) => setPost(e.target.value)}></input>
          <button>send</button>
        </form>
      </div>
      <div className="post-container">
        <h2>From: {results.fields?.name}</h2>
        <p>{results.fields?.message}</p>
      </div>
    </>
  )
}
