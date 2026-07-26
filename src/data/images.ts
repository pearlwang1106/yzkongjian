/** Shared local image paths — each asset appears exactly once across the site. */

const img = (file: string) => `images/${file}`;

export const siteImages = {
  hero: img('9bb3623aa3f77ad6596fb439360e1018.jpg'),
  philosophy: [
    img('f5a257e5d21468622be44f92fbc6a6c5.webp'),
    img('3ff36aa8a191a6f3c7d914dc80e9ba97.webp'),
    img('4531a7e7c1464e8b4c868ccfb97d0fc8.jpg'),
  ],
  services: [
    img('1087de1a1e2f5d2711c187d382068e55.jpg'),
    img('20c6d47e2372243b54f80799af06daeb.webp'),
    img('6c724284fa2c93196c9468ee7e2be096.jpg'),
  ],
  portfolio: {
    french: [
      img('618a8ff0abc0bb13ff6788091720bccd.jpg'),
      img('dbf943056a406fb93f8ca51bd9ab868e.webp'),
      img('48448c6dbba5fd2726fff186a40a5093.jpg'),
      img('b307ca71958adc4af8e5c7059a3737c4.webp'),
    ],
    italian: [
      img('96b390832d4d252b71aadb1a4a040699.webp'),
      img('9d068a2589bbbedf247f8bdbc19b3f10.webp'),
      img('41596bbc90af887f9edbf297eaea9fbc.jpg'),
      img('55ef5765728bdec73f740a203a25d39b.jpg'),
      img('413bb7e079d5bb889f322177d90ab7d1.jpg'),
      img('9b85da4309658d1c8c2038939cad3a7c.webp'),
      img('e90eb15204bea2eb76c54317374cef32.webp'),
    ],
    modern: [
      img('5c4aa0b2e03d2db02a9e9dfb2f62fa58.webp'),
      img('f964fc8969feec20d35890e613be1a36.webp'),
      img('6fdd95ed0b57a6f8639f6bc28fb5e2d3.jpg'),
      img('58540417747cc8dbcabf073a239909f8.jpg'),
      img('0c58a957a210550b2ba866f104f570eb.webp'),
      img('3df2a625a33ac7c8df0b612805ebf489.jpg'),
      img('8f8f654becbb219692e4b7c04f2f6c1d.jpg'),
      img('25a1ffb98dd63c92a6e8f98cb3b6219a.webp'),
      img('bdcba74f5bd4e777c8d29ac48b8a5999.jpg'),
      img('7ff6635d27f6b2e14f0008a680bf2344.jpg'),
      img('022158b13115729419ae7d27cac56204.jpg'),
      img('b582f424b3bbcdfb52c42cfaca6e4af3.jpg'),
      img('b736f44e730690dc5acaf7656e6e0409.jpg'),
      img('c6ba3aed98bb9bc4961003e61ee437a2.jpg'),
      img('897bfe09b2f5f018bca06b460e5fb32b.jpg'),
      img('86e9995099ef967a5da1e9358d1764a1.jpg'),
      img('92666b3d9cd618e96d14953cb3f092d7.webp'),
      img('54e72af070ab12211f011ec24645b576.webp'),
      img('55962bbe9a8656aca5ce4bab2148feb3.webp'),
      img('7cb99734de4ef0e636e77006313ffb7e.jpg'),
    ],
    american: [img('1b6324d455a27f2036811ed4b7e8193d.jpg')],
    russian: [
      img('afa52daaa1d82ade5eef2d5029ba5def.jpg'),
      img('03e0d0e3499353c36f108d6d840d642b.jpg'),
      img('37150dbab157de35382ffac4649aaeaf.jpg'),
      img('ac2d7d937b5d59cfabb575d4ffe312c9.jpg'),
    ],
    chinese: [] as string[],
  },
} as const;
