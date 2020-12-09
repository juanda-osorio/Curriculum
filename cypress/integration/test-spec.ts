describe('Primer Test', () => {
    it('Click en mayoría elmentos del Navbar', () => {
        cy.visit('https://juanda-osorio.github.io/Curriculum/');

        //Creo que se refiere a la palabra Curriculum de la url
        cy.title().should('include', 'Curriculum');

        cy.contains('Inicio').click();
        cy.url().should('include', '/inicio');

        cy.contains('Sobre Mí').click();
        cy.url('Sobre Mí').should('include', '/datos');

        cy.contains('Formación').click();
        cy.url('Formación').should('include', '/formacion');
    
        cy.contains('Conocimientos').click();
        cy.url('Conocimientos').should('include', '/conocimientos');

    })
});

describe('Segundo Test', () =>{
    it('Prueba Experiencia', () =>{

        cy.contains('Experiencia')
            .click();
        
        cy.url().should('include', 'experiencia');

        cy.get('.boton_exp').contains('Fecha Ascendente')
            .click();

        cy.get('.boton_exp').contains('Fecha Descendente')

    });
});

describe('Tercer Test', () =>{
    it('Prueba envío Form', () =>{
        
        cy.contains('Contacto').click();
        cy.url('Contacto').should('include', '/contacto');

        cy.get('button').contains('Enviar')
            .click()
            

    });
});



/*
    
 */