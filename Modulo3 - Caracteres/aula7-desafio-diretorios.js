// Desafio: encontrar quantidade de arquivos mp3 da lista
const texto = 'lista de arquivos mp3: jass.mp3, rock.mp3, podcast.mp3, blues.mp3'
const regexQuantidadeArquivosMp3 = /\.mp3/g //esperado = 4
const matchs = texto.match(regexQuantidadeArquivosMp3);
console.log(matchs.length)