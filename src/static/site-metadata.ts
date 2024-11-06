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
  logo: 'https://imgse.com/i/pAszzQO',
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
