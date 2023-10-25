

(function () {
    // Create a style element and add CSS rules
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: 'Roboto', sans-serif;
        }
        .locations-container {
            border-top: 3px solid white;
            display: flex;
            flex-direction: row;
            gap: 30px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .location {
            display: flex;
            flex-direction: column;
            width: 30%;
          }
    
          .location-name {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            padding-top: 10px;
            text-align: start;
            color: #606060;
          }
        
          .location-description {
            font-size: 10px;
            font-weight: 300;
            color: #7E8F9A;
            text-align: start;
            color: #7E8F9A;
          }
    `;
    document.head.appendChild(style);

    // Create location elements and append them to the locations container
    const locationsContainer = document.querySelector('.locations-container');

    const locationsData = [
        { name: 'Alaska, USA', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.' },
        { name: 'Sao Paulo, Brazil', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.' },
        { name: 'Lagos, Nigeria', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.' },
        { name: 'St Petersburg, Russia', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.' },
        { name: 'Sydney, Australia', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.' },
    ];

    locationsData.forEach((locationData, index) => {
        const location = document.createElement('div');
        location.classList.add('location');

        const circleMarker = document.createElement('div');


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
})();
