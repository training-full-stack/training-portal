import React, { Component } from 'react';
import ListItem from '../components/listItem';

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = 
        {
            isAddMode: false, 
            list: [
                {name:'Jon Doe', age:'25', course:'React', enrolled:'Yes'},
                {name:'Ram Singh', age:'32', course:'Node', enrolled:'No'},
                {name:'Gabbar Singh', age:'21', course:'Mongo', enrolled:'Yes'},
                {name:'Amir Khan', age:'27', course:'Spring', enrolled:'No'}                
            ] 
        };
    }

    deleteItem = (param) => {
        debugger;
        let newList = this.state.list.filter(item => item !== param);
        this.setState({
            ...this.state,
            list: newList
        })
    }

    addHandler= () => {
        this.setState({
            ...this.state,
            isAddMode: true,
            list: [...this.state.list, {name:'', age:'', course:'', enrolled:''}]
        })
    }

    render() {
        return (
        <div>
            <div style={{textAlign:"right", padding:"1rem"}}>
                <button onClick={this.addHandler}>Add new item</button>
            </div>
            {
                this.state.list.map(item => {
                    return(
                        <ListItem
                            student={item}
                            deleteItem = {this.deleteItem}
                        />
                    )
                })
            }
        </div>
        );
    }
}

export default Body;