const letters = {
  a: ['#####', '#   #', '#####', '#   #', '#   #'],
  b: ['###  ', '#  # ', '#### ', '#   #', '#####'],
  c: ['#####', '#    ', '#    ', '#    ', '#####'],
  d: ['###  ', '#  # ', '#   #', '#   #', '#### '],
  e: ['#####', '#    ', '###  ', '#    ', '#####'],
  f: ['#####', '#    ', '###  ', '#    ', '#    '],
  g: ['#####', '#    ', '# ###', '#   #', '#####'],
  h: ['#   #', '#   #', '#####', '#   #', '#   #'],
  i: ['#####', '  #  ', '  #  ', '  #  ', '#####'],
  j: ['#####', '    #', '    #', '#   #', '#### '],
  k: ['#   #', '#  # ', '###  ', '#  # ', '#   #'],
  l: ['#    ', '#    ', '#    ', '#    ', '#####'],
  m: ['#   #', '## ##', '# # #', '#   #', '#   #'],
  n: ['#   #', '##  #', '# # #', '#  ##', '#   #'],
  o: ['#####', '#   #', '#   #', '#   #', '#####'],
  p: ['#####', '#   #', '#####', '#    ', '#    '],
  q: ['#####', '##  #', '# # #', '#  ##', '#####'],
  r: ['#####', '#   #', '#### ', '#   #', '#   #'],
  s: ['#####', '#    ', '#####', '    #', '#####'],
  t: ['#####', '  #  ', '  #  ', '  #  ', '  #  '],
  u: ['#   #', '#   #', '#   #', '#   #', '#####'],
  v: ['#   #', '#   #', '#   #', ' # # ', '  #  '],
  w: ['#   #', '#   #', '# # #', '## ##', '#   #'],
  x: ['#   #', ' # # ', '  #  ', ' # # ', '#   #'],
  y: ['#   #', ' # # ', '  #  ', '  #  ', '  #  '],
  z: ['#####', '   # ', '  #  ', ' #   ', '#####'],
  0: ['#####', '#   #', '# # #', '#   #', '#####'],
  1: [' ##  ', '# #  ', '  #  ', '  #  ', '#####'],
  2: [' ### ', '#   #', '  #  ', ' #   ', '#####'],
  3: [' ### ', '#   #', '  ## ', '#   #', ' ### '],
  4: [' #  #', '#   #', '#####', '    #', '    #'],
  5: ['#####', '#    ', ' ### ', '    #', '#### '],
  6: [' ####', '#    ', '#### ', '#   #', '#### '],
  7: ['#####', '    #', '    #', '    #', '    #'],
  8: [' ### ', '#   #', ' ### ', '#   #', ' ### '],
  9: [' ### ', '#   #', ' ### ', '    #', '#### '],
};

function textToASCII(text, symbol) {
  const columns = 5;
  const textArray = text.split('');
  let spacer = ':space:';
  let wrapper = '';
  
  if (symbol.length === 1) {
    spacer = ' ';
    wrapper = '```';
  } else if (!(symbol[0] === ':') || !(symbol[symbol.length - 1] === ':')) {
    alert('Symbol can only be a single character or a Slack emoji (:smile:)');
    return false;
  }
  
  let out = '';
  for (let i = 0; i < columns; i++) {
    const row = textArray.map(char => {
      const c = char.toLowerCase();
      if(c === ' ') { return spacer; }
      return letters[c][i];
    });
    
    out += row.join(spacer);
    out += '\n';
  }
  
  return wrapper + out.replace(/#/g, symbol).replace(/ /g, spacer) + wrapper;
}

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('.text').value;
  const char = document.querySelector('.char').value;
  const out = document.querySelector('.out');
  const t = textToASCII(text, char);
   
  if (t) {
    out.value = t;
  }
}, false);
