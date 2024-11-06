interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '运动是生命的绽放',
  siteUrl: 'https://dafengy.github.io/',
  logo: 'https://mmbiz.qpic.cn/mmbiz_png/X9gVKvCVLk095dC5jEdKmYDwjJyNYYhCHz8LQtTcgoDnYOyB4x67lRe69ZHVJbtj24FG1LdkuyRLxdJiaJQsQ2g/640.png',
  description: '跑啊，大兄弟',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://dafengy.github.io/posts/',
    },
    {
      name: 'About',
      url: 'https://dafengy.github.io/about/',
    },
  ],
};

export default data;
