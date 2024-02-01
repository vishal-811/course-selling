

function onclickhandler(){
    // alert("hi");
    <div className="bg-slate-500 text-black z-1 w-100 h-100"> {"Signout"} </div>
}
const Profilebtn =({userRole})=>{
    // console.log(userRole)
    return(
        <button onClick={onclickhandler} className="boorder-2 soild bg-blue-700 rounded-full  w-24 h-8 flex items-center justify-center text-white text-xl" >{"Hi,"+userRole}</button>
    )
}

export default Profilebtn;