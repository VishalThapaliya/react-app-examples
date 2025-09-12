import React, { useEffect, useState } from 'react';
import './AvatarGenerator.css';

import defaultImage from './images/defaultUserAvatar.png';

const avatarData = [
    {
        id: 1,
        label: 'Avatar (Male)',
        value: 'avatar_male',
        url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=male-'
    },
    {
        id: 2,
        label: 'Avatar (Female)',
        value: 'avatar_female',
        url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=female-'
    },
    {
        id: 3,
        label: 'Advanture (cartoon)',
        value: 'cartoon',
        url: 'https://api.dicebear.com/7.x/adventurer/svg?seed='
    },
    {
        id: 4,
        label: 'Croodles (Sketchy Cartoon)',
        value: 'croodles',
        url: 'https://api.dicebear.com/7.x/croodles/svg?seed='
    },
    {
        id: 5,
        label: 'Botts (Robots)',
        value: 'robots',
        url: 'https://api.dicebear.com/7.x/bottts/svg?seed='
    },
    {
        id: 6,
        label: 'Pixel Art',
        value: 'pixel',
        url: 'https://api.dicebear.com/7.x/pixel-art/svg?seed='
    },
    {
        id: 7,
        label: 'Portrait (Male)',
        value: 'portrait_male',
        url: 'https://randomuser.me/api/portraits/men'
    },
    {
        id: 8,
        label: 'Portrait (Female)',
        value: 'portrait_female',
        url: 'https://randomuser.me/api/portraits/women'
    }
];

const AvatarGenerator = () => {
    const [imgSrc, setImgSrc] = useState(null);
    const [imgType, setImgType] = useState('portrait_male');

    const generateAvatar = () => {
        const avatarObj = avatarData.find(item => item.value === imgType);

        if(avatarObj.value === 'portrait_male' || avatarObj.value === 'portrait_female') {
            const random = Math.floor(Math.random() * 99) + 1;
            const imageUrl = `${avatarObj.url}/${random}.jpg`;
            setImgSrc(imageUrl);
        } else {
            const uniqueValue = Date.now();
            const imageUrl = `${avatarObj.url}${uniqueValue}`;
            setImgSrc(imageUrl);
        }
    };

    const downloadAvatar = (imageUrl) => {
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = `${Date.now()}.jpg`;
        a.click();
        a.remove();
    }

    const copyUrl = (imgUrl) => {
        navigator.clipboard.writeText(imgUrl);
        
        const toast = document.createElement('div');
        toast.className = 'toast-confirmation';
        toast.textContent = 'Image Url Copied!!';
        document.body.appendChild(toast);

        setTimeout(() => {
            if(document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 3000);
    }

    useEffect(() => {
        generateAvatar();
    }, [imgType]);
     
  return (
    <section className="avatar-generator-page">
        <div className="avatar-generator-container">
            <div className='avatar-image-wrapper'>
                <img 
                    src={imgSrc || defaultImage} 
                    alt="Generated avatar image"  
                    className='avatar-image'
                />
            </div>
            
            <h2 className="avatar-generator-title">✨ Avatar Generator ✨</h2>
            <p className="avatar-generator-subtitle">Generate custom avatars and digital personas</p>
        
        
            <select 
                value={imgType} 
                onChange={(e) => setImgType(e.target.value)}
                className='avatar-type-selector'
            >
                {avatarData.map(({ id, value, label }) => (
                    <option value={value} key={id}>{label}</option>
                ))}
            </select>

            <div className='avatar-url-display'>
                URL:    
                <p>{imgSrc}</p>
            </div>

            <div className='avatar-action-buttons'>
                <button onClick={generateAvatar} className='btn-generate'>Change</button>
                <button onClick={() => downloadAvatar(imgSrc)} className='btn-download'>Download</button>
                <button onClick={() => copyUrl(imgSrc)} className='btn-copy'>Copy</button>
            </div>
        </div>
    </section>
  )
}

export default AvatarGenerator