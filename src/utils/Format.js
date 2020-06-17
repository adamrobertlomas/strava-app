const Format = {
  FormatAsKm: function (metres) {
    const km = metres / 1000;

    return km.toFixed(1) + " km";
  },
  FormatDateTime: function (datetime) {
    const date = new Date(datetime);

    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);

    return `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
  },
  FormatElapsedTime: function (elapsedTime) {
    var hours = ("0" + Math.floor(elapsedTime / 3600)).slice(-2);
    var minutes = ("0" + Math.floor((elapsedTime % 3600) / 60)).slice(-2);
    var seconds = ("0" + Math.floor((elapsedTime % 3600) % 60)).slice(-2);

    return `${hours}:${minutes}:${seconds}`;
  },
};

export default Format;
