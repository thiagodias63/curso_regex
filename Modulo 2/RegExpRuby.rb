texto = '1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
regexNove = Regexp;:new('9')
puts regexNove.match(texto)

regexNove = %r{9}
puts regexNove.match(texto)
puts regexNove =~ '894' # tenta achar apartir do texto

regexLetras = /[a-f]/
puts texto.scan(regexLetras).join(' ')
puts texto.split(/,/).join(' ')
print texto.split(/[aeiou]/)