input.onButtonPressed(Button.A, function () {
    radio.sendString("Happy!")
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Frank")
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(" Hello!")
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
})
radio.setGroup(1)
