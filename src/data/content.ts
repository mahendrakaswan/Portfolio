export const siteContent = {
  name: 'Mahendra Kaswan',
  nickname: 'Mahi',
  role: 'Engineer & Builder',
  tagline: 'Solving one problem at a time.',
  bio: [
    "Industrial Data/Business Intelligence and finance gives me a kick! Numbers, data and facts over vibes anyday! (Not silly over-optimization though)",
    "Outside of work, I'm usually chasing a ball:\n- tennis 🎾\n- basketball 🏀\n- volleyball 🏐\n- soccer ⚽\n- squash ⚫\n\nOr chasing a personal record on a run 🏃.\nLong walks & good books 📚 keep me grounded."
  ],
  quote: "Channel the energy of thought and action into rapid, decisive and exceptional execution! ⚔️",
  currently: {
    working: 'Data Engineer, GlaxoSmithKline (GSK)',
    reading: '"Art of Doing Science & Engineering" by Richard Hamming',
    finished: '"1929: Inside the Greatest Crash in Wall Street History: and How It Shattered a Nation" by Andrew Ross Sorkin',
    training: 'Prepping for the Philly Half Marathon'
  },
  projects: [
    {
      title: 'Impact of Stephen Curry on 3-Point Shooting in NBA',
      description: 'Data analysis exploring how Stephen Curry transformed 3-point shooting trends across the NBA.',
      tags: ['ball knowledge', 'sports analytics', 'NBA'],
      github: 'https://github.com/mahendrakaswan/-Impact-of-Stephen-Curry-on-3--point-shooting-across-NBA',
    },
    {
      title: 'Mental Health in Tech',
      description: 'Exploring mental health trends and attitudes in the tech industry through data.',
      tags: ['data analysis', 'mental health', 'tech industry'],
      github: 'https://github.com/mahendrakaswan/Mental-Health-in-Tech',
    },
    {
      title: 'More coming soon',
      description: 'Always building, always learning. New projects on the way.',
      tags: ['stay tuned'],
    },
  ],
  social: [
    { label: 'github', url: 'https://github.com/mahendrakaswan' },
    { label: 'linkedin', url: 'https://linkedin.com/in/mahendra-kaswan' },
    { label: 'kaggle', url: 'https://www.kaggle.com/mahendrakaswan' },
    { label: 'twitter', url: 'https://x.com/Mahendrakaswan7' },
    { label: 'substack', url: 'https://mkaswan.substack.com' },
    { label: 'email', url: 'mailto:kaswanmahendra7@gmail.com' },
  ],
  footer: {
    message: 'made with care, 2026',
  },
};

export type SiteContent = typeof siteContent;
