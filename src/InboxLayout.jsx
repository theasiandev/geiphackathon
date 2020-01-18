import React from 'react'
import { Redirect } from 'react-router-dom'

async function getChat(sender, receiver) {
    let data = JSON.stringify({
            "sender" : sender,
            "receiver" : receiver, 
        })
    console.log(data);
    let response = await fetch('http://127.0.0.1:5000/getchat', {
        method : 'POST',
        body : data,
    })

    let body = await response.json()
    return body
}

class InboxLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { messages : [] }
    }

    componentDidMount() {
        // async call to fetch user's messages here
        getChat("JayZ", "Jiali").then( (reply) => {
            console.log(reply, "outside")
            this.setState({ messages : reply.message })
        })

    }

    render() {
    const { messages } = this.state
    const items = []
    for (const message of messages) {
        items.push(<li key={index}>{message}</li>)
    }
        return(
        <div className="mt-5 p-5">
            <h1 >Inbox</h1>
            <ul>
                {items}
            </ul>
        </div>)
    }
}

export default InboxLayout;

