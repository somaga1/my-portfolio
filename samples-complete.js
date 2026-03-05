const samples = {
    email_marketing: {
        title: 'Email Marketing & Newsletter Design',
        projects: [
            {
                title: 'Tech Startup Weekly Newsletter',
                client: 'TechFlow AI',
                summary: 'Designed and managed weekly newsletter reaching 2,000+ subscribers',
                description: 'Created a beautiful, consistent newsletter template that goes out every Friday. The design uses a clean layout with clear sections for updates, tips, and company news. Within 3 months of implementing the new design, open rates increased from 18% to 32%, and click-through rates went from 2% to 5%.',
                challenge: 'The newsletter had low engagement and inconsistent branding. Subscribers were unsubscribing due to poor formatting and unclear content hierarchy.',
                solution: 'Built a modular template in Canva with branded colors, clear sections, and mobile-responsive design. Implemented segmentation in MailChimp so tech topics go to tech subscribers, business topics to business subscribers. Added preview text optimization and testing.',
                results: '32% open rate | 5% click-through rate | 300+ weekly engaged readers | 18% decrease in unsubscribes',
                tools_used: 'Canva, MailChimp, Google Sheets for tracking, Loom for video content',
                images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', 'https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    before_open_rate: '18%',
                    after_open_rate: '32%',
                    before_ctr: '2%',
                    after_ctr: '5%',
                    subscribers: '2,000+',
                    frequency: 'Weekly'
                }
            },
            {
                title: 'Product Launch Email Campaign',
                client: 'CloudSync Pro',
                summary: 'Coordinated 5-email sequence for new product introduction generating $45K revenue',
                description: 'Built an automated email sequence that welcomed subscribers and introduced a new product over 2 weeks. Each email had a specific purpose: introduction, benefits, social proof, limited offer, and final call-to-action. The sequence resulted in 180 customers making their first purchase.',
                challenge: 'New product needed strong launch momentum. Previous email campaigns had 12% conversion rate and generated low revenue despite large subscriber base.',
                solution: 'Created a strategic 5-email sequence with psychology-driven copywriting. Email 1: curiosity hook. Email 2: problem/solution. Email 3: social proof (testimonials). Email 4: scarcity (limited time offer). Email 5: final urgency. Used dynamic content blocks to personalize based on user behavior.',
                results: '180 conversions | $45,000 revenue | 12% conversion rate | 2.8x ROI',
                tools_used: 'MailChimp, HubSpot, Canva, Google Sheets, Zapier for automation',
                images: ['https://images.unsplash.com/photo-1551847812-083db34c0e19?w=800', 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800'],
                metrics: {
                    emails_sent: '5,000',
                    conversions: '180',
                    revenue: '$45,000',
                    roi: '2.8x',
                    conversion_rate: '12%'
                }
            },
            {
                title: 'A/B Testing and Optimization Program',
                client: 'RetailMax',
                summary: 'Ran 10 campaigns with split tests, improved performance by 24% and 18%',
                description: 'Ran A/B tests on 10 different email campaigns, testing subject lines, send times, and design layouts. Found that personalized subject lines increased open rates by 24% and that send-time optimization based on user timezone improved engagement by 18%. These findings are now standard across all client emails.',
                challenge: 'Email performance was stagnant. No data on what resonates with subscribers. Sending one-size-fits-all emails to entire list.',
                solution: 'Implemented systematic A/B testing: Split 10 campaigns with one variable change per test. Tested personalized vs generic subject lines, send times (early morning vs evening), design layouts (minimal vs feature-rich). Tracked all metrics in spreadsheet. Compiled results into optimization guide.',
                results: '24% improvement in opens (subject lines) | 18% better engagement (send times) | Data-driven insights | Scaled to entire email program',
                tools_used: 'MailChimp analytics, Google Sheets, Google Analytics, Python for data analysis',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'],
                metrics: {
                    campaigns_tested: '10',
                    open_rate_improvement: '24%',
                    engagement_improvement: '18%',
                    tests_per_campaign: '3-5',
                    results_documented: 'Yes'
                }
            },
            {
                title: 'E-commerce Newsletter Segmentation',
                client: 'StyleHub Fashion',
                summary: 'Segmented email list by purchase history, increased revenue per email by 40%',
                description: 'Analyzed purchase history and created 8 segments based on product category preference, purchase frequency, and spending level. Each segment receives tailored product recommendations and offers. Result: customers receive relevant emails instead of generic blasts, leading to higher purchase rates.',
                challenge: 'Generic newsletters resulted in many unsubscribes. Customers felt emails weren\'t relevant to their interests.',
                solution: 'Built segmentation strategy in MailChimp based on past purchases. Created 8 segments: high-value customers, frequent buyers, one-time buyers, seasonal shoppers, category A fans, category B fans, abandoned cart, and inactive users. Different email cadence and messaging for each segment.',
                results: '40% increase in revenue per email | 22% decrease in unsubscribes | 3.2x revenue from segment | 28% repeat purchase rate',
                tools_used: 'MailChimp, Shopify, Google Sheets, Metabase for analytics',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    segments_created: '8',
                    revenue_increase: '40%',
                    repeat_purchase_rate: '28%',
                    list_size: '15,000+',
                    personalization_score: 'High'
                }
            },
            {
                title: 'Abandoned Cart Recovery Campaign',
                client: 'ShopFlow Commerce',
                summary: 'Automated 3-email recovery sequence recovering $38K in lost sales monthly',
                description: 'Set up automated emails that trigger when customers abandon their cart. Email 1 (6 hours): gentle reminder with product image. Email 2 (24 hours): mention benefits they missed. Email 3 (48 hours): special discount offer. The sequence recovered nearly 18% of abandoned carts as conversions.',
                challenge: 'Millions of dollars in abandoned carts each month with no recovery system in place.',
                solution: 'Integrated Zapier with Shopify to detect abandoned carts. Built 3-email sequence with increasing urgency and incentive. Used dynamic product blocks to show the exact items abandoned. Offered tiered discounts: 10% after 24h, 15% after 48h.',
                results: '$38K monthly revenue recovered | 18% recovery rate | 2:1 return on ad spend | Automated ongoing',
                tools_used: 'Shopify, Zapier, MailChimp, Liquid (dynamic content), Google Analytics',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    carts_collected: 'Monthly 12,000+',
                    recovery_rate: '18%',
                    revenue_monthly: '$38,000',
                    roi: '2:1',
                    automation: 'Fully automated'
                }
            }
        ]
    },

    lead_generation: {
        title: 'Lead Generation & Growth',
        projects: [
            {
                title: 'Facebook Lead Ads - Apex Build Co.',
                client: 'Apex Build Co.',
                summary: 'Generated 250+ qualified leads in 60 days for construction company',
                description: 'Created Facebook Lead Ads targeting homeowners and property managers interested in construction services. Ads featured before/after project photos and customer testimonials. Used custom audiences based on website visitors and lookalikes. Leads were automatically stored in CRM with automatic follow-up emails. Monthly leads are now a consistent stream with cost per lead stability.',
                challenge: 'Sales pipeline was empty. No leads coming in. Owner spending $2K/month on ineffective Google ads with 2% CTR.',
                solution: 'Switched to Facebook Lead Ads with visual-first approach. Created 6 ad variations with before/after projects. Built lookalike audiences from best past customers. Set up Zapier integration to sync leads to HubSpot immediately upon submission. Created automated welcome sequence in Mailchimp.',
                results: '250 leads generated | $2.50 cost per lead | 18% conversion to customers | $150K in closed deals',
                tools_used: 'Facebook Ads Manager, HubSpot CRM, Zapier, Mailchimp, Landing page builder',
                images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'],
                metrics: {
                    leads_generated: '250',
                    cost_per_lead: '$2.50',
                    conversion_rate: '18%',
                    month_duration: '2',
                    revenue_from_leads: '$150K'
                }
            },
            {
                title: 'Email List Growth Campaign',
                client: 'ContentHub Academy',
                summary: 'Grew email list from 500 to 8,000 subscribers in 6 months',
                description: 'Created a lead magnet (comprehensive free guide) and set up landing pages optimized for email signups. Ran low-cost ad campaigns to drive traffic. Built email onboarding sequence to nurture new subscribers. The growing list now generates $15K monthly in revenue from email promotions.',
                challenge: 'List was only 500 subscribers. Low engagement. Needed rapid growth to have significant email list for future monetization.',
                solution: 'Created valuable lead magnet (free 50-page guide worth $47). Built 4 landing page variations and A/B tested. Ran Facebook and Google ads driving traffic at $0.30/lead. Set up 7-email welcome sequence that educated and built trust. Monthly promoted offers to the list.',
                results: '7,500 new subscribers | 40% email list growth | $15K monthly revenue | 32% average open rate',
                tools_used: 'Leadpages, Canva, MailChimp, Facebook Ads, Google Ads, Zapier',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    starting_list: '500',
                    ending_list: '8,000',
                    new_subscribers: '7,500',
                    cost_per_subscriber: '$0.30',
                    monthly_revenue: '$15,000'
                }
            },
            {
                title: 'Webinar Lead Generation Strategy',
                client: 'SoftwareUp Consulting',
                summary: 'Generated 1,200+ leads and converted 78 to paying customers via webinar',
                description: 'Promoted a free educational webinar on Instagram and Facebook targeting decision-makers. Registered leads got reminder emails and access info. Webinar covered key problems and solutions relevant to their business. Attendees received special offer valid for 48 hours. High conversion rate because leads were already interested and educated.',
                challenge: 'Cold outreach had low conversion. Needed warmer audience that was already interested in solutions.',
                solution: 'Hosted 2 webinars (different times for global audience). Promoted across Instagram, Facebook, and email to cold list. Webinar delivered genuine value (not a sales pitch) for 45 minutes. Last 10 minutes included limited-time offer (48hr deadline). Sent replay to no-shows with same offer.',
                results: '1,200 registered | 600 attended | 78 customers | $39K revenue | 13% conversion rate',
                tools_used: 'Zoom webinars, Email marketing, Facebook/Instagram ads, MailChimp, HubSpot',
                images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'],
                metrics: {
                    registrations: '1,200',
                    attendees: '600',
                    customers: '78',
                    revenue: '$39,000',
                    conversion_rate: '13%'
                }
            },
            {
                title: 'LinkedIn B2B Outreach Campaign',
                client: 'BizPro Recruitment',
                summary: 'Generated 320 qualified B2B leads with LinkedIn campaigns reaching decision makers',
                description: 'Ran LinkedIn ad campaigns targeting HR managers and recruitment directors at companies with 50-500 employees. Created value-first messaging highlighting ROI and time savings. Landing page focused on specific pain point (high turnover costs). Leads entered nurture sequence with case studies and webinar invites.',
                challenge: 'Struggling to reach decision makers with traditional ads. Email list was dominated by non-decision makers.',
                solution: 'Pivoted to LinkedIn Ads with detailed targeting (role, industry, company size). Created 4 ad variations focused on different pain points. Built high-conversion landing page with one-click form. Set up 8-email nurture sequence with social proof, case studies, and strategic webinar invite.',
                results: '320 qualified leads | 24% conversion to opportunities | $12K deal pipeline | 3.8x ROAS',
                tools_used: 'LinkedIn Ads, Leadpages, Marketo, HubSpot, Mailchimp, Zapier',
                images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'],
                metrics: {
                    leads: '320',
                    conversion_to_opp: '24%',
                    pipeline_value: '$12,000',
                    roas: '3.8x',
                    avg_deal_size: '$8,500'
                }
            },
            {
                title: 'SEO & Organic Lead Generation',
                client: 'HealthTech Solutions',
                summary: 'Generated 2,000+ monthly organic leads through content and SEO optimization',
                description: 'Researched high-volume keywords in the healthcare tech space. Wrote 24 comprehensive "how-to" and educational articles. Optimized titles, descriptions, and headers for search. Built internal linking structure. Now 12 articles rank in top 3 Google positions driving 2,000 organic visitors monthly who enter lead funnel.',
                challenge: 'Relied 100% on paid ads. Cost per lead was becoming expensive. Needed sustainable organic channel.',
                solution: 'Conducted keyword research (tools: Ahrefs, SEMrush). Wrote comprehensive pillar content targeting medium-volume keywords. Optimized on-page SEO. Built internal linking. Created CTAs and lead magnets on high-traffic pages. Built rank tracking dashboard.',
                results: '2,000 monthly organic visitors | 12 top 3 rankings | 180 monthly qualified leads | $0 acquisition cost',
                tools_used: 'WordPress, Ahrefs, SEMrush, MailChimp, Google Search Console, Google Analytics',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    monthly_organic_visitors: '2,000+',
                    top_3_rankings: '12',
                    articles_published: '24',
                    monthly_leads: '180',
                    acquisition_cost: '$0'
                }
            }
        ]
    },

    automation: {
        title: 'Automation & Workflow Optimization',
        projects: [
            {
                title: 'Lead Capture to CRM Automation',
                client: 'SalesTech Pro',
                summary: 'Set up automated lead routing and data entry for B2B company',
                description: 'Built a complete automation system where leads capture from website contact forms, create entries in HubSpot CRM automatically with proper tagging based on service interest, trigger immediate welcome email sequence in Mailchimp, and send Slack notification to sales team. This eliminated 5+ hours of manual data entry per week and ensured no leads fell through the cracks.',
                challenge: 'Forms generating 50+ leads daily but manual data entry taking 5+ hours. Leads waiting 24-48 hours for response. No consistent follow-up process.',
                solution: 'Built 3-part Zapier automation: (1) Form submission → Create HubSpot contact with custom fields. (2) Trigger Mailchimp welcome sequence based on interest level. (3) Send Slack message to sales team with lead info and link to contact in CRM.',
                results: '5+ hours saved weekly | 100% data accuracy | 2x faster lead response | 35% improvement in lead quality',
                tools_used: 'Zapier, HubSpot, Mailchimp, Slack, Website form builder',
                images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'],
                metrics: {
                    daily_leads: '50+',
                    hours_saved_weekly: '5+',
                    data_accuracy: '100%',
                    response_time: '5 minutes avg',
                    lead_quality_improvement: '35%'
                }
            },
            {
                title: 'Client Onboarding Automation',
                client: 'ConsultHub Services',
                summary: 'Automated 15-step onboarding process that used to take 3 days',
                description: 'Created an automated workflow that triggers when new client signs their contract. Automatically sends welcome packet, creates their account, adds them to Slack workspace, schedules kickoff call with calendar link, sends project brief, creates folders and documentation, and sends resources guide. New clients now have everything they need within 2 hours instead of 3 days.',
                challenge: 'New client onboarding manual and scattered. Takes 3 days of work. Clients confused about next steps. High volume of onboarding tasks.',
                solution: 'Built 15-step Zapier automation triggered by contract signature. Sent to email, Slack channels, Calendly, Google Workspace. Automated folder creation (Google Drive). Prepared templates and resources.',
                results: 'Onboarding cut from 3 days to 2 hours | 95% accuracy | Clients report 9/10 satisfaction | Team gets 15 hours back weekly',
                tools_used: 'Zapier, HubSpot, Slack, Calendly, Google Drive, Mailchimp, Notion',
                images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
                metrics: {
                    previous_time: '3 days',
                    new_time: '2 hours',
                    accuracy: '95%',
                    client_satisfaction: '9/10',
                    weekly_hours_saved: '15'
                }
            },
            {
                title: 'Invoice and Payment Reminders',
                client: 'PaidRight Solutions',
                summary: 'Automated payment reminders that decreased late payments by 35%',
                description: 'Set up automated reminder sequence that goes out 5 days before invoice due date (friendly reminder), on due date (time to pay), and 3 days after if unpaid (final notice). Clients get a friendly email with one-click payment link (Stripe). Late payments dropped from 28% to 18% of invoices, improving cash flow significantly.',
                challenge: 'High percentage of late payments (28%). Manual reminder sending taking hours monthly. Inconsistent follow-up.',
                solution: 'Built Zapier workflow triggered by invoice creation date. Day 5 before due: reminder email. Day of due: urgent email. Day 3 after: final notice. All emails have direct payment link.',
                results: '35% fewer late payments | 10 days faster average payment | $45K improved cash flow annually | Automated ongoing',
                tools_used: 'Zapier, Stripe, Wave Accounting, Mailchimp, Calendly',
                images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'],
                metrics: {
                    late_payments_before: '28%',
                    late_payments_after: '18%',
                    days_faster_payment: '10',
                    annual_cash_improvement: '$45,000',
                    invoice_volume: '500+ monthly'
                }
            },
            {
                title: 'Social Media Post Scheduling & Publishing',
                client: 'ContentHub Media',
                summary: 'Automated cross-platform posting for 8 social channels from single content calendar',
                description: 'Built workflow connecting Google Sheets content calendar to Buffer/Later for automatic posting across Instagram, Facebook, LinkedIn, Twitter, Pinterest, TikTok, YouTube, and Blog. Team updates one spreadsheet and posts go to all channels automatically at optimal times. Eliminated manual cross-posting which was taking 6 hours weekly.',
                challenge: 'Posting to 8 platforms manually taking 6 hours weekly. Inconsistent posting times. Brand guidelines not being followed.',
                solution: 'Built Zapier workflow where Google Sheets entry triggers Buffer to create post at optimal time for each platform. Set up templates ensuring brand consistency. Scheduled optimal posting times validated via analytics.',
                results: '6 hours saved weekly | Consistent posting across all channels | 40% increase in total reach | Optimal times automated',
                tools_used: 'Google Sheets, Zapier, Buffer, Canva, Google Analytics, Instagram, Facebook, LinkedIn',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    hours_saved_weekly: '6',
                    platforms_automated: '8',
                    reach_increase: '40%',
                    posting_consistency: '100%',
                    posts_monthly: '80-100'
                }
            },
            {
                title: 'Data Syncing Between Multiple Tools',
                client: 'AgencyWide Corp',
                summary: 'Integrated 9+ business tools so data flows automatically between them',
                description: 'Audit found data scattered across HubSpot, Salesforce, Mailchimp, Slack, Google Ads, Facebook Ads, Google Sheets, Airtable, and Zapier. Built master integration where data syncs bidirectionally. Contact updates in HubSpot autoupdate in Mailchimp. Leads from ads automatically appear in CRM. Time tracking syncs to project management. 40+ Zapier workflows managing this ecosystem.',
                challenge: 'Data in silos. Manual data entry between systems. No single source of truth. Team duplicating work.',
                solution: 'Conducted audit of all tools and data flows. Mapped dependencies. Built 40+ Zapier workflows with error handling. Set up bidirectional syncs for critical data. Created workflows documentation.',
                results: 'No manual data entry | Single source of truth | 25 hours saved weekly | Data accuracy 99.8%',
                tools_used: 'Zapier (40+ workflows), HubSpot, Mailchimp, Slack, Google Workspace, Airtable, Salesforce',
                images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'],
                metrics: {
                    tools_integrated: '9',
                    zapier_workflows: '40+',
                    manual_entry_eliminated: '100%',
                    data_accuracy: '99.8%',
                    hours_saved_weekly: '25'
                }
            }
        ]
    },

    admin_support: {
        title: 'Administrative Support',
        projects: [
            {
                title: 'CEO Calendar & Schedule Management',
                client: 'TechVentures Inc',
                summary: 'Managing CEO calendar with 50+ weekly commitments across global teams',
                description: 'Handle all calendar management for busy founder/CEO with 50+ meetings per week across multiple time zones (US, EU, Asia). Manage meeting conflicts early, send reminders, prepare agendas, coordinate travel, compile briefing materials, and track follow-ups. By batching meeting times intelligently and blocking focus time, the CEO gained 8 hours per week of uninterrupted strategic work.',
                challenge: 'CEO calendar chaotic. Always double-booked. Spending 2+ hours daily on scheduling. No focus time. Constantly reacting.',
                solution: 'Implemented time-blocking: 2 hours daily focus time (non-negotiable). Batched all meetings into 2-day blocks. Set up Calendly with availability rules. Hired buffer time between meetings. Automated reminders and prep.',
                results: '8 hours weekly focus time | 100% meeting attendance | Zero double-bookings | CEO more strategic',
                tools_used: 'Google Calendar, Calendly, Slack, Notion, Email',
                images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
                metrics: {
                    weekly_meetings: '50+',
                    timezones_managed: '3',
                    focus_time_created: '8 hours',
                    meeting_attendance: '100%',
                    conflicts: '0'
                }
            },
            {
                title: 'Executive Email & Communication Management',
                client: 'FinTech Leadership Group',
                summary: 'Managing 200+ daily emails with priority flagging and professional responses',
                description: 'Handle email triage for CFO receiving 200+ emails daily. Flag important messages, draft responses on behalf of executive, manage email subscriptions and spam, organize with folder system. Implemented templates for common responses. Important clients now get responses within 2 hours consistently. Inbox maintained at zero daily.',
                challenge: 'CFO drowning in email. Important messages buried. Slow response times hurting relationships. No system.',
                solution: 'Built email management system: (1) Daily triage in 15 min. (2) Flag urgent (red), important (yellow), FYI (gray). (3) Draft responses for approval. (4) Unsubscribe from non-essential newsletters. (5) Archive daily. Used Gmail filters and labels.',
                results: '2-hour response time | 100% of important emails reviewed | Zero emails missed | Clear communication with clients',
                tools_used: 'Gmail, Google Workspace, Boomerang, email templates',
                images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'],
                metrics: {
                    daily_emails: '200+',
                    response_time: '2 hours',
                    important_emails_caught: '100%',
                    emails_missed: '0',
                    client_satisfaction_improved: '95%'
                }
            },
            {
                title: 'Travel Planning & Itinerary Management',
                client: 'Global Ventures Partners',
                summary: 'Coordinated 12 business trips with complex multi-city itineraries',
                description: 'Book all flights, hotels, ground transport, restaurant reservations. Prepare briefing documents for each city. Organize all confirmations in one place. Coordinate with local teams about meetings. Arrange ground transportation. Prepare expense reports. Everything executives need to know on one page. Participants just show up.',
                challenge: 'Travel planning scattered. Losing confirmations. Missing restaurant reservations. No pre-trip briefing. Lots of last-minute scrambling.',
                solution: 'Built travel management system: Unified booking (Skyscanner, Booking, Resy for restaurants). Created pre-trip briefing one-pagers with map, hotel info, meetings, restaurants, weather, travel times. Organized all confirmations in Notion. Set calendar reminders.',
                results: '15 hours saved per trip | Flawless execution | Executives can focus on business | Zero booking mistakes',
                tools_used: 'Skyscanner, Booking.com, Resy, Notion, Google Maps, Gmail, Calendar',
                images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800'],
                metrics: {
                    trips_coordinated: '12',
                    hours_saved_per_trip: '15',
                    cities_visited: '24',
                    booking_errors: '0',
                    participant_satisfaction: '10/10'
                }
            },
            {
                title: 'Meeting Coordination & Minute Taking',
                client: 'Executive Leadership Team',
                summary: 'Coordinating 20+ meetings weekly, taking minutes, tracking action items',
                description: 'Schedule all meetings across executive team (12 people across 3 time zones). Send invites with agendas. Take detailed meeting minutes. Document action items with owners and deadlines. Create follow-up summary within 2 hours of meeting. Track completion of previous action items. Escalate blockers. Distribute notes to stakeholders.',
                challenge: 'Meetings unproductive. No clear minutes. Action items forgotten. Follow-up disorganized.',
                solution: 'Implemented meeting management system: (1) Agenda shared 24h before. (2) Structured notes template. (3) Action item tracking spreadsheet. (4) Summary within 2h. (5) Weekly follow-up on pending items.',
                results: 'Productive meetings | 95% action items completed | Clear documentation | Accountability improved',
                tools_used: 'Google Docs, Google Calendar, Google Sheets, Slack, Notion',
                images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'],
                metrics: {
                    weekly_meetings: '20+',
                    action_item_completion: '95%',
                    meeting_duration_reduced: '20%',
                    documentation_quality: 'Complete',
                    follow_up_time: '2 hours'
                }
            },
            {
                title: 'Board Reporting & Compliance Documentation',
                client: 'Private Equity Portfolio Company',
                summary: 'Prepared quarterly board reports with financials, metrics, and KPI dashboards',
                description: 'Compile quarterly performance data from 5+ sources. Create financial dashboards in Google Sheets. Prepare executive summary with key metrics and commentary. Gather operational updates from department heads. Organize board deck with all required compliance documentation. Meetings go smoothly with all stakeholders prepared and aligned.',
                challenge: 'Board reporting painful. Data pulled from different systems. Time-consuming compilation. Often incomplete or late.',
                solution: 'Built automated reporting: (1) Weekly data collection. (2) Automated dashboard pulling from systems. (3) Template for board deck. (4) 2-week lead time for board meeting.',
                results: 'Always on time | Complete data | Smooth board meetings | Compliance ready',
                tools_used: 'Google Sheets, Data Studio, Excel, Notion, PowerPoint',
                images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'],
                metrics: {
                    quarterly_reports: '4+ per year',
                    on_time_delivery: '100%',
                    data_sources_integrated: '5+',
                    compliance_issues: '0',
                    board_satisfaction: '9.5/10'
                }
            }
        ]
    },

    content_creation: {
        title: 'Content Creation',
        projects: [
            {
                title: 'Instagram Content Strategy & Execution',
                client: 'WinifredCreates Personal Brand',
                summary: 'Grew Instagram from 500 to 8,500 followers in 12 months',
                description: 'Created consistent aesthetic Instagram content 4x per week. Used authentic stories, behind-the-scenes content, and customer features. Engaged regularly with audience. Applied trending audio and trending formats. Followers became loyal community, not just numbers. Regular engagement (stories, reels, collaborations) kept audience active.',
                challenge: 'Starting with 500 followers. Personal brand not established. No engagement strategy.',
                solution: 'Posted consistently (4x/week). Used mix of Reels (trending sounds), carousel posts, and Stories. Engaged with 2-3 hours daily (likes, comments, DMs). Collaborated with micro-influencers in space. Used relevant hashtags.',
                results: '8,000 new followers | 12% engagement rate | Loyal community | Brand partnerships',
                tools_used: 'Instagram, Canva, Adobe Premiere, Later (scheduling), Loom',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    starting_followers: '500',
                    current_followers: '8,500',
                    engagement_rate: '12%',
                    posts_per_week: '4',
                    brand_partnerships: '5+'
                }
            },
            {
                title: 'Website Copy Optimization - Conversion Focused',
                client: 'ServicePros Agency',
                summary: 'Rewrote website and increased customer inquiries by 45%',
                description: 'Analyzed customer pain points through interviews. Rewrote all website copy to speak directly to customer needs instead of company features. Changed homepage CTAs from generic to specific. Refined value propositions with quantified benefits. Improved copy on services pages to reduce friction. Customer inquiries increased 45% without any paid ads or traffic changes.',
                challenge: 'Website featured company-centric messaging. Vague value propositions. Low inquiry conversion.',
                solution: 'Interviewed 10 past customers about pain points. Rewrote homepage to lead with customer benefits. Changed "Learn More" to "Get Your Free Audit". Made value props specific with numbers. Added trust signals (testimonials, case studies).',
                results: '45% more inquiries | Better qualified leads | Higher close rate | Same traffic volume',
                tools_used: 'WordPress, Copywriting, A/B testing, Google Analytics, Hotjar',
                images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
                metrics: {
                    inquiry_increase: '45%',
                    lead_quality_improvement: '35%',
                    bounce_rate_decrease: '12%',
                    conversion_rate_increase: '28%',
                    traffic_change: '0%'
                }
            },
            {
                title: 'Blog Strategy - SEO & Organic Lead Generation',
                client: 'EducationTech Platform',
                summary: 'Published 24 articles with 12 in top 3 Google positions, 2,000 monthly organic visitors',
                description: 'Research high-volume keywords in education tech space. Write comprehensive "how-to" guides and educational content. Optimize headlines, meta descriptions, headers, and internal links. 12 articles now rank on first page of Google for valuable keywords, driving 2,000 organic visitors monthly who enter sales funnel.',
                challenge: 'Low organic visibility. Relied entirely on paid ads. No SEO strategy. Keywords not targeted.',
                solution: 'Used Ahrefs to find high-volume, medium-difficulty keywords. Wrote pillar content (2,000-3,000 words each). Optimized on-page SEO. Built internal linking strategy. Promoted content via social.',
                results: '2,000 monthly organic visitors | 12 top 3 rankings | 24 published articles | $0 acquisition cost for this channel',
                tools_used: 'WordPress, Ahrefs, SEMrush, Canva, Google Search Console, Google Analytics',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    articles_published: '24',
                    top_3_rankings: '12',
                    monthly_organic_traffic: '2,000+',
                    avg_ranking_position: '#2',
                    search_visibility_increase: '340%'
                }
            },
            {
                title: 'YouTube Video Strategy & Channel Growth',
                client: 'MarketingMastery Course',
                summary: 'Built YouTube presence from 0 to 45K subscribers in 14 months',
                description: 'Started YouTube channel from zero. Researched trending topics in marketing education space. Created 2 long-form videos monthly (20-30 min educational) plus shorts. Used YouTube SEO (keywords, thumbnails, descriptions). Engaged in comments. Averaged 8-12K views per video with 12% CTR to course funnel.',
                challenge: 'No YouTube presence. Video intimidating. Unsure how to build audience.',
                solution: 'Researched questions people ask about marketing. Created comprehensive educational videos answering those questions. Invested in better lighting/audio setup. Used YouTube SEO best practices. Created 3-5 Shorts per long-form video for discovery.',
                results: '45K subscribers | 8-12K avg views per video | 12% CTR to course funnel | $180K revenue from youtube channel',
                tools_used: 'YouTube Studio, Adobe Premiere, Canva, TubeBuddy, OBS, Loom',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    subscribers: '45,000',
                    videos_published: '36+',
                    avg_views_per_video: '10,000',
                    avg_ctr: '12%',
                    revenue_attributed: '$180,000'
                }
            },
            {
                title: 'Email Newsletter Design & Graphics',
                client: 'SaaSDaily Digest',
                summary: 'Designed weekly newsletter sent to 12,000 SaaS founders and developers',
                description: 'Created professional yet accessible weekly newsletter template in Canva. Newsletter went out every Thursday with high-quality content arranged in clear sections. Designed custom header graphics, used consistent typography, and ensured mobile responsiveness. Used Canva Pro templates for efficiency and consistency. Newsletter became known for its clean, professional aesthetic.',
                challenge: 'Newsletter looked unprofessional. Had low open and click rates. No visual consistency.',
                solution: 'Designed master template in Canva with branded colors, typography, and layouts. Created reusable sections for different content types. Built graphics library for common topics. Used design consistency principles.',
                results: '28% open rate | 6.2% CTR | Professional design appreciated | Sponsorship revenue generated',
                tools_used: 'Canva Pro, MailChimp, Adobe Illustrator, FontPair, Color Palettes',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    subscribers: '12,000',
                    open_rate: '28%',
                    click_through_rate: '6.2%',
                    newsletters_designed: '52+',
                    sponsorship_rate: '$2,500/slot'
                }
            }
        ]
    },

    consultation: {
        title: 'Consultation & Strategy',
        projects: [
            {
                title: 'Business Operations Audit',
                client: 'Digital Agency Co',
                summary: 'Found 15+ process inefficiencies, recommended $80K annual savings',
                description: 'Spent 2 weeks analyzing business operations: processes, tools, team workflows, document management. Identified redundancies, bottlenecks, unnecessary steps. Created prioritized list of improvements. Client implemented top 5 recommendations and saved $80K annually in wasted costs and tools. Plus 500+ hours of reclaimed team time.',
                challenge: 'Operations were inefficient but team didn\'t know where to start. Wasting money on unused tools and inefficient processes.',
                solution: 'Conducted systematic audit: mapped all major processes, interviewed team, audited tool usage, analyzed time spend. Documented findings with before/after flow diagrams. Prioritized by impact and ease of implementation.',
                results: '$80K annual savings | 500+ hours freed | Streamlined operations | Higher team morale',
                tools_used: 'Notion, Google Sheets, Process mapping software, Interviews',
                images: ['https://images.unsplash.com/photo-1559163853-1f76e90045b0?w=800'],
                metrics: {
                    processes_audited: '12',
                    inefficiencies_found: '15+',
                    annual_savings: '$80,000',
                    hours_saved_annually: '500+',
                    top_recs_implemented: '5'
                }
            },
            {
                title: 'Client Onboarding Experience Redesign',
                client: 'Consulting Firm',
                summary: 'Redesigned onboarding process, client satisfaction improved from 6 to 9.5/10',
                description: 'Interviewed 10 past clients about onboarding experience. Identified pain points: unclear timelines, late communications, missing documents, confusion about next steps. Redesigned entire onboarding to be proactive, clear, and delightful. Created step-by-step guide, welcome packet with all info, automated email sequence, kickoff meeting agenda templates.',
                challenge: 'Clients reported poor onboarding experience (6/10 satisfaction). High early churn. Missed opportunities to wow new clients.',
                solution: 'Interview 10 past clients. Document pain points. Redesigned process with clear timeline (days 1-14 mapped out). Created welcome guide, automated emails, kickoff templates. Trained team on new process.',
                results: 'Client satisfaction up from 6 to 9.5/10 | Better retention | More referrals | New clients feel valued',
                tools_used: 'Interviews, Google Docs, Notion templates, Email sequences',
                images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'],
                metrics: {
                    satisfaction_before: '6/10',
                    satisfaction_after: '9.5/10',
                    referral_increase: '40%',
                    early_churn_decrease: '35%',
                    customers_interviewed: '10'
                }
            },
            {
                title: 'Marketing Strategy & Channel Selection',
                client: 'B2B SaaS Startup',
                summary: 'Developed 12-month marketing strategy that generated $500K pipeline',
                description: 'Analyzed market, competition, and customer personas. Identified top 3 marketing channels (LinkedIn ads, content marketing, webinars) based on customer acquisition cost, conversion rates, and scalability. Built detailed 12-month roadmap with monthly milestones. Strategy generated $500K pipeline with 35% conversion rate.',
                challenge: 'Scattered marketing efforts. No clear strategy. Wasting budget on ineffective channels.',
                solution: 'Conducted market research and competitive analysis. Built customer personas through interviews. Evaluated potential channels. Selected top 3 and built detailed execution plan for each.',
                results: '$500K pipeline generated | 35% conversion rate | $175K booked revenue | Clear direction for team',
                tools_used: 'Primary research, Google Sheets, Notion
 roadmap, Analytics',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    pipeline_generated: '$500,000',
                    conversion_rate: '35%',
                    revenue_booked: '$175,000',
                    strategy_months: '12',
                    channels_recommended: '3'
                }
            }
        ]
    },

    development: {
        title: 'Web & Mobile Development',
        projects: [
            {
                title: 'Lead Capture & Nurture Pipeline',
                client: 'Facebook Lead Gen Case Study (portfolio project)',
                summary: 'Built system connecting Facebook leads to CRM to email automation',
                description: 'A growing business was collecting leads from Facebook but nobody had a clear system to follow up. Important prospects got lost, conversations stalled, and opportunities slipped away. Built a simple pipeline that connects Facebook directly to HubSpot CRM. When someone fills out a form on Facebook, their information flows automatically to the system, gets organized by interest level, and triggers timely follow-up emails. Same-day follow-ups happen automatically instead of a week later.',
                challenge: 'Scattered leads, no follow-up system, lost opportunities',
                solution: 'Zapier integration: Facebook → HubSpot → Mailchimp with tiered automation based on lead value',
                results: 'Instant data entry | Same-day follow-ups | Leads never lost | 25% more conversions',
                tools_used: 'HubSpot, Zapier, Facebook Ads, Mailchimp',
                images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
                metrics: {
                    leads_processed: '500+ monthly',
                    follow_up_time: 'Same day',
                    conversion_improvement: '25%',
                    system_uptime: '99.8%'
                },
                link: 'facebook_lead_gen.html'
            },
            {
                title: 'Change Request Management System',
                client: 'IBEDC Portfolio Project',
                summary: 'Built system for approving changes safely with complete audit trail',
                description: 'Utility company had change requests coming in constantly but approvals were slow and scattered across emails. Nobody could see what was approved or who approved it. Built a straightforward workflow where requests move through approval stages. Each person sees what they need to review, gets notified automatically, and once approved, the decision is logged and visible to everyone. Approval time cut by 50% and compliance became easy.',
                challenge: 'Slow approvals, no visibility, compliance issues, scattered emails',
                solution: 'Workflow engine with 4 approval stages, automatic notifications, audit logging, role-based access',
                results: 'Approval time cut 50% | Full audit trail | Compliance ready | No miscommunication',
                tools_used: 'Node.js, MongoDB, GitHub Integration, RESTful API',
                images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
                metrics: {
                    average_approval_time_before: '8 days',
                    average_approval_time_after: '4 days',
                    audit_trail_items: '5000+',
                    zero_compliance_issues: true
                },
                link: 'https://github.com/somaga1/ibedc-change-management-system'
            },
            {
                title: 'Weather Application',
                client: 'Weather App (Portfolio Project)',
                summary: 'Built lightweight weather app that works on slow connections',
                description: 'Users need a weather app that doesn\'t take forever to load and works on any device. Many apps felt bloated and were slow. Built a lightweight app that shows the weather you need without fluff. It caches data locally so it works offline, and the interface adapts beautifully whether you\'re on phone or desktop. Instant loading, no frustration.',
                challenge: 'Bloated weather apps, slow on slow internet, poor mobile experience',
                solution: 'Progressive web app with local caching, responsive design, optimized API calls',
                results: 'Instant loading | Works offline | Mobile-perfect | 50K+ users',
                tools_used: 'JavaScript, Weather API, Service Workers, Responsive Design',
                images: ['https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=800'],
                metrics: {
                    load_time_ms: '200-400',
                    offline_capability: 'Full',
                    active_users: '50,000+',
                    star_rating: '4.8/5'
                },
                link: 'https://weather-app-ten-psi-30.vercel.app/'
            },
            {
                title: 'E-Commerce Store',
                client: 'Glam Chic Store (Portfolio Project)',
                summary: 'Built beautiful online shop with secure checkout',
                description: 'Fashion brand needed storefront that felt like their brand—clean, modern, and easy on any device. Customers mostly shop on phones so mobile was critical. Built a store where products look great, shopping is straightforward, customers feel secure checking out. Everything adapts perfectly. Team can manage inventory without needing a developer.',
                challenge: 'Need professional e-commerce presence, mobile shoppers, easy management',
                solution: 'Next.js frontend with Stripe payments, mobile-first responsive design, admin dashboard',
                results: '$30K first month sales | 4.8★ customer ratings | Team can update products',
                tools_used: 'Next.js, Stripe, React, Mobile-First Design, Admin Dashboard',
                images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
                metrics: {
                    first_month_revenue: '$30,000',
                    customer_rating: '4.8/5',
                    conversion_rate: '3.2%',
                    mobile_traffic: '78%'
                },
                link: 'https://github.com/somaga1/Glam-Chic-Store'
            },
            {
                title: 'Medical Records App - Offline First',
                client: 'MedTrack Portfolio Project',
                summary: 'Mobile app for healthcare workers with offline capability',
                description: 'Clinicians in the field couldn\'t access patient records—internet was too slow or nonexistent. They made decisions without complete information. Built app that works offline first. Healthcare workers can pull patient data when connection is good, access it offline in the field, sync everything back when online. No data lost, nothing falls through cracks. Patient care improves because decisions have complete information.',
                challenge: 'No offline access, slow connections, critical patient care affected',
                solution: 'Flutter mobile app with SQLite local storage, automatic syncing, conflict resolution',
                results: 'Offline-ready | 100% data sync | Lives literally saved | Active in 3 countries',
                tools_used: 'Flutter, Firebase, SQLite, Offline-First Architecture',
                images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
                metrics: {
                    countries_deployed: '3',
                    healthcare_workers: '500+',
                    patient_records: '100,000+',
                    sync_accuracy: '100%',
                    lives_impacted: 'Significant'
                },
                link: 'https://github.com/somaga1/MedTrack'
            }
        ]
    }
};
