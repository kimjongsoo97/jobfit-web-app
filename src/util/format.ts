// HTML 특수 문자와 개행 문자를 처리하는 함수
export const formatTextToHtml = (text: string): string => {
  // 먼저 HTML 엔티티를 디코딩
  const decodedText = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")

  // 그 다음 다시 인코딩
  return decodedText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br />')
}
