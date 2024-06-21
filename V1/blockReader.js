const readBlock = async() => {
    try {
        let blockhash = $('#hash').val();

        console.log(blockhash)
        const response = await fetch(`https://api.voyager.online/beta/blocks/${blockhash}`, {
            method: "GET",
            headers: {
            Accept: "application/json",
            "x-api-key": "SKHz4zIjOS8FkTmK5BU5JQAJfVUAepU8XU45s7Kh"
                    }});

            if(response.ok) {
                const myJSON = await response.json();
                console.log(myJSON)

                let convertedTimestamp = new Date(myJSON.timestamp * 1000)

                $("#blockNO").html(myJSON.blockNumber)
                $("#txnC").html(myJSON.txnCount)
                $("#confirmations").html(myJSON.confirmations)
                $("#timestamp").html(convertedTimestamp.getHours())
                        }
                        
        } catch(error) {
            console.log(error);
                }


            }

            $('#button1').on('click', () => {readBlock()});
