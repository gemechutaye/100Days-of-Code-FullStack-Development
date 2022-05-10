import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       index:0,
       name:"",
       price:0,
       action:"ADD ITEM",//default ADD ITEM
       items:[
          {
            name:"Iphone 6",
            price:120
          },
          {
            name:"Iphone 7",
            price:140
          },
          {
            name:"Iphone 8",
            price:160
          }
       ]
    }
  }

  //function changeName 
  changeName = (e)=>{
    this.setState({
       name:e.target.value
    })
  }

  //function changePrice
  changePrice=(e)=>{
    this.setState({
      price:e.target.value
    })
  }

  //ADD ITEM
  addItem=()=>{
    if(!this.state.items.find(item=>item.name===this.state.name)){
      this.setState({
        items:[
          ...this.state.items,
          {name:this.state.name,price:this.state.price}
        ],
        name:"",
        price:""
      });

    }
  }

  //EDIT ITEM
  editItem=(item,index)=>{
     console.log(item);
     this.setState({
       index:index,
       name:item.name,
       price:item.price,
       action:'UPDATE ITEM'
     })
  }

  //UPDATE ITEM
  updateItem = ()=>{
     let items = this.state.items;
     items.map((item,index)=>{

        if(this.state.index===index){
          item.name = this.state.name;
          item.price = parseInt(this.state.price)
        }

     })

     //set update items
     this.setState({
        items:items,
        name:"",
        price:0,
        action:'ADD ITEM'
     })
  }

  //DELETE ITEM
  deleteItem = (name)=>this.setState({
    items: this.state.items.filter(item=>item.name!=name)
  })

  
  render() {
    return (
      <div>
         <div className="container">
            <div className = "row">
                <div className="col-md-4">
                   <h1>{this.state.action}</h1>
                   <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" value={this.state.name} onChange={this.changeName}/>
                   </div>
                   <div className="form-group">
                      <label>Price</label>
                      <input type="text"  className="form-control"  value={this.state.price} onChange={this.changePrice}/>
                   </div>
                   <div className="form-group">
                      <button className="btn btn-primary" onClick={this.state.action==='ADD ITEM'?this.addItem:this.updateItem}>

                       {this.state.action==='ADD ITEM'?'Add':'Update'}

                      </button>
                   </div>
                </div>
                <div className="col-md-8">
                  <h1>List Items</h1>
                   <table className="table">
                       <thead>
                         <tr>
                           <th>Index</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Remove</th>
                           <th>Modify</th>
                         </tr>
                       </thead>
                       <tbody>
                            {
                              this.state.items.map((item,index)=>(
                                 <tr key={index}>
                                   <td>{index}</td>
                                   <td>{item.name}</td>
                                   <td>{item.price}</td>
                                   <td><span className="badge badge-danger" onClick={()=>this.deleteItem(item.name)}>remove</span></td>
                                   <td><span className="badge badge-warning" onClick={()=>this.editItem(item,index)}>modify</span></td>
                                 </tr>
                              ))
                            }
                       </tbody>
                   </table>
                </div>
            </div>
         </div>
      </div>
    )
  }
}

export default App
