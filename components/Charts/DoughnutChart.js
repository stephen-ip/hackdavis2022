import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart(props) {
  const games = ["memorytiles", "slidepuzzle", "numbermemo"];
  var gameCount = [];
  for (var i = 0; i < games.length; i++) {
    const game = games[i];
    var gameCounter = 0;
    for (var j = 0; j < props.matchhistory.length; j++) {
      if (
        props.matchhistory[j].username == props.username &&
        props.matchhistory[j].game == game
      ) {
        gameCounter += 1;
        console.log(props.matchhistory[j]);
      }
    }
    gameCount.push(gameCounter);
  }
  const data = {
    labels: ["memorytiles", "slidepuzzle", "numbermemo"],
    datasets: [
      {
        label: "# of games played",
        data: gameCount,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
