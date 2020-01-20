import React from 'react'

async function getChat(sender, receiver) {
    let data = JSON.stringify({
            "sender" : sender,
            "receiver" : receiver, 
        })
    let response = await fetch('http://127.0.0.1:5000/getchat', {
        method : 'POST',
        body : data,
    })

    let reply = await response.json()
    return reply
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
        
        let messageElement;
        messageElement = messages.map( (message) => {
            return(<li>{ message.content }</li>)
        })

        return(
            <div className="mt-5 p-5">
                <h1 >Inbox</h1>
                <ul>
                    {messageElement}
                </ul>
            </div>)
        }
}

export default InboxLayout;

