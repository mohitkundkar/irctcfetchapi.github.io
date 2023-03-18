// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd2e4f9080amsh1310860b33036c8p15bf8cjsnb37865b314af',
// 		'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
// 	}
// };

// fetch('https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=bju&toStationCode=bdts', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


let form = document.getElementById('myform');

const handleform = (e) => {

    e.preventDefault();


    const fromStationCode = document.getElementById('station').value;
    const toStationCode = document.getElementById('tostation').value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd2e4f9080amsh1310860b33036c8p15bf8cjsnb37865b314af',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    fetch(`https://irctc1.p.rapidapi.com/api/v2/${fromStationCode}/${toStationCode}`, options)
        .then(response => response.json())
        .then(response => {

            if (!response) {

                alert('data not found');
                console.log('data not found')

            }
            else {

                response.map((cval) => {

                    document.getElementById('result').innerHTML+=`

                        <div>
                            <h1>Train Name :-  ${cval.train_name}</h1>
                            <h1>Class Type :- ${cval.class_type}</h1>

                        </div>

                        `
                })

            }


        })
        .catch(err => console.error(err));


}


form.addEventListener('submit', handleform);








