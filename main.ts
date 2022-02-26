namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const tipo = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pulga.isHittingTile(CollisionDirection.Bottom)) {
        pulga.vy = -150
    }
})
function crearBicho () {
    sprites.destroyAllSpritesOfKind(SpriteKind.tipo)
    scene.setTile(4, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    for (let value of scene.getTilesByType(4)) {
        bichooo = sprites.create(img`
            . . a . a . a 
            . . a a 5 a a 
            a 2 a 5 5 5 a 
            . a a f f f a 
            . a a f f f a 
            a 2 a 5 5 5 a 
            . . a a 5 a a 
            . . a . a . a 
            `, SpriteKind.tipo)
        scene.place(value, bichooo)
    }
}
function cambiarNivel (pasado: boolean) {
    if (pasado) {
        currentlevel += 1
    }
    if (currentlevel == 1) {
        ghost.vx = 10
        scene.cameraFollowSprite(ghost)
        scene.setTileMap(img`
            ........................e5.........e.................555....
            ........................e77....5...e...........8.....555.8..
            ........................e...5..7...e..........777....555...a
            ........................e5..77.e...e....5..54........777..77
            ........................e......e5..e..8.7.7777....5.........
            ........................e77....e...e..4..........777........
            ........................e.5..5.e..5e.777...............5....
            ........................e77777.e..8e..........85......777...
            ........................e5.....e...e....77....777...........
            ........................e.77777e.4.e.77.....................
            ........................e5.....e...e........................
            ....5....5...45.8..5....e77777.e....8..77...................
            3..4..8....8.........8......5..e.4..........................
            77777...77...77...77...77777777e777777......................
            eeeee222ee222ee222ee222eeeeeeeeeeeeeee2222222222222222222222
            `, TileScale.Eight)
    } else if (currentlevel == 2) {
        scene.cameraFollowSprite(pulga)
        scene.setTileMap(img`
            ...........55555............................................
            ...........55555....................e..eee..................
            ...........55555............eee.....eee22eeee...............
            ...........55555...........ee22eee222222222ee..eee..........
            ...........77777.7777.....ee22222eeeeeee2222..ee..eeee......
            ...........eeee7.eeee.....e222222.............e......ee.....
            ......................77..e22222..............ee.....e......
            ...................4..ee..ee22228.8..........5..e....e..66..
            ............................eeee....8..5...5....e...ee.6666.
            ................777777........................7ee...e.699996
            ....8.....8.5.5.eeeeee..........77....77777777ee....e.919919
            .............777.............777eee..eeeeeeeee........999999
            3....4...7777eee............7eeee...5...5..5..5....5..a99999
            777777722eee2222222222222777ee777777777777777777777777999999
            eeeeeee222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeee999999
            `, TileScale.Eight)
    } else {
        game.over(true, effects.hearts)
    }
    scene.setTile(14, img`
        5 5 b e e e e e 
        e c e e e e b e 
        e e e e e c e e 
        e e 5 e e e e e 
        e e e e e e 5 e 
        e e e e e e e e 
        b e 5 e e c b e 
        c e e 5 e b e e 
        `, true)
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 d 7 7 7 
        7 e 7 7 7 7 7 7 
        7 e e 7 e e 7 d 
        7 d e e e d e e 
        7 e e d e e e d 
        `, true)
    scene.setTile(2, img`
        2 2 2 2 2 2 2 2 
        5 4 4 4 2 2 2 2 
        5 2 5 2 2 4 5 2 
        2 4 4 5 2 2 2 2 
        2 4 2 5 5 2 4 2 
        2 2 4 2 5 4 4 2 
        4 2 5 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        `, true)
    scene.setTile(3, img`
        . e e e e e e e 
        . e 4 4 4 4 f e 
        . e 4 4 4 4 f e 
        . e 4 4 4 4 f e 
        . e 4 4 4 5 f e 
        . e 4 4 4 4 f e 
        . e 4 4 4 4 f e 
        . e 4 4 4 4 f e 
        `, false)
    scene.setTile(10, img`
        e e e e e e e . 
        e f 4 4 4 4 e . 
        e f 4 4 4 4 e . 
        e f 4 4 4 4 e . 
        e f 5 4 4 4 e . 
        e f 4 4 4 4 e . 
        e f 4 4 4 4 e . 
        e f 4 4 4 4 e . 
        `, true)
    scene.placeOnRandomTile(pulga, 3)
    scene.placeOnRandomTile(ghost, 3)
    scene.setTile(5, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    info.setScore(0)
    tiles.destroySpritesOfKind(SpriteKind.coin)
    for (let value of scene.getTilesByType(5)) {
        coin = sprites.create(img`
            . . . f f . . . 
            . . f 4 4 f . . 
            . f 4 4 4 4 f . 
            f 4 4 5 5 4 4 f 
            f 4 4 4 4 4 4 f 
            . f 4 4 4 4 f . 
            . . f 4 4 f . . 
            . . . f f . . . 
            `, SpriteKind.coin)
        scene.place(value, coin)
        animation.runImageAnimation(
        coin,
        [img`
            . . 2 2 2 . . . 
            . 2 5 5 5 2 . . 
            2 5 5 5 5 5 2 . 
            2 5 3 9 3 5 2 . 
            2 5 5 5 5 5 2 . 
            . 2 5 5 5 2 . . 
            . . 2 2 2 . . . 
            . . . . . . . . 
            `,img`
            . . 2 2 2 . . . 
            . . 2 5 2 . . . 
            . 2 5 5 5 2 . . 
            . 2 5 9 5 2 . . 
            . 2 5 5 5 2 . . 
            . . 2 5 2 . . . 
            . . 2 2 2 . . . 
            . . . . . . . . 
            `,img`
            . . 2 2 2 . . . 
            . . 2 5 2 . . . 
            . . 2 5 2 . . . 
            . . 2 9 2 . . . 
            . . 2 5 2 . . . 
            . . 2 5 2 . . . 
            . . 2 2 2 . . . 
            . . . . . . . . 
            `,img`
            . . . 2 . . . . 
            . . . 2 . . . . 
            . . . 2 . . . . 
            . . . 2 . . . . 
            . . . 2 . . . . 
            . . . 2 . . . . 
            . . . 2 . . . . 
            . . . . . . . . 
            `],
        200,
        true
        )
    }
    crearMalos()
    crearBicho()
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    cambiarNivel(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 500)
    info.changeScoreBy(1)
    music.baDing.play()
})
function crearMalos () {
    scene.setTile(8, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    for (let value of scene.getTilesByType(8)) {
        ladybag = sprites.create(img`
            . . f . f . . 
            f . f f f . f 
            . f 2 f 2 f . 
            f 2 f 2 f 2 f 
            . f 2 f 2 f . 
            f . f f f . f 
            . . . . . . . 
            `, SpriteKind.Enemy)
        scene.place(value, ladybag)
        animation.runImageAnimation(
        ladybag,
        [img`
            . . f . f . . 
            f . f f f . f 
            . f 2 f 2 f . 
            f 2 f 2 f 2 f 
            . f 2 f 2 f . 
            f . f f f . f 
            . . . . . . . 
            `,img`
            . . f . f . . 
            . . f f f . . 
            f f 2 f 2 f f 
            . 2 f 2 f 2 . 
            f f 2 f 2 f f 
            . . f f f . . 
            f f . . . f f 
            `],
        200,
        true
        )
        animation.runMovementAnimation(
        ladybag,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tipo, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        otherSprite.destroy()
        sprite.vy = -150
    } else {
        cambiarNivel(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        pulga.vy = -150
        otherSprite.destroy(effects.trail, 500)
    } else {
        cambiarNivel(false)
    }
})
let ladybag: Sprite = null
let coin: Sprite = null
let bichooo: Sprite = null
let currentlevel = 0
let ghost: Sprite = null
let pulga: Sprite = null
pulga = sprites.create(img`
    . f f . 
    . f f . 
    f f f f 
    . f f . 
    f . . f 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(pulga, 60, 0)
pulga.setStayInScreen(true)
pulga.ay = 500
ghost = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, SpriteKind.ghost)
currentlevel = 0
cambiarNivel(true)
forever(function () {
    ghost.y = pulga.y
    if (pulga.y > 109) {
        cambiarNivel(false)
    }
    if (pulga.isHittingTile(CollisionDirection.Right) && ghost.x - pulga.x > 78) {
        cambiarNivel(false)
    }
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.tipo)) {
        value.vx = -10
        animation.runImageAnimation(
        value,
        [img`
            . . a . a . a 
            . . a a 5 a a 
            a 2 a 5 5 5 a 
            . a a f f f a 
            . a a f f f a 
            a 2 a 5 5 5 a 
            . . a a 5 a a 
            . . a . a . a 
            `,img`
            . a . a . a . 
            a . a a 5 a a 
            . 2 a 5 5 5 a 
            . a a f f f a 
            . a a f f f a 
            . 2 a 5 5 5 a 
            a . a a 5 a a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a . a a 5 a a 
            . 4 a 5 5 5 a 
            . a a 6 f 6 a 
            . a a f 6 f a 
            . 4 a 5 5 5 a 
            a . a a 5 a a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a . a a 5 a a 
            . 4 a 5 5 5 a 
            . a a 6 2 6 a 
            . a a 2 6 2 a 
            . 4 a 5 5 5 a 
            a . a a 5 a a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a . a a 5 a a 
            . 4 a 5 5 5 a 
            . a a 6 3 6 a 
            . a a 3 6 3 a 
            . 4 a 5 5 5 a 
            a . a a 5 a a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a . a a 5 a a 
            . 4 a 5 5 5 a 
            . a a 6 3 6 a 
            . a a 3 6 3 a 
            . 4 a 5 5 5 a 
            a . a a 5 a a 
            . a . a . a . 
            `],
        200,
        true
        )
    }
    pause(1000)
    for (let value of sprites.allOfKind(SpriteKind.tipo)) {
        value.vx = 10
        animation.runImageAnimation(
        value,
        [img`
            a . a . a . . 
            a a 5 a a . . 
            a 5 5 5 a 2 a 
            a f f f a a . 
            a f f f a a . 
            a 5 5 5 a 2 a 
            a a 5 a a . . 
            a . a . a . . 
            `,img`
            . a . a . a . 
            a a 5 a a . a 
            a 5 5 5 a 2 . 
            a f f f a a . 
            a f f f a a . 
            a 5 5 5 a 2 . 
            a a 5 a a . a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a a 5 a a . a 
            a 5 5 5 a 4 . 
            a 6 f 6 a a . 
            a f 6 f a a . 
            a 5 5 5 a 4 . 
            a a 5 a a . a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a a 5 a a . a 
            a 5 5 5 a 4 . 
            a 6 2 6 a a . 
            a 2 6 2 a a . 
            a 5 5 5 a 4 . 
            a a 5 a a . a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a a 5 a a . a 
            a 5 5 5 a 4 . 
            a 6 3 6 a a . 
            a 3 6 3 a a . 
            a 5 5 5 a 4 . 
            a a 5 a a . a 
            . a . a . a . 
            `,img`
            . a . a . a . 
            a a 5 a a . a 
            a 5 5 5 a 4 . 
            a 6 3 6 a a . 
            a 3 6 3 a a . 
            a 5 5 5 a 4 . 
            a a 5 a a . a 
            . a . a . a . 
            `],
        200,
        true
        )
    }
    pause(1000)
})
