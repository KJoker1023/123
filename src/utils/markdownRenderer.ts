export const renderMarkdown = (markdown: string): string => {
  // Basic Markdown parsing implementation
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>');
  
  // Lists
  html = html.replace(/^\s*\n\* (.*)/gm, '<ul>\n<li>$1</li>');
  html = html.replace(/^\* (.*)/gm, '<li>$1</li>');
  html = html.replace(/^\s*\n\d+\. (.*)/gm, '<ol>\n<li>$1</li>');
  html = html.replace(/^\d+\. (.*)/gm, '<li>$1</li>');
  html = html.replace(/<\/ul>\s*\n<ul>/g, '');
  html = html.replace(/<\/ol>\s*\n<ol>/g, '');
  html = html.replace(/^\s*$/gm, '</ul>');
  html = html.replace(/^\s*$/gm, '</ol>');
  
  // Paragraphs
  html = html.replace(/^\s*([^\n<][^\n]*)\s*$/gm, '<p>$1</p>');
  
  // Line breaks
  html = html.replace(/\n/g, '<br />');
  
  return html;
};