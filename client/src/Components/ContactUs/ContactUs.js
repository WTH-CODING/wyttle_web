import React from 'react'

const ContactUs = () => {
    return (
        <div className="container">
      <div className="row mt-4" style={{border: "3px solid #656565",margin: "0", padding: "0"}}>
        <iframe
          title="chatbot"
          allow="microphone;"
          width="350"
          height="500"
          src="https://console.dialogflow.com/api-client/demo/embedded/352fcce2-b043-4796-a650-34c4603d60fa"
        ></iframe>
      </div>
      </div>
    );
}

export default ContactUs
