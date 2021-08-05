
import './App.css';
import React from "react";

class App extends React.Component{
  state = {
    keys:["*","+","-","0","1","2","3","4","5","6","7","8","9","=","CLR"],
    operater:"",
    value1:"",
    value2:"",
    result:"" }

    calculate = ()=>{
      let value;

      if(this.state.operater == "*")
        value = parseInt(this.state.value1) * parseInt(this.state.value2);
      else if(this.state.operater == "+")
        value = parseInt(this.state.value1) + parseInt(this.state.value2);
      else if(this.state.operater == "-")
        value = parseInt(this.state.value1) -parseInt(this.state.value2);

      return value;
    }
    

   render = ()=>{
     return (
     <div >
       <div className = " display" >{this.state.result}</div>
       <div className = "keys">
         {
           this.state.keys.map(
             (ele)=>
             {
               return (
                 <div 
                  className="key" 
                  onClick = {
                      ()=>{

                        if(ele == "CLR"){
                          this.setState({operater:"",value1:"",value2:"",result:""});
                          return ;
                        }
                        if(ele == "*" || ele =="-" || ele =="+" )
                        { 
                          if(this.state.value1 != "")
                            if( this.state.operater == "" )
                            {
                              this.setState({operater:ele,result:this.state.result +ele})
                            }
                            else if(this.state.value2 != ""){
                              let value = this.calculate();
                              this.setState({operater:ele,value1:`${value}`,value2:"",result:`${value}${ele}`})

                            }
                        }
                        else if(ele == "=" && this.state.value2 != ""){
                         
                          let value = this.calculate();
                          this.setState({operater:"",value1:`${value}`,value2:"",result:`${value}`})

                        }
                        else if(ele != "="){
                          
                          if(this.state.operater == '')
                          {
                                this.setState({value1:this.state.value1+ele,result : this.state.result + ele})
                          }
                          else{
                                this.setState({value2:this.state.value2+ele,result : this.state.result+ele})
                          }
                        }
                        


                      }


                  }
                      
                >{ele}</div>
               )
             }
           )
         }
         </div>
     </div>
     );
   }
}
export default App;
