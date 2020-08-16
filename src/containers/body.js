import React, { Component } from 'react';
import ListItem from '../components/listItem';
import Layout from '../components/common/layout';

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = 
        {
            isAddMode: false, 
            list: [
                {id:1, name:'Jon Doe', age:'25', course:'React', enrolled:'Yes'},
                {id:2, name:'Ram Singh', age:'32', course:'Node', enrolled:'No'},
                {id:3, name:'Gabbar Singh', age:'21', course:'Mongo', enrolled:'Yes'},
                {id:4, name:'Amir Khan', age:'27', course:'Spring', enrolled:'No'}                
            ],
            selectedId: null 
        };
    }

    deleteItem = (param) => {
        let newList = this.state.list.filter(item => item !== param);
        this.setState({
            ...this.state,
            list: newList
        })
    }

    updateItem = () => {
        this.setState({
            ...this.state,
            selectedId: null
        })
    }

    studentSelectHandler = (id) => {
        this.setState({
            ...this.state,
            selectedId: id
        })
    }

    valueUpdateHandler = (e, id, field) => {
        let newVal = e.target.value;
        let temp = this.state.list.find(item => item.id === id);

        if(field === 'name')
            temp.name = newVal;
        if(field === 'age')
            temp.age = newVal;
        if(field === 'course')
            temp.course = newVal;
        if(field === 'enrolled')
            temp.enrolled = newVal;

        let newList = this.state.list.filter(item => item.id !== id);
        newList.push(temp);
        
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

        const inputList = this.state.list.sort((a,b) => {
            let comparer = 0;

            if(a.id > b.id)
                comparer = 1;
            else if(a.id < b.id)
                comparer = -1

            return comparer;
        })

        return (
            <Layout>
                <div style={{padding:"1rem"}}>
                    <div style={{textAlign:"right", padding:"1rem"}}>
                        <button onClick={this.addHandler}>Add new item</button>
                    </div>
                    {
                        inputList.map(item => {
                            return(
                                <ListItem
                                    student={item}
                                    deleteItem = {this.deleteItem}
                                    studentSelectHandler = {this.studentSelectHandler}
                                    selectedId = {this.state.selectedId}
                                    valueUpdateHandler = {this.valueUpdateHandler}
                                    updateItem = {this.updateItem}
                                />
                            )
                        })
                    }
                </div>
            </Layout>        
        );
    }
}

export default Body;