
/*

language: JAVASCRIPT
framework: REACT
Project name is 'TODOLIST'

*/

import React, {Component} from 'react';
import {
    Button,
    Col,
    Container,
    Input,
    InputGroup,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading, ListGroupItemText, Progress,
    Row
} from "reactstrap";

class App extends Component {

    state={
        task:"",
        todos:[],
        completeTask:0

    }

    handleInputChange=(e)=>{
        this.setState({
            task:e.target.value
        })
    }

    add=()=>{
        this.setState({
            todos: this.state.todos.concat(
                {
                    id:Date.now(),
                    task:this.state.task,
                    isCompleted:false
                }
            ),
            task:""
        })
    }

    complete=(e)=>{
        var cnt=0
        this.setState({
                todos:this.state.todos.map((todo) => {
                    if (e.target.value == todo.id) {
                        todo.isCompleted = !todo.isCompleted
                    }
                    if (todo.isCompleted) {
                        cnt++
                    }
                    return todo

                }),
                completeTask : cnt
            }
        )
    }

    render() {
        console.log()

        return (
            <div>
            <Container className={"big-align pt-5"}>
                <Row>
                    <Col md={{size:8,offset:2}}>
                        <InputGroup>
                            <Input onChange={this.handleInputChange} value={this.state.task}/>
                            <Button onClick={this.add}>
                                Add task
                            </Button>
                        </InputGroup>


                <ListGroup Flush>
                    {
                        this.state.todos.map((todo) => {

                           return  <ListGroupItem>
                               <ListGroupItemHeading>
                                   Task
                               </ListGroupItemHeading>
                               <ListGroupItemText>
                                   {todo.task}
                                   <input type={"checkbox"} value={todo.id} checked={todo.isCompleted} onClick={this.complete}/>
                               </ListGroupItemText>
                           </ListGroupItem>
                        })
                    }
                </ListGroup>

                <Progress color="success" value={this.state.completeTask/this.state.todos.length*100}/>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

App.propTypes = {};

export default App;