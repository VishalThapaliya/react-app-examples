import { useEffect, useState } from "react";
import './GradientGenerator.css';

const GradientGenerator = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState('linear');
  const [gradientCollections, setGradientCollections] = useState([]);
  const [displayCount, setDisplayCount] = useState(12);

  const displayedGradients = gradientCollections.slice(0, displayCount);
  const showLoadMore = displayCount < gradientCollections.length;

  const getHexColor = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.floor(Math.random() * rgb);
    const hexValue = random.toString(16);
    const colorCode = hexValue.padEnd(6, '0');
    return `#${colorCode}`;
  };

  const generateGradients = () => {
    let colors = [];

    for(let i = 0; i < num; i++) {
      const degree = Math.floor(Math.random() * 360);
      const color1 = getHexColor();
      const color2 = getHexColor();

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
        })
      }
    }

    setGradientCollections(colors);
    setDisplayCount(Math.min(12, num));
  };

  const loadMoreGradients = () => {
    const newCount = Math.min(displayCount + 12, gradientCollections.length);
    setDisplayCount(newCount);
  }

  const copyCss = (css) => {
    navigator.clipboard.writeText(css);

    const toast = document.createElement('div');
    toast.textContent = 'Code Copied Successfully!';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);

    setTimeout(() => {
      if(document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 3000);
  }

  useEffect(() => {
    generateGradients();
  }, []);

  return (
    <section className="gradient-generator-container">
      <div className="background-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>

      <div className="content-wrapper">
        <header className="gradient-header">
          <div className="logo-container">
            <div className="logo-icon">🎨</div>
          </div>
          <h1 className="main-title">Random Gradient Generator</h1>
          <p className="subtitle">Create stunning gradients for your next project with just one click</p>
        </header>
        
        <div className="controls">
          <div className="control-group">
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} className="number-input"/>
          </div>

          <div className="control-group">
            <select value={type} onChange={(e) => setType(e.target.value)} className="select-input">
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
              <option value="Conic">Conic</option>
            </select>
          </div>

          <button onClick={generateGradients} className="generate-button">✨ Generate</button>
        </div>

        <div className="gradient-grid">
          { displayedGradients.map((color, index) => (
            <div key={index} className="gradient-card" style={{ background: color.gradient, animationDelay: `${index * 0.01}s`}}>
              <div className="overlay"></div>
              <div className="gradient-info">
                <div className="gradient-type">{type}</div>
              </div>
              <button onClick={() => copyCss(color.css)} className="copy-button">📋 Copy</button>
            </div>
          ))}
        </div>

        { showLoadMore && (
          <div className="load-more-container">
            <button onClick={loadMoreGradients} className="load-more-button">Load More Gradients</button>
          </div>
        )}

        <div className="stats-container">
          <div className="stats-badege">
            <span className="stats-text">
              Showing 
              <span className="stats-number">{displayCount}</span> of {' '} 
              <span className="stats-number">{gradientCollections.length}</span> gradient colors
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GradientGenerator