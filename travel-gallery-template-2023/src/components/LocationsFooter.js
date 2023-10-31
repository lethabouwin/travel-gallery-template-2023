

(function () {
    // Create a style element and add CSS rules
    const style = document.createElement('style');
    style.textContent = `
        body { 
            font-family: 'Roboto', sans-serif;
        }

        .locations-container {
            border-top: 2px solid white;
            display: flex;
            flex-direction: row;
            gap: 25px;
            margin-left: 200px;
            margin-right: 200px;
            padding-left: 0px;
            padding-right: 15px;
            position: relative;
            top: -15px;
            z-index: -1;
            justify-content: center;
        }

        .location {
            display: flex;
            flex-direction: column;
            width: 30%;
        }
    
        .location-name {
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            padding-top: 10px;
            text-align: start;
            color: #606060;
        }
        
        .location-description {
            font-size: 10px;
            font-weight: 600;
            color: #7E8F9A;
            text-align: start;
        }

        @media screen and (max-width: 660px) {
            .locations-container {
                flex-wrap: wrap;
                gap: 30px;
                justify-content: center;
                padding-top: 20px;
                border-top:none;
                margin-left: 10px;
                margin-right: 10px;
                padding-left: 0px;
                padding-right: 0px;
            }

            .location-description {
                text-align: justify;
            }

            .location-circle-marker-1 {
                background-image: linear-gradient(to right, #FFA4AA, #FF406F);
            }
            
              .location-circle-marker-1:hover {
                cursor: pointer;
                transform: scale(1.1);
              }
            
              .location-circle-marker-2 {
                background-image: linear-gradient(to right, #FFC853, #FFA157);
              }
            
              .location-circle-marker-2:hover {
                cursor: pointer;
                transform: scale(1.1);
              }
            
              .location-circle-marker-3 {
                background-image: linear-gradient(to right, #969696, #969696);
              }
            
              .location-circle-marker-3:hover {
                cursor: pointer;
                transform: scale(1.1);
              }
            
              .location-circle-marker-4 {
                background-image: linear-gradient(to right, #969696, #969696);
            }
            
              .location-circle-marker-4:hover {
                cursor: pointer;
                transform: scale(1.1);
              }
            
              .location-circle-marker-5 {
                background-image: linear-gradient(to right, #969696, #969696);
              }
            
              .location-circle-marker-5:hover {
                cursor: pointer;
                transform: scale(1.1);
              }
            
        }
    `;
    document.head.appendChild(style);

    // Create location elements and append them to the locations container
    const locationsContainer = document.querySelector('.locations-container');

    const locationsData = [
        { name: 'Port Louis, Mauritius', description: `Date: .` },
        { name: 'Dublin, Ireland', description: `Date: .` },
        { name: 'In Progress', description: 'This trip is in progress!' },
        { name: 'In Progress', description: 'This trip is in progress!' },
        { name: 'In Progress', description: 'This trip is in progress!' },
    ];

    locationsData.forEach((locationData, index) => {
        const location = document.createElement('div');
        location.classList.add('location');

        const circleMarker = document.createElement('div');
        circleMarker.classList.add(`location-circle-marker-${index + 1}`);
        circleMarker.style.height = '10px';
        circleMarker.style.width = '10px';
        circleMarker.style.borderRadius = '50%';


        const name = document.createElement('span');
        name.classList.add('location-name');
        name.textContent = locationData.name;

        const description = document.createElement('span');
        description.classList.add('location-description');
        description.textContent = locationData.description;

        location.appendChild(circleMarker);
        location.appendChild(name);
        location.appendChild(description);

        locationsContainer.appendChild(location);
    });

    // add an event listener to the location name elements. When 'Port Louis, Mauritius' is clicked, open the modal populated with Mauritius images
    const location1 = document.querySelector('.location-name');

})();


