const texto = 'Lista arquivos mp3: jass.mp3,rock.mp3,podcast.mp3,blues.mp3'

// 1 - Quantos `.mp3` tem no arquivo?
console.log(texto.match(/\.mp3/g).length);

