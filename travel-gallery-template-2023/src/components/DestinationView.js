(function (){
    // style elements
    const style = document.createElement('style');

    style.textContent = `
        .destination-main-container {
            align-items: center;
            width: 100vw;
            background-image: url(../assets/world-map-reduced.svg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            /* background-size:auto 100%; */
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 2rem;
        }
    
        .destination-images-container {
            display: flex;
            flex-direction: row;
            /* height: 100vh; */
            justify-content: center;
            padding-left: 3rem;
            padding-right: 3rem;
            gap: 3rem;
            align-items: center;
            flex-wrap: wrap;
        } 

        .destination-images-container img {
            transition: all 0.15s ease;
            object-fit: cover;
            min-height: 25%;
            min-width: 20%;
        }

        .destination-images-container img:hover {
            cursor: pointer;
            transform: scale(1.01);
            box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
        }

        .destination-images-container input {
            display: none;
        }

        .dots {
            display: flex;
            justify-content: center;
            /* margin: 5px; */
            /* gap: 10px; */
            /* cursor: pointer;
            transition: all 0.15s ease; */
        }

        .dots label {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: solid white 3px;
            cursor: pointer;
            transition: all 0.15s ease;
            margin: 5px;
        }

        .dots label:hover {
            background-color: white;
            scale: 1.2;
        }

        .dots label:checked {
            background-color: pink;
            scale: 1.4;
        }

        #destination-image-1:checked ~ .destination-image-1 {
            margin-left: 0;
            scale: 1.6;
            z-index: 1;
        }

        #destination-image-2:checked ~ .destination-image-2 {
            margin-left: 0%;
            scale: 1.6;
            z-index: 1;
        }

        #destination-image-3:checked ~ .destination-image-3 {
            margin-left: 0%;
            scale: 1.6;
            z-index: 1;
        }

        /* media queries */
        @media screen and (max-width: 643px) {
            .destination-main-container {
                background-image: none;
            }

            .dots {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    
})