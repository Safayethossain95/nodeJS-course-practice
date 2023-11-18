const Ticket = require('../models/Ticket')

class MyDB{
    constructor(){
        this.tickets = []
    }

    // return all tickets
    find(){

    }
    /**
     * create and save a new ticket
     * @param {string} username 
     * @param {number} price 
     * @returns {Ticket}
     */

    create(username,price){
        const ticket = new Ticket(username,price)
        this.tickets.push(ticket)
        return ticket
    }

    /**
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}
     */

    bulkCreate(username,price,quantity){
        const result = []
        for (let i=0;i<quantity;i++){
            const ticket = this.create(username,price)
            result.push(ticket)
        }
        return result
    }

    /**
     * return all tickets
     */

    find(){
        return this.tickets
    }

    
    /**
     * 
     * @param {string} ticketId 
     * @returns {Ticket}
     */
    
    findById(ticketId){
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} ticket
             */

            (ticket) => ticket.id === ticketId

        );
        return ticket
    }

    /**
     * find all tickets for a given user
     * @param {string} username
     */

    findByUsername(username){
        const tickets = this.tickets.filter(
            /**
             * 
             * @param {Ticket} ticket
             */

            ticket => ticket.username === username
        );
        return tickets
    }


    /**
     * @param {number} ticketId
     * @param {{username:string,price:number}} ticketBody
     * @returns {Ticket}
     */

    updateById(ticketId,ticketBody){
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updatedAt = new Date()
    }
    
    /**
     * 
     * @param {string} ticketId 
     */

    deleteByID(ticketId){
        const index = this.tickets.findIndex(
            (ticket)=> ticket.id === ticketId
            )
            if(index !== -1){
                this.tickets.splice(index,1)
                return true
            }else{
                return false
            }
    }

    /**
     * 
     * @param {number} winnerCount 
     * @returns {Array<Ticket>}
     */

    draw(winnerCount){
        let winnerIndexes = new Array(winnerCount)
        
        
        let index = 0
        while(index < winnerCount){
            let winnerindex = Math.floor(Math.random() * this.tickets.length)
            console.log("winner index", winnerindex)
            if(!winnerIndexes.includes(winnerindex)){
                winnerIndexes[index++] = winnerindex
                continue;
            }

        }
        return winnerIndexes.map((winnerindex)=> this.tickets[winnerindex])
    }
}

const myDB = new MyDB()

module.exports = myDB 