input.onButtonPressed(Button.A, function () {
    if (Player > 0 && (Player <= 4 && isOn == 1)) {
        led.unplot(Player, 4)
        Player += -1
        if (led.point(Player, 4)) {
            isOn = 0
        }
        led.plot(Player, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Player >= 0 && (Player < 4 && isOn == 1)) {
        led.unplot(Player, 4)
        Player += 1
        if (led.point(Player, 4)) {
            isOn = 0
        }
        led.plot(Player, 4)
    }
})
function GoDown () {
    if (i == 0) {
        i += 1
        Enemy = [
        randint(0, 4),
        Enemy[0],
        Enemy[1],
        Enemy[2],
        Enemy[3]
        ]
    } else {
        if (i >= 3) {
            i = 0
        } else {
            i += 1
        }
        Enemy = [
        -1,
        Enemy[0],
        Enemy[1],
        Enemy[2],
        Enemy[3]
        ]
    }
}
let Enemy: number[] = []
let i = 0
let Player = 0
let isOn = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
isOn = 1
let x = 0
let y = 0
Player = 3
i = 1
let delay = 300
Enemy = [
-1,
-1,
-1,
-1,
-1
]
basic.forever(function () {
    if (Enemy[4] != Player && Enemy[4] >= 0) {
        isOn = 0
    }
    if (isOn == 1) {
        for (let index = 0; index < Enemy.length; index++) {
            if (Enemy[y] == -1) {
                led.unplot(x, y)
            }
            if (Enemy[y] >= 0) {
                led.plot(x, y)
                if (Enemy[y] == x) {
                    led.unplot(x, y)
                }
            }
            x += 1
        }
        y += 1
        x = 0
        led.plot(Player, 4)
        if (y > 4) {
            y = 0
            GoDown()
            basic.pause(delay)
            delay += -5
        }
    } else {
        if (isOn == 0) {
            for (let index = 0; index < 5; index++) {
                for (let index = 0; index < Enemy.length; index++) {
                    if (Enemy[y] == -1) {
                        led.unplot(x, y)
                    }
                    if (Enemy[y] >= 0) {
                        led.plot(x, y)
                        if (Enemy[y] == x) {
                            led.unplot(x, y)
                        }
                    }
                    x += 1
                }
                y += 1
                x = 0
            }
            basic.pause(500)
            isOn = 2
        }
    }
    if (isOn == 2) {
        for (let index = 0; index < 3; index++) {
            led.unplot(Player, 4)
            basic.pause(1000)
            led.plot(Player, 4)
        }
        basic.showIcon(IconNames.Sad)
    }
})
