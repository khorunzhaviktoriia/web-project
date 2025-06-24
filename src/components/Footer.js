function Footer() {
  const socialMediaIcons = [
    { src: '/images/instagram-icon.svg', alt: 'Instagram icon', link: 'https://www.instagram.com/'},
    { src: '/images/telegram-icon.svg', alt: 'Telegram icon', link: 'https://web.telegram.org/a/'},
    { src: '/images/tiktok-icon.svg', alt: 'TikTok icon', link: 'https://www.tiktok.com/uk-UA/' },
    { src: '/images/facebook-icon.svg', alt: 'Facebook icon', link: 'https://www.facebook.com/?locale=ru_RU' },
    { src: '/images/twitter-icon.svg', alt: 'Twitter icon', link: 'https://x.com/' },
    { src: '/images/youtube-icon.svg', alt: 'YouTube icon', link: 'https://www.youtube.com/?app=desktop&hl=ru' }
  ];
  
  return (
    <div className="text-white py-4 bg-for-footer ">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-center mb-1">
            <h3 className="fs-5 fw-bold">MovieLand</h3>
            <h4 className="fs-6 fw-semibold">з'єднатися з нами</h4>
        </div>

        <div className="d-flex gap-4">
          {socialMediaIcons.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                width="20"
                height="20"
                style={{ cursor: 'pointer' }}
              />
            </a>
          ))}
        </div>

        <div className="border-top mt-3 pt-2">
          <p className="text-white">© 2025 MovieLand. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;