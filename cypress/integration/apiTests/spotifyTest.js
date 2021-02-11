describe('Spotigy API tests for practicing',()=>{
    before(()=>{
        //load fixtures
        cy.LoadSpotifyFixtures()


        cy.get('@spotify').then((spotify)=>{
            //enconde ids for spotify format: Basic <base64 encoded client_id:client_secret>
            var encodedData = Buffer.from(spotify.clientId + ':' + spotify.clientSecret).toString('base64');
            var authorization = 'Basic ' + encodedData;
            //requesting spotify an access token
            cy.request({
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                form: true,
                body: {
                    grant_type: "client_credentials"
                },
                headers: {
                    Authorization: authorization
                }
            }).then(response=>{
                localStorage.setItem("token", response.body.access_token);
            })
        })
    })
    context('Testing GET endpoints using fixtures',()=>{

        it('GET Tracks',()=>{
            cy.get('@spotify').then((spotify)=>{
                cy.request({
                    method: 'get',
                    url: spotify.apiUrl + 'tracks/2TpxZ7JUBn3uw46aR7qd6V',
                    headers: {
                        authorization: 'Bearer ' + localStorage.getItem("token") ,
                    },
                }).then(($response)=>{
                    expect($response.status).to.eq(200)
                    expect($response.body.name).to.eq('All I Want')
                    expect($response.body.album.name).to.eq('Place In The Sun')
                })
            })

        })
    })
})
