describe('Oxford API tests for practicing',()=>{
    beforeEach(()=>{
        //load fixtures
        cy.LoadOxfordFixtures()
    })
    context('Testing GET endpoints',()=>{
        it('GET languages',()=>{
            cy.request('https://od-api-demo.oxforddictionaries.com:443/api/v1/languages').then(($response)=>{
                expect($response.status).to.eq(200)
            })
        })
        it('GET languages using fixtures',()=>{
            //get fixture alias
            cy.get('@oxford').then((oxford)=>{
                cy.request(oxford.apiUrl+'languages').then(($response)=>{
                    expect($response.status).to.eq(200)
                })
            })

        })
    })
})
