import hero from '../assets/hero.png'

const servicesData = [
    {
        id: 1,
        slug: 'the-virtual-employee',
        title: 'The Virtual Employee',
        subtitle: 'AI Workflow Automation',
        shortDescription:
            'A custom-integrated AI operative designed to automate back-office operations and customer interactions. We implement AI-driven response systems and data synchronization to modernize your daily execution.',
        detailDescription:
            'A specialized AI operative that works 24/7 to handle your routine digital tasks and customer inquiries without fatigue.',
        imageUrl: hero,
        steps: [
            {
                step: 'Step 1',
                title: 'Process Logic Mapping',
                content:
                    'We study your current manual tasks to identify exactly where AI can save you the most time.'
            },
            {
                step: 'Step 2',
                title: 'API Bridge Construction',
                content:
                    'We securely connect your business apps like WhatsApp or Email so the AI can communicate across all your platforms.'
            },
            {
                step: 'Step 3',
                title: 'Intelligence Indexing',
                content:
                    'We teach the AI your specific business rules, price lists, and FAQs so it speaks accurately to your customers.'
            },
            {
                step: 'Step 4',
                title: 'Safety Deployment',
                content:
                    'We set up a safety switch that instantly alerts your human team if a customer has a complex request the AI cannot solve.'
            }
        ]
    },
    {
        id: 2,
        slug: 'the-business-check-up',
        title: 'The Business Check-Up',
        subtitle: 'Digital Diagnostic Audit',
        shortDescription:
            'A professional technical diagnostic service that identifies operational bottlenecks. We provide Digital Maturity Scoring and Process Efficiency Analysis to generate your strategic technical roadmap.',
        detailDescription:
            'A professional health scan of your technology to find hidden risks, wasted costs, and opportunities for growth.',
        imageUrl: hero,
        steps: [
            {
                step: 'Step 1',
                title: 'Data Intake',
                content:
                    'We look at your current tools and software to understand how your business is currently running.'
            },
            {
                step: 'Step 2',
                title: 'Gap Analysis',
                content:
                    'Our AI identifies time-leaks and technical errors that are currently slowing down your team or costing you money.'
            },
            {
                step: 'Step 3',
                title: 'Roadmap Generation',
                content:
                    'We provide a clear, step-by-step plan showing you exactly which tech upgrades will give you the best return on investment.'
            },
            {
                step: 'Step 4',
                title: 'Strategic Briefing',
                content:
                    'A one-on-one session where we explain the findings in plain language and help you decide your next move.'
            }
        ]
    },
    {
        id: 3,
        slug: 'the-digital-guard',
        title: 'The Digital Guard',
        subtitle: 'Cyber-Security & Data Vault',
        shortDescription:
            'Enterprise-grade security hardening focused on identity management and automated data redundancy. We enforce MFA, encrypted vaults, and daily cloud backups to secure your digital assets.',
        detailDescription:
            'Enterprise-level security that locks down your business accounts and ensures your data is never lost, even in a crisis.',
        imageUrl: hero,
        steps: [
            {
                step: 'Step 1',
                title: 'Identity Audit',
                content:
                    'We review who has access to your systems to ensure there are no open doors for hackers.'
            },
            {
                step: 'Step 2',
                title: 'System Hardening',
                content:
                    'We install advanced double-lock login systems and high-security digital vaults for your passwords.'
            },
            {
                step: 'Step 3',
                title: 'Vault Automation',
                content:
                    'We set up an invisible system that saves a fresh backup of your business data every single day to a secure cloud.'
            },
            {
                step: 'Step 4',
                title: 'Resilience Testing',
                content:
                    'We run a fire drill to prove that if your data was ever deleted, we can bring it back perfectly in minutes.'
            }
        ]
    },
    {
        id: 4,
        slug: 'the-intelligence-portal',
        title: 'The Intelligence Portal',
        subtitle: 'Real-Time Business BI',
        shortDescription:
            'A centralized data visualization gateway that transforms fragmented operational data into actionable insights. We build unified data pipelines and mobile-responsive dashboards for instant performance reporting.',
        detailDescription:
            'Your business data transformed into a simple, beautiful dashboard on your phone, giving you total clarity on your performance.',
        imageUrl: hero,
        steps: [
            {
                step: 'Step 1',
                title: 'ETL Pipeline Setup',
                content:
                    'We gather information from your sales, banks, and spreadsheets and clean it so it is easy to read.'
            },
            {
                step: 'Step 2',
                title: 'Visualization Layer',
                content:
                    'We build a custom mobile dashboard that shows your profit, growth, and trends in clear, simple charts.'
            },
            {
                step: 'Step 3',
                title: 'Automated Reporting',
                content:
                    'We set up a system that sends you a Weekly Performance Digest directly to your phone every Monday morning.'
            },
            {
                step: 'Step 4',
                title: 'Optimization Training',
                content:
                    'We show you how to use these new insights to make faster, more profitable decisions for your business.'
            }
        ]
    },
    {
        id: 5,
        slug: 'tuti-pro-lms',
        title: 'Tuti-Pro LMS',
        subtitle: 'Education Management System',
        shortDescription:
            'A secure learning environment for educators to host intellectual property. Features include encrypted video hosting, digital material distribution, and robust student access control.',
        detailDescription:
            'A secure, private digital classroom where educators can host and sell their courses while protecting their videos and materials from being stolen.',
        imageUrl: hero,
        steps: [
            {
                step: 'Step 1',
                title: 'Infrastructure Deployment',
                content:
                    'We build your private teaching website and set up the professional hosting environment for you.'
            },
            {
                step: 'Step 2',
                title: 'Secure Media Gateway',
                content:
                    'We install a digital shield around your videos and PDFs so students can view them, but cannot download or share them illegally.'
            },
            {
                step: 'Step 3',
                title: 'Access Management',
                content:
                    'We set up the system that handles student logins, payments, and different levels of course access.'
            },
            {
                step: 'Step 4',
                title: 'Platform Launch',
                content:
                    'We test everything to ensure a smooth experience for your students and hand you the master keys to your new school.'
            }
        ]
    },
    {
        id: 6,
        slug: 'the-scale-engine',
        title: 'The Scale Engine',
        subtitle: 'Integrated Digital Transformation',
        shortDescription:
            'Our flagship full-stack infrastructure overhaul. We combine security, automation, and intelligence into a single scalable ecosystem over a 90-day execution cycle to ensure total business survival.',
        detailDescription:
            'Our most powerful service. A complete 3-month digital makeover that rebuilds your business to be faster, more secure, and ready to scale.',
        imageUrl: hero,
        steps: [
            {
                step: 'Step 1',
                title: 'Phase 1 Foundations',
                content:
                    'We start by securing your accounts and fixing any major tech errors found during your initial audit.'
            },
            {
                step: 'Step 2',
                title: 'Phase 2 Efficiency',
                content:
                    'We move your team into the future by installing AI automation and your Virtual Employee to handle routine work.'
            },
            {
                step: 'Step 3',
                title: 'Phase 3 Clarity',
                content:
                    'We finish by building your Intelligence Portal so you can watch your newly automated business grow in real-time.'
            },
            {
                step: 'Step 4',
                title: 'Ecosystem Stabilization',
                content:
                    'We provide 30 days of active monitoring to ensure your new digital engine is running perfectly as you scale up.'
            }
        ]
    }
]

export default servicesData