CREATE DATABASE IF NOT EXISTS `promaxify_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `promaxify_db`;

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `token` VARCHAR(255) DEFAULT NULL,
  `token_expiry` DATETIME DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Default Admin: admin / Admin@12345
INSERT INTO `admins` (`id`, `username`, `password_hash`, `email`)
VALUES (1, 'admin', '$2y$10$vQ6sQfW.7p6U2FhF6z0VauY1R8e0WJcQ28H8.Wc8V1h0Y4iPZ9dI.', 'admin@promaxifymarketing.com')
ON DUPLICATE KEY UPDATE `username`=`username`;

-- 2. Services Table
CREATE TABLE IF NOT EXISTS `services` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `category` VARCHAR(100) NOT NULL DEFAULT 'Corporate Solutions',
  `short_description` TEXT NOT NULL,
  `heading` VARCHAR(255) DEFAULT NULL,
  `description` LONGTEXT DEFAULT NULL,
  `image` VARCHAR(500) DEFAULT NULL,
  `is_published` TINYINT(1) DEFAULT 1,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `services` (`id`, `title`, `slug`, `category`, `short_description`, `heading`, `description`, `image`, `is_published`, `sort_order`) VALUES
(1, 'Corporate Gifting', 'corporate-gifting', 'Corporate Solutions', 'Curated premium gifts tailored for clients, VIP delegates, and festive milestones.', 'Premium Corporate Gifting Solutions', 'Strengthen relationships with premium gift sets, tech accessories, and festive hampers branded to perfection.', 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80', 1, 1),
(2, 'Customized Apparel', 'customized-apparel', 'Corporate Solutions', 'High-grade corporate polos, hoodies, jackets, and performance uniforms.', 'Bespoke Corporate Apparel & Uniforms', 'Enhance brand identity with premium cotton and dry-fit apparel featuring high-density embroidery and screen print.', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80', 1, 2),
(3, 'Event & Exhibition Kits', 'event-exhibition-kits', 'Corporate Solutions', 'Complete booth kits, badges, lanyards, delegate folders, and tech kits.', 'Seamless Exhibition & Delegate Logistics', 'Turnkey delegate merchandise and booth kits delivered directly to trade shows, conferences, and expos.', 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80', 1, 3),
(4, 'Employee Welcome Kits', 'employee-welcome-kits', 'Engagement Solutions', 'Day-one onboarding hampers with branded tech, notebooks, bottles, and hoodies.', 'Impactful Employee Onboarding Hampers', 'Foster culture and pride right from day one with carefully packaged onboarding merchandise delivered pan-India.', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', 1, 4),
(5, 'Dealer Incentive Programs', 'dealer-incentive-programs', 'Engagement Solutions', 'Strategic rewards and loyalty merchandising for channel partners and distributors.', 'Rewarding Channel Partners That Drive Revenue', 'Custom reward catalogues and milestone gifts that foster dealer loyalty and drive healthy sales competition.', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80', 1, 5)
ON DUPLICATE KEY UPDATE `title`=`title`;

-- 3. Advanced Case Studies Table
CREATE TABLE IF NOT EXISTS `case_studies` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `client_name` VARCHAR(200) NOT NULL,
  `industry` VARCHAR(100) NOT NULL,
  `thumbnail` VARCHAR(500) NOT NULL,
  `hero_image` VARCHAR(500) DEFAULT NULL,
  `challenge` LONGTEXT NOT NULL,
  `strategy` LONGTEXT NOT NULL,
  `results` LONGTEXT NOT NULL,
  `before_after_metrics` JSON DEFAULT NULL,
  `chart_data` JSON DEFAULT NULL,
  `gallery` JSON DEFAULT NULL,
  `testimonial_quote` TEXT DEFAULT NULL,
  `testimonial_author` VARCHAR(150) DEFAULT NULL,
  `testimonial_role` VARCHAR(150) DEFAULT NULL,
  `is_published` TINYINT(1) DEFAULT 1,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `case_studies` (`id`, `title`, `slug`, `client_name`, `industry`, `thumbnail`, `hero_image`, `challenge`, `strategy`, `results`, `before_after_metrics`, `chart_data`, `gallery`, `testimonial_quote`, `testimonial_author`, `testimonial_role`, `is_published`, `sort_order`) VALUES
(1,
 'E-commerce Growth & Revenue Optimization',
 'ecommerce-growth-revenue-optimization',
 'Aura Lifestyle Retails',
 'E-commerce & Retail',
 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
 'Aura Lifestyle struggled with high customer acquisition costs, sluggish cart conversions, and weak retention across their premium lifestyle merchandise collection.',
 'Engineered a full-funnel CRO revamp, introduced VIP tiered customer merchandise unboxing kits for repeat buyers, and optimized automated SMS/Email workflows.',
 'Revenue increased by 185% over 6 months, while repeat purchase rates grew from 14% to 38% due to exclusive brand-tier engagement.',
 '[{"label": "Conversion Rate", "before": "1.2%", "after": "3.8%"}, {"label": "Repeat Orders", "before": "14%", "after": "38%"}, {"label": "Average Order Value", "before": "₹1,450", "after": "₹3,200"}]',
 '{"labels": ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"], "datasets": [{"name": "Monthly Revenue (₹ Lakhs)", "values": [12, 16, 21, 28, 32, 38]}]}',
 '["https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"]',
 'Promaxify helped us redesign our brand perception from discount retail to a premium lifestyle club. The results exceeded all our quarterly projections.',
 'Rohit Singhania',
 'Chief Marketing Officer, Aura Retails',
 1, 1),
(2,
 'Real Estate Lead Generation',
 'real-estate-lead-generation',
 'Horizon Greens Infrastructure',
 'Real Estate & Construction',
 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
 'Stagnant site-visit footfalls and low qualified buyer enquiries for a luxury residential villa project in NCR, despite significant offline print ad spend.',
 'Transitioned marketing to hyper-targeted high-net-worth digital campaigns combined with luxury invite-only experience boxes sent to pre-screened investors.',
 'Secured 320+ validated buyer visits within 90 days, generating over ₹85 Crore in closed unit registrations with a 4.2x ROAS on digital media.',
 '[{"label": "Cost Per Lead", "before": "₹4,200", "after": "₹1,150"}, {"label": "Site Visit Ratio", "before": "6%", "after": "24%"}, {"label": "Quarterly Bookings", "before": "8 Units", "after": "31 Units"}]',
 '{"labels": ["Week 1", "Week 3", "Week 6", "Week 9", "Week 12"], "datasets": [{"name": "Site Visits Delivered", "values": [18, 45, 82, 130, 185]}]}',
 '["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"]',
 'Their integration of tactile luxury presentation with targeted digital outreach created real credibility with our high-value investors.',
 'Ananya Roy',
 'VP Sales, Horizon Greens',
 1, 2),
(3,
 'Brand Identity & Digital Transformation',
 'brand-identity-digital-transformation',
 'Zenith Health Diagnostics',
 'Healthcare & Diagnostics',
 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80',
 'A fragmented 20-year-old regional laboratory network was struggling to recruit top doctors, and consumers found the brand clinical and unapproachable.',
 'Re-engineered the complete brand architecture, modernized brand collateral, designed physician onboarding packages, and deployed an intuitive consumer web portal.',
 'Brand recall jumped by 240% across key cities, corporate B2B tie-ups grew by 65%, and inbound digital test bookings expanded 3x.',
 '[{"label": "Direct Appointments", "before": "1,200/mo", "after": "4,100/mo"}, {"label": "B2B Hospital Contracts", "before": "12", "after": "34"}, {"label": "Brand Recall Index", "before": "28%", "after": "74%"}]',
 '{"labels": ["Q1", "Q2", "Q3", "Q4"], "datasets": [{"name": "Corporate Tie-ups", "values": [12, 18, 26, 34]}]}',
 '["https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"]',
 'Promaxify elevated Zenith into a respected modern healthcare brand. The cohesion between digital presence and physical touchpoints is remarkable.',
 'Dr. Arvind Verma',
 'Managing Director, Zenith Diagnostics',
 1, 3),
(4,
 'SEO & Organic Traffic Growth',
 'seo-organic-traffic-growth',
 'FinTech Bridge Advisory',
 'Finance & SaaS',
 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80',
 'A financial technology platform was reliant on expensive pay-per-click advertising, with near-zero organic search presence for high-intent business loan terms.',
 'Conducted exhaustive content gap audits, overhauled core web vitals, published structured authority guides, and executed digital PR for authoritative backlink equity.',
 'Ranked in the top 3 for 180+ competitive enterprise financial keywords, boosting organic search traffic by 420% and reducing blended CAC by 58%.',
 '[{"label": "Monthly Organic Visits", "before": "12,400", "after": "64,800"}, {"label": "Keyword Top 3 Ranks", "before": "7", "after": "184"}, {"label": "Blended CAC", "before": "₹6,800", "after": "₹2,850"}]',
 '{"labels": ["Month 1", "Month 3", "Month 6", "Month 9", "Month 12"], "datasets": [{"name": "Organic Traffic (K)", "values": [12.4, 21.0, 35.8, 51.2, 64.8]}]}',
 '["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"]',
 'Organic search is now our single most profitable pipeline. Promaxify provided a clear strategy and executed with relentless technical consistency.',
 'Pooja Agarwal',
 'Head of Growth, FinTech Bridge',
 1, 4),
(5,
 'Social Media Marketing & Audience Growth',
 'social-media-marketing-audience-growth',
 'UrbanEdge Mobility',
 'Automotive & EV',
 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
 'An emerging electric two-wheeler manufacturer lacked social buzz and community advocacy against entrenched legacy automotive giants.',
 'Created high-energy lifestyle video reels, micro-creator road trips, viral test-ride activations, and exclusive ambassador merchandise kits for first adopters.',
 'Grew community from 15,000 to over 340,000 followers, generated 28 million organic impressions, and drove 14,000+ online test ride bookings within 6 months.',
 '[{"label": "Follower Base", "before": "15,000", "after": "342,000"}, {"label": "Avg Engagement Rate", "before": "0.9%", "after": "5.6%"}, {"label": "Test-Ride Bookings", "before": "450/mo", "after": "2,350/mo"}]',
 '{"labels": ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"], "datasets": [{"name": "Audience Reach (M)", "values": [1.2, 3.8, 8.5, 15.2, 21.0, 28.4]}]}',
 '["https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80"]',
 'Promaxify turned our EV launch into a cultural statement for Gen-Z and urban professionals. The momentum they generated is unmatched.',
 'Karan Malhotra',
 'Director of Marketing, UrbanEdge Mobility',
 1, 5)
ON DUPLICATE KEY UPDATE `title`=`title`;

-- 4. Enquiries Table
CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `company` VARCHAR(150) DEFAULT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `service` VARCHAR(100) DEFAULT 'General Enquiry',
  `quantity` VARCHAR(100) DEFAULT NULL,
  `budget` VARCHAR(100) DEFAULT NULL,
  `timeline` VARCHAR(100) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `source` VARCHAR(50) DEFAULT 'contact_form',
  `status` ENUM('New', 'In Progress', 'Contacted', 'Converted', 'Closed') DEFAULT 'New',
  `follow_up_date` DATE DEFAULT NULL,
  `notes` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `enquiries` (`name`, `company`, `email`, `phone`, `service`, `quantity`, `budget`, `timeline`, `message`, `source`, `status`, `follow_up_date`, `notes`) VALUES
('Vikas Mehra', 'TechCorp India', 'vikas@techcorp.in', '+91 98112 34567', 'Corporate Gifting', '350 units', '₹1 Lakh - ₹5 Lakh', '1 - 2 weeks', 'Need customized VIP hampers for upcoming annual leadership summit.', 'proposal_form', 'New', DATE_ADD(CURDATE(), INTERVAL 1 DAY), 'Priority lead - follow up before 11 AM.'),
('Priya Sharma', 'Nexa Logistics', 'priya.s@nexalog.com', '+91 99201 88776', 'Customized Apparel', '1200 units', '₹5 Lakh - ₹10 Lakh', '2 - 4 weeks', 'Driver & warehouse crew uniform polos with embroidered company logo.', 'contact_form', 'In Progress', DATE_ADD(CURDATE(), INTERVAL 2 DAY), 'Sent quotation sample catalog on WhatsApp.'),
('Sunil Nair', 'Inventis Labs', 'sunil@inventis.co', '+91 98450 11223', 'Employee Welcome Kits', '150 units', '₹50,000 - ₹1 Lakh', 'Within 1 week', 'New joinee kit with diary, metal water bottle, hoodie and laptop bag.', 'proposal_form', 'Contacted', DATE_ADD(CURDATE(), INTERVAL 3 DAY), 'Client requested physical sample unit to review cotton GSM.'),
('Rajesh Singhal', 'Crompton Retail', 'rajesh.singhal@crompton.com', '+91 97110 55443', 'Dealer Incentive Programs', '500 units', 'Above ₹10 Lakh', '1 - 3 months', 'Annual distributor incentive reward catalogue for north India zone.', 'contact_form', 'Converted', NULL, 'Contract signed, production batch 1 scheduled.'),
('Deepak Kumar', 'Global Health', 'deepak@globalhealth.org', '+91 98765 43210', 'Event & Exhibition Kits', '500 units', '₹1 Lakh - ₹5 Lakh', '2 - 4 weeks', 'Trade show badges, bags and delegate gift items for medical conference in Goa.', 'contact_form', 'Closed', NULL, 'Project completed and delivered in Goa venue.');