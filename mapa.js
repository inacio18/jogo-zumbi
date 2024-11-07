export default class mapa extends Phaser.Scene {
  constructor () {
    super('mapa')
  }

  preload () {
    this.load.tilemapTiledJSON('mapa', 'assets/mapa /mapa.json')
    this.load.image('abertura', 'assets/arquivos png /abertura-jogo.png')
    this.load.image('labirinto', 'assets/arquivos png /labirinto.png')
    this.load.image('sala', 'assets/arquivos png /sala.png')
    this.load.image('personagem', 'assets/personagens/personagem-nay.png')
    

    this.load.spritesheet('personagem', 'assets/personagem-nay.png', {
      frameWidth: 64,
      frameHeight: 64
    })

  }


  create () {
    this.tilemapMapa = this.make.tilemap({ key: 'mapa' })

    this.tilesetEstrutura = this.tilemapMapa.addTilesetImage('mapa jogo.tmj')

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
  }
}
