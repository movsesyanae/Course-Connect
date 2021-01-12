import React, { useState} from 'react';

const Verification = (props) => {

    const [code, setCode] = useState(0)

    return(
        <body>
            <div>
                <h4> We need to verify your email </h4>
                <h4> Please check your umd email to for an email from us containing your security code </h4>
                <input type = 'text' placeholder = 'verification code' onChange = {(e) => setCode(e.target.value)}/>
            </div>
        </body>
    );

}

export default Verification;