export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'bluesky' | 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type My = {
    salutation?: string;
    name?: string;
    shortBio?: string;
    mediumBio?: string;
    lfw: Boolean;
    lfwCopy: string;
    email?: string;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    my?: My;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'Travis Franklin Logo'
    },
    title: 'portfolio5',
    description: 'I eat sleep and breathe stories.',
    image: {
        src: '/portfolio5-preview.jpg',
        alt: 'portfolio5'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Follow on LinkedIn',
            href: 'https://linkedin.com/in/travisfranklin',
            icon: 'linkedin'
        },
    ],
    my: {
        salutation: 'Hi! My name is',
        name: "Travis Franklin",
        shortBio: "I eat, sleep, and breathe stories. I turn data into empathy, and empathy into design.",
        mediumBio: "I am a Frontend developer and UX designer offering over 18 years of experience designing for brands.",
        lfw: true,
        lfwCopy: "I'm currently seeking full-time work. You can reach me at",
        email: "hello@travislf.com",
    },
    subscribe: {
        title: 'Subscribe to portfolio5 Newsletter',
        text: 'One update per week. All the latest news directly in your inbox.',
        formUrl: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0'
    },
    postsPerPage: 5
};

export default siteConfig;
