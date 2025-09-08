import React, { useEffect, useState } from 'react'
import './GradientGenerator.css';

const GradientGenerator = () => {
  const [num, setNum] = useState(9);
  const [type, setType] = useState('linear');
  const [gradientColors, setGradientColors] = useState([]);
  const [displayCount, setDisplayCount] = useState(9);

  const displayedGradients = gradientColors.slice(0, displayCount);
  const shouldShowLoadMore = displayCount < gradientColors.length;

  const getHexValue = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.floor(Math.random() * rgb);
    const hexValue = random.toString(16);
    const colorCode = hexValue.padEnd(6, '0');
    return `#${colorCode}`;
  }

  const generateGradients = () => {
    let colors = [];

    for (let i = 0; i < num; i++ ) {
      const degree = Math.floor(Math.random() * 360);
      const color1 = getHexValue();
      const color2 = getHexValue();

      if(type === 'linear') {
        colors.push({
          gradient: `linear-gradient(${degree}deg, ${color1}, ${color2})`,
          css: `background: linear-gradient(${degree}deg, ${color1}, ${color2})`
        });
      } else if(type === 'radial') {
        colors.push({
          gradient: `radial-gradient(circle, ${color1}, ${color2})`,
          css: `background: radial-gradient(circle, ${color1}, ${color2})`
        });
      } else {
        colors.push({
          gradient: `conic-gradient(from ${degree}deg, ${color1}, ${color2})`,
          css: `background: conic-gradient(from ${degree}deg, ${color1}, ${color2})`
        });
      }
    }

    setGradientColors(colors);
    setDisplayCount(Math.min(9, num));
  }

  const loadMoreGradients = () => {
    const newCount = Math.min(displayCount + 9, gradientColors.length);
    setDisplayCount(newCount);
  }

  const handleCopy = (css) => {
    navigator.clipboard.writeText(css);
    alert('Code Copied!');
  }

  useEffect(() => {
    generateGradients();
  }, [num, type]);

  return (
    <section>
      <header>
        <div className="logo-title">
          <h1>Random Gradient Generator</h1>
        </div>

        <div className="controls">
          <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
            <option value="conic">Conic</option>
          </select>

          <button onClick={generateGradients}>Generate</button>
        </div>
      </header>

      <div className="gradient-grid">
        {displayedGradients.map((color, index) => (
          <div 
            key={index} 
            className='gradient-card'
            style={{ background: color.gradient, animationDelay: `${index * 0.01}s` }}>
            <button onClick={() => handleCopy(color.css)}>Copy</button>
          </div>
        ))}
      </div>

      {shouldShowLoadMore && (
        <div className="text-center">
          <button onClick={loadMoreGradients}>Load More Gradients</button>
        </div>
      )}

      <div className='text-center mt-8'>
        <p>Showing {displayCount} of {gradientColors.length} gradient colors.</p>
      </div>
    </section>
  )
}

export default GradientGenerator