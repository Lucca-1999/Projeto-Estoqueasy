import React,{useState} from "react";

 
const Producao = ({tableData,setTableData}) => {
  const [tasks,setTasks]=useState([
    {
      nome:"nome produto"
    },    
  ]);

  



const handleproduce = ()=>{
  const dataselected = tableData.find((item)=>item.nomeProduto.includes(tasks))
  const newtabledata = tableData.map((item,index)=>{
    if (item===dataselected){
      return {
        ...item,qtdProduto:parseInt(item.qtdProduto)+parseInt(Qtd)
      }
    }
    return item
  })
  setTableData(newtabledata)
}
let navigate = useNavigate();
const [Qtd,setQtd]=useState("");

  console.log(tableData)
 
  return (
    <div id="produzir">
      <div id="producao">
          <div id="header">
                <h2>Produção</h2>
              </div>
              <h1>Clique produzir para salvar no Estoqueasy</h1>
            <table class="producao">
                <tr>
                <th>Nome do produto</th>
                <th>Quantidade</th>  
                </tr>
                <tbody>
                <tr>
                <th><input type="text"onChange={(e)=>setTasks(e.target.value)}></input></th>
                <th><input type="number"onChange={(e)=>setQtd(e.target.value)}></input></th>    
                </tr>
                </tbody>
                  <tr>
                
                
                  </tr>
                  <tr>
                                
                  </tr>  
                       
              </table>
          
         
          <button type="menu" onClick={handleproduce} class="btn_3">produzir</button>       
 

      </div>
    </div>  
  )
}

export default Producao;
