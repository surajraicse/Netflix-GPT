const Test = ()=>{  
    function encap(){
        let a = 20;
        function increment(){
            a+=5;
            console.log(a);
        }
        return increment;
    }
    const fun = encap();
    fun();
    fun();
    fun();
    return <h1> Testing </h1>
}



export default Test;