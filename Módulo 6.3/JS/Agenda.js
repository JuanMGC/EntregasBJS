const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  const myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];
  
  function generateAvailability(team) {
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < WORK_HOURS.length; j++) {
        const random = Math.random();
        if (random < 0.2) {
          team[i].availability[j] = false;
        }
      }
    }
  }
  
  function showAvailability(team) {
    for (let i = 0; i < team.length; i++) {
      console.log(team[i].name);
      console.log("---------------");
      for (let j = 0; j < WORK_HOURS.length; j++) {
        if (team[i].availability[j]) {
          console.log(WORK_HOURS[j] + ": Available");
        } else {
          console.log(WORK_HOURS[j] + ": Not available");
        }
      }
      console.log("");
    }
  }
  
  function checkAvailability(team, startTime, endTime) {
    let available = true;
    for (let i = startTime; i <= endTime; i++) {
      for (let j = 0; j < team.length; j++) {
        if (!team[j].availability[i]) {
          available = false;
          break;
        }
      }
      if (!available) {
        break;
      }
    }
    return available;
  }
  
  function showMessage(startTime, endTime, available) {
    if (available) {
      console.log("Todos los miembros del equipo están disponibles en la franja horaria de " + WORK_HOURS[startTime] + " a " + WORK_HOURS[endTime]);
    } else {
      console.log("No hay disponibilidad para todos los miembros del equipo en la franja horaria de " + WORK_HOURS[startTime] + " a " + WORK_HOURS[endTime]);
    }
  }
  
  generateAvailability(myTeam);
  
  showAvailability(myTeam);
  
  const startTime = 1; // índice de la hora de inicio (08:00 - 09:00)
  const endTime = 2; // índice de la hora de finalización (09:00 - 10:00)
  
  const available = checkAvailability(myTeam, startTime, endTime);
  
  showMessage(startTime, endTime, available);
  