import React,{Component} from 'react'

export class Render extends Component {

  constructor(){
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

        ]
    }
}


    List(data) {
        const info = data.map(item => {
            return(
                <React.Fragment key={item.id}>
                    <li>
                        <span>Id: {item.id}  </span>
                        <span>Name: {item.name} </span>
                        <span>User Type: {item.user_type}</span>
                    </li>
                </React.Fragment>
            ) 
        })
        return info
    }

    userType(data,userType) {
        const dt = data.filter(item => item.user_type == userType)
        return this.List(dt)
    }

    letter(data,letter) {
        const dt = data.filter(item => item.name.startsWith(letter))
        return this.List(dt)
    }

    age(data) {
        const dt = data.filter(item => item.age > 28 && item.age <= 50)
        return this.List(dt)
    }

    years() {
        const design = this.state.userData.filter(user => user.user_type === 'Designer');
        const sum = design.map(designer => designer.years).reduce((acc, curr) => acc + curr, 0);
        return sum;
      }

    render() {
        return (
        <>
            <h1>Display all items</h1>
            <div className="data">
            <div> 
                <ul>{this.List(this.state.userData)}</ul>
            </div>
            </div>
            <h1>Display based on user yype</h1>
            <div className='user'>
                <ul>{this.userType(this.state.userData,"Designer")}</ul>
            </div>
            <h1>Filter all data starting with J</h1>
            <div className='letter'>
                <ul>{this.letter(this.state.userData,"J")}</ul>
            </div>
            <h1>Filter the data based on Age Greater than 28 and Less than or Equal to 50</h1>
            <div className='age'>
                <ul>{this.age(this.state.userData)}</ul>
            </div>
            <h1>Find the total years of the designers</h1>
            <div className='years'>
                <p>{this.years()}</p>
            </div>
        </>
        )
    }

}

export default Render