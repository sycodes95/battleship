const shipFactory = require('./shipFactory')

test('adds 1 to hit', () => {
    const ship = shipFactory(3,0,0)
    ship.gotHit()
    expect(ship.hit).toBe(1);
})

test('adds 2 to hit', () => {
    const ship = shipFactory(3,0,0)
    ship.gotHit()
    ship.gotHit()
    expect(ship.hit).toBe(2);
})

test('adds 3 to hit', () => {
    const ship = shipFactory(3,0,0)
    ship.gotHit()
    ship.gotHit()
    ship.gotHit()
    expect(ship.hit).toBe(3);
})

test('add 1 to hit when ship has 3 length, check if sunk', ()=> {
    const ship = shipFactory(3,0,0)
    ship.gotHit()
    expect(ship.isSunk()).toBe(false);
})

test('add 2 to hit when ship has 3 length, check if sunk', ()=> {
    const ship = shipFactory(3,0,0)
    ship.gotHit()
    ship.gotHit()
    expect(ship.isSunk()).toBe(false);
})

test('add 3 to hit when ship has 3 length, check if sunk', ()=> {
    const ship = shipFactory(3,0,0)
    ship.gotHit()
    ship.gotHit()
    ship.gotHit()
    expect(ship.isSunk()).toBe(true);
})