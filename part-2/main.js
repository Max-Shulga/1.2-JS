/**
 * Handles the selection of a CSV file, reads its content, and sets up event listeners
 * for text enrichment based on the top 10 cities' information.
 *
 * 1. Gets the selected CSV file from the input element.
 * 2. Reads the content of the CSV file using FileReader with 'windows-1251' encoding.
 * 3. Sets up an event listener to create a text enrichment function when the file is loaded.
 * 4. Attaches an event listener to the 'change-text-btn' to enrich the input text.
 */
function handleCSVFileSelection() {
    const selectedFiles = document.getElementById('cities-csv').files

    if (selectedFiles.length > 0) {
        const selectedFile = selectedFiles [0];
        const fileReader = new FileReader();
        fileReader.readAsText(selectedFile, 'windows-1251')

        fileReader.onload = (event) => {
            const csvData = event.target.result;
            const enrichTextFunction = createCityEnriches(csvData);

            const changeTextBtn = document.getElementById('change-text-btn');

            changeTextBtn.addEventListener('click', () => {
                const textArea = document.getElementById('cities-textarea');
                const inputText = textArea.value;

                textArea.value = enrichTextFunction(inputText);
            })
        }
    }
}

/**
 * Parses the CSV file to object view. Stores an array of keys in memory for replacement.
 *
 * @param csvText - input CSV file
 * @returns {function(*): *} - function to enrich text
 */
function createCityEnriches(csvText) {

    const cityInfoMap = parseCSVToCityMap(csvText);
    const keysToReplace = Object.keys(cityInfoMap);


    /**
     *  function for text enrichment,
     *  Argument text in witch Cities names will be replaced by the :
     *  `({City name} місце в ТОП-10 самих великих міст України, населення {city population} чоловік)`)
     */
    return function enrichTextByCityNames(inputText) {
        let resultText = inputText;
        keysToReplace.forEach(element => {
            if (inputText.includes(element)) {
                resultText = resultText.replaceAll(element,
                    `(${element} місце в ТОП-10 самих великих міст України, населення ${element} чоловік)`)
            }
        })
        return resultText
    }

    /**
     * Parses the CSV text into a map of city information.
     *
     * 1. Trim and split the CSV text into an array of lines.
     * 2. Filter out comment lines and empty lines.
     * 3. Map each CSV line to an object representing city information.
     * 4. Sort the cities based on population in descending order.
     * 5. Take the top 10 cities and reduce them into a map, assigning ratings.
     *
     * @param {string} csvText - The CSV text to be parsed.
     * @returns {Object} - A map where keys are city names, and values are objects with population and rating.
     */
    function parseCSVToCityMap(csvText) {
        return csvText
            .trim()
            .split('\n')
            .filter(line => !(line.includes('#') || line.length === 0))
            .map(mapCSVLine)
            .sort((a, b) => b.population - a.population)
            .slice(0, 10)
            .reduce((map, city, currentIndex) => {
                const cityName = city.name;
                map[cityName] = {
                    population: city.population,
                    rating: ++currentIndex
                };
                return map;
            }, {});
    }

    /**
     * Maps a CSV line to an object representing city information.
     *
     * @param {string} line - The CSV line to be mapped.
     * @returns {Object} - An object with properties for x, y, name, and population.
     */
    function mapCSVLine(line) {
        const fields = line.split(';');
        return {
            x: +fields[0],
            y: +fields[1],
            name: fields[2],
            population: +fields[3]
        }
    }
}


