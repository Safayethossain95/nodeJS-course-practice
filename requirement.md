- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- bulk buy (user can buy multiple ticket at a time)
- raffle draw


Ticket
- number (unique)
- username
- price
- timestamp

Routes:

- /tickets/t/ticketId GET find single ticket
- /tickets/t/:ticketId PATCH update ticket by id
- /tickets/t/:ticketId DELETE delete ticket by id
- /tickets/u/:username GET find ticket based on username
- /tickets/u/:username PATCH update ticket based on username
- /tickets/u/:username DELETE delete ticket based on username
- /tickets/sell  - create tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw
- /tickets - find all tickets