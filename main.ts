player.onDied(function () {
    mobs.applyEffect(SLOWNESS, mobs.target(LOCAL_PLAYER), 50, 2)
})
player.onChat("levitate", function () {
    mobs.applyEffect(LEVITATION, mobs.target(LOCAL_PLAYER), 600, 255)
})
