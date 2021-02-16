import React, { Component } from "react";
import { Table } from "antd";

class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  hitAPI = () => {
    fetch("https://api.covid19india.org/data.json")
      .then((e) => e.json())
      .then((e) => {
        console.clear();
        console.log(e);
        let stateData = e.statewise;
        let flagOnce = false;
        let columnsArray = [];
        console.log(stateData);
        stateData.filter((e) => {
          if (!flagOnce) {
            columnsArray = Object.keys(e);
            console.log(columnsArray);
            flagOnce = true;
          }
          let rowArray = []
          for (let index = 0; index < columnsArray.length; index++) {
            const element = columnsArray[index];
            // console.log(e[element])
            rowArray.push(e[element])
          }
          console.log(rowArray);
          if (e.state !== "Total" && e.state !== "State Unassigned") {

          }
        });
      });
  };
  render() {
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street",
      },
      {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
      },
    ];

    const columns = [
      {
        title: "State",
        dataIndex: "state",
        key: "state",
      },
      {
        title: "Confirmed",
        dataIndex: "confirmed",
        key: "dataindex",
      },
      {
        title: "Active",
        dataIndex: "active",
        key: "active",
      },
      {
        title: "Recovered",
        dataIndex: "recovered",
        key: "recovered",
      },
      {
        title: "Deaths",
        dataIndex: "deaths",
        key: "deaths",
      },
    ];
    return (
      <div>
        {this.hitAPI()}
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default First;
