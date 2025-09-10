import React, { useEffect, useState } from 'react';
import defaultUserImage from './images/defaultUserAvatar.png'

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
        label: 'Portraits (Male)',
        value: 'portraits_male',
        url: 'https://randomuser.me/api/portraits/men'
    },
    {
        id: 8,
        label: 'Portraits (Female)',
        value: 'portraits_female',
        url: 'https://randomuser.me/api/portraits/women'
    }
]

const AvatarGenerator = () => {
    const [imgSrc, setImgSrc] = useState(null);
    const [type, setType] = useState('avatar_male');
    const [url, setUrl] = useState('');

    const generateAvatar = () => {
        const avatarObj = avatarData.find(item => item.value === type);
        
        if(avatarObj.value === 'portraits_male' || avatarObj.value === 'portraits_female') {
            const random = Math.floor(Math.random() * 99) + 1;
            const imageUrl = `${avatarObj.url}/${random}.jpg`;
            setImgSrc(imageUrl);
        } else {
            const uniqueValue = Date.now();
            const imageUrl = `${avatarObj.url}${uniqueValue}`
            setImgSrc(imageUrl);
        }
    };

    const copyImageUrl = (url) => {
        navigator.clipboard.writeText(url);

        const toast = document.createElement('div');
        toast.textContent = 'Image URL copied!';
        document.body.appendChild(toast);

        setTimeout(() => {
            if(document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 3000);
    };

    const downloadImage = (imageURL) => {
        const a = document.createElement('a');
        a.href = imageURL;
        a.download = `${Date.now()}.jpg`;
        a.click();
        a.remove();
    }

    useEffect(() => {
        generateAvatar();
    }, [type])

  return (
    <section>
        <div className="main-container">
            <div style={{ height: '80px', width: '80px'}}>
                <img src={imgSrc || defaultUserImage} alt="Avatar image" />
            </div>

            <h2>Avatar Generator</h2>

            <select value={type} onChange={(e) => setType(e.target.value)}>
                {avatarData.map(item => (
                    <option key={item.id} value={item.value}>{item.label}</option>
                ))}
            </select>

            <div>
                {imgSrc}
            </div>

            <div>
                <button onClick={generateAvatar}>Change</button>
                <button onClick={() => downloadImage(imgSrc)}>Download</button>
                <button onClick={() => copyImageUrl(imgSrc)}>Copy</button>
            </div>
        </div>
    </section>
  )
}

export default AvatarGenerator