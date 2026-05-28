export const parseData = async () => {
  try {
    const response = await fetch('/data.txt');
    const text = await response.text();

    const sections = text.split('#').filter(s => s.trim());
    const data = {
      company: {},
      products: []
    };

    sections.forEach(section => {
      const lines = section.split('\n');
      const sectionName = lines[0].trim().toUpperCase();
      const content = lines.slice(1).join('\n').trim();

      if (sectionName === 'COMPANY') {
        const matches = content.match(/\[(.*?)\]\s*(.*)/g);
        if (matches) {
          matches.forEach(match => {
            const [_, key, value] = match.match(/\[(.*?)\]\s*(.*)/);
            data.company[key.toLowerCase()] = value.trim();
          });
        }
      } else if (sectionName === 'PRODUCTS') {
        const productBlocks = content.split('---');
        productBlocks.forEach(block => {
          const product = {};
          const matches = block.match(/\[(.*?)\]\s*(.*)/g);
          if (matches) {
            matches.forEach(match => {
              const [_, key, value] = match.match(/\[(.*?)\]\s*(.*)/);
              product[key.toLowerCase()] = value.trim();
            });
            data.products.push(product);
          }
        });
      }
    });

    return data;
  } catch (error) {
    console.error('Error parsing data.txt:', error);
    return null;
  }
};
