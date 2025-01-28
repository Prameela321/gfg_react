import {useState, useEffect}  from 'react';
function Signup(){
    const [signUp,setSignup] = useState(false );
    const [fname ,setfname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [register,setRegister] = useState(false);
    const [login,setLogin] = useState(false);
    
    function handleSubmit(e){
        e.preventDefault();
        // console.log("handle");
        !signUp ? setRegister(true) : setLogin(true);
    }
    
    useEffect(()=>{
       setTimeout(()=>{
            if(signUp)
            console.log(localStorage.getItem('accessToken'));
        },2000);
     },[signUp])


    useEffect(()=>{
    
        fetch('https://node-mongo-1.onrender.com/registerUser',{
            method : 'POST',
            header : {
                "Content-Type" : 'application/json'
            },
            body : JSON.stringify({
                userName : fname,
                email : email,
                password : password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("data",data);
            setSignup(true);
        })
        .catch(err => err.message);

        console.log("register");
        
    },[register]);

    // function login(){
    //     console.log("login",JSON.stringify({
    //         email : email,
    //         password : password
    //     }));
    //     fetch('https://node-mongo-1.onrender.com/login',{
    //         method : 'POST',
    //         header : {
    //             "Content-Type" : 'application/json'
    //         },
    //         body : JSON.stringify({
    //             email : email,
    //             password : password
    //         })
    //     })
    //     .then(response => {
    //         // console.log(response.json(),"res");
    //         response.json()
    //     })
    //     .then(data => {
    //         console.log("data",data);
    //         setSignup(true);
    //         localStorage.setItem("accessToken",data.accessToken);
    //     })
    //     .catch(err => err.message);

        
    // }
    return (
        <> 
            <form onSubmit={handleSubmit} className="loginform">
             { 
                !signUp &&  <div>
                            <span>Full Name</span>
                            <input type="text" name="name" id="name" onChange={(e)=>setfname(e.target.value)} />
                        </div>
             }
             <div>
                <span>Email</span>
                <input type="email" name="email" id="email"  onChange={(e)=> setemail(e.target.value)}/>
              </div>
             <div>
                <span>Password</span>
                <input type="password" name="password" id="password"  onChange={(e)=> setpassword(e.target.value)}/>
              </div>
              <div>
                <button type="submit">{ !signUp  ? "Register" : "Login"}</button>
              </div>
            </form>
        </>
    )
}
export default Signup;