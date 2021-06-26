const data = [
    {
      "to": "Chandigarh",
      "from": "Delhi",
      "departTime": "10:00 AM",
      "arrivalTime": "12:00 PM",
      "departDate": "2021-06-26",
      "arrivalDate": "2021-06-26",
      "flightId": "CD-201",
      "price": 9500
    },
    {
      "to": "Chandigarh",
      "from": "Delhi",
      "departTime": "5:00 PM",
      "arrivalTime": "1:00 AM",
      "flightId": "CD-202",
      "departDate": "2021-06-26",
      "arrivalDate": "2021-06-26",
      "price": 10500
    },
    {
      "to": "Delhi",
      "from": "Chandigarh",
      "departTime": "2:00 AM",
      "arrivalTime": "1:00 PM",
      "flightId": "CD-201",
      "departDate": "2021-06-27",
      "arrivalDate": "2021-06-27",
      "price": 9500
    },
    {
      "to": "Delhi",
      "from": "Chandigarh",
      "departTime": "4:00 PM",
      "arrivalTime": "3:00 AM",
      "flightId": "CD-202",
      "departDate": "2021-06-28",
      "arrivalDate": "2021-06-28",
      "price": 10500
    },
    {
      "to": "Pune",
      "from": "Delhi",
      "departTime": "10:00 AM",
      "arrivalTime": "12:00 PM",
      "departDate": "2021-06-29",
      "arrivalDate": "2021-06-29",
      "flightId": "CD-201",
      "price": 7700
    },
    {
      "to": "Pune",
      "from": "Delhi",
      "departTime": "5:00 PM",
      "arrivalTime": "1:00 AM",
      "departDate": "2021-06-27",
      "arrivalDate": "2021-06-27",
      "flightId": "CD-202",
      "price": 2700
    },
    {
      "to": "Delhi",
      "from": "Pune",
      "departTime": "2:00 AM",
      "arrivalTime": "1:00 PM",
      "departDate": "2021-06-30",
      "arrivalDate": "2021-06-30",
      "flightId": "CD-201",
      "price": 6700
    },
    {
      "to": "Delhi",
      "from": "Pune",
      "departTime": "4:00 PM",
      "arrivalTime": "3:00 AM",
      "departDate": "2021-07-01",
      "arrivalDate": "2021-07-01",
      "flightId": "CD-202",
      "price": 5500
    }
  ];


function flightType(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.querySelector('#returnDiv').addEventListener('submit', (e) => {
      e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data.returnDate);
    var filteredFlights = filterFlights(data);
    getReturnFlights(filteredFlights)
    //console.log(filteredFlights)
    var html ="<div class='card'>"
    filteredFlights.forEach(function(item, index){
        html+=getCardHtml(item);
    });
    html+="</div>";
    document.getElementById("cardsContainer").innerHTML = html;
    getReturnFlights(filteredFlights)
    
  });

  function filterFlights(searchData){
    return data.filter(function(item, index){
        //console.log(item.arrivalDate)
        //console.log(searchData.returnDate)

        //console.log(item.from, searchData.originCity,  item.to, searchData.destinationCity, 
        //    item.departDate, searchData.departureDate, item.arrivalDate, searchData.returnDate)
        
        //    console.log(item.from === searchData.originCity && item.to === searchData.destinationCity && 
        //    item.departDate === searchData.departureDate && item.arrivalDate === searchData.returnDate)
        return item.from === searchData.originCity && item.to === searchData.destinationCity && 
        item.departDate === searchData.departureDate && item.arrivalDate === searchData.returnDate;
    })
  }
  
  function getCardHtml(item){
    return  `    
                <div class="details-row" style="border solid 2px;">
                        <div class="flight-details" style="width: 70%;">
                            <h2></h2>
                            <div class="details-row">
                            <div style="width: 50%;">
                                <small>`+item.flightId+`</small>
                                <p>`+item.to+`
                                > `+item.from+` <br>
                                Depart: `+item.departTime+` <br>
                                Arrive: `+item.arrivalTime+`<br>
                            </p>
                        </div>
                        <div class="book-flight" style="width: 30%;">
                        <div>
                            <div style="background-color: blue; width: 100%; height: 300px;">
                                <strong>X</strong>
                            </div>
                            <button type="button" style="width: 100%; height: 50px; margin-top: 10px;">
                                Book this Flight
                            </button>
                        </div>
                </div>
                    
            `
  }

  function getReturnFlights(filteredFlights){
      console.log(filteredFlights.arrivalDate)
      console.log(filteredFlights.departureDate)
      document.getElementsByClassName("arrivalDateDisplay").innerHTML =  filteredFlights.arrivalDate;
      document.getElementsByClassName("departureDateDisplay").innerHTML =  filteredFlights.departureDate;

  }