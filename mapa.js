export default class mapa extends Phaser.Scene {
  constructor () {
    super('mapa')
  }

  preload () {
    this.load.tilemapTiledJSON('mapa', 'assets/mapa/mapa.json')
    this.load.image('labirinto', 'assets/mapa/labirinto.png')

    this.load.spritesheet('personagem', 'assets/personagens/nay.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('cima', 'assets/cima.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('baixo', 'assets/baixo.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('esquerda', 'assets/esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('direita', 'assets/direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.tilemapMapa = this.make.tilemap({ key: 'mapa' })
    this.tilesetLabirinto = this.tilemapMapa.addTilesetImage('labirinto')
    this.layerLabirinto = this.tilemapMapa.createLayer('labirinto', [this.tilesetLabirinto])

    this.anims.create({
      key: 'parado',
      frames: [{ key: 'personagem', frame: 15 }],
      frameRate: 1
    })
    this.anims.create({
      key: 'andar-direita',
      frames: this.anims.generateFrameNumbers('personagem', { start: 88, end: 96 }),
      frameRate: 10,
      repeat: -1
    })
    this.personagem = this.physics.add.sprite(50, 225, 'personagem', 15)
    this.cima = this.add.sprite(100, 250, 'cima', 0)
    this.baixo = this.add.sprite(100, 350, 'baixo', 0)
    this.esquerda = this.add.sprite(600, 350, 'esquerda', 0)
    this.direita = this.add.sprite(700, 350, 'direita', 0)
    this.cima.setInteractive()
    this.cima.on('pointerdown', () => { this.personagem.setVelocityY(-20) })
    this.baixo.setInteractive()
    this.baixo.on('pointerdown', () => { this.personagem.setVelocityY(20) })
    this.esquerda.setInteractive()
    this.esquerda.on('pointerdown', () => { this.personagem.setVelocityX(-20) })
    this.direita.setInteractive()
    this.direita.on('pointerdown', () => { this.personagem.setVelocityX(20) })
  }
}