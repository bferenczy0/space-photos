describe ('When the user visits the page', function () {
    it ('shows the header', function () {
        cy.visit('/')
        cy.get('#header').should('contain', 'Welcome to Space Photos!')
    })

    it ('shows potd image', function () {
        cy.visit('/')
        cy.intercept('https://api.nasa.gov/planetary/apod?api_key=J6ylGkg25aVocfNAXFT34KsqgE5QrSFlAwp3dwKf', {fixture: 'potd.json'})
        cy.get('#potdButton').click()
        cy.get('#potdImg').should('have.attr', 'src').should('contain', 'https://apod.nasa.gov/apod/image/2107/IC1396SH2-129Ou4_50Hsieh.jpg')
    })

    it ('shows potd title', function () {
        cy.visit('/')
        cy.intercept('https://api.nasa.gov/planetary/apod?api_key=J6ylGkg25aVocfNAXFT34KsqgE5QrSFlAwp3dwKf', {fixture: 'potd.json'})
        cy.get('#potdButton').click()
        cy.get('#title').should('contain', 'Elephant, Bat, and Squid (mocked)')
    })

    it ('shows potd explanation', function () {
        cy.visit('/')
        cy.intercept('https://api.nasa.gov/planetary/apod?api_key=J6ylGkg25aVocfNAXFT34KsqgE5QrSFlAwp3dwKf', {fixture: 'potd.json'})
        cy.get('#potdButton').click()
        cy.get('#explanation').should('contain', 'the Giant Squid nebula (mocked).')
    })

    it ('clears potd', function () {
        cy.visit('/')
        cy.intercept('https://api.nasa.gov/planetary/apod?api_key=J6ylGkg25aVocfNAXFT34KsqgE5QrSFlAwp3dwKf', {fixture: 'potd.json'})
        cy.get('#potdButton').click()
        cy.get('#clearPotd').click()
        cy.get('#explanation').should('be.empty')
    })

    it ('shows searched for image', function () {
        cy.visit('/')
        cy.get('#input').type('ant nebula{enter}')
        cy.get('#description').should('contain', 'This image from NASA Hubble Space Telescope image of a celestial object called the Ant Nebula may shed new light on the future demise of our Sun.')
    })
})