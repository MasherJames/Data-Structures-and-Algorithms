def format_words(words):
  if type(words) != list:
    return ''
  wtj = [e for e in words if e != '']
  if len(wtj) < 1:
    return ''
  if len(wtj) == 1:
    return wtj[0]
  return ', '.join(wtj[:len(wtj) - 1]) + ' and ' + wtj[-1]