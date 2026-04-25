// ==========================================
// CAREER PATH MAP — Game Data
// เส้นทางอาชีพด้าน Cybersecurity
// ==========================================

const CAREERS = [
    {
        id: "pentester",
        title: "Penetration Tester",
        titleTh: "นักทดสอบเจาะระบบ",
        icon: "🔓",
        color: "#ff2d55",
        colorGlow: "rgba(255,45,85,0.4)",
        description: "ผู้เชี่ยวชาญด้านการทดสอบเจาะระบบเพื่อค้นหาช่องโหว่ ทำงานร่วมกับองค์กรเพื่อเสริมสร้างความปลอดภัย",
        salary: "60,000 - 200,000+ บาท/เดือน",
        demand: "สูงมาก",
        lawNote: "ต้องปฏิบัติตาม พ.ร.บ.คอมพิวเตอร์ พ.ศ. 2550 มาตรา 5-8 อย่างเคร่งครัด ทดสอบได้เฉพาะระบบที่ได้รับอนุญาตตาม SOW เท่านั้น",
        ethicsNote: "ต้องปฏิบัติตาม Code of Ethics ของ EC-Council, Offensive Security — ไม่เปิดเผยช่องโหว่โดยไม่ได้รับอนุญาต และใช้ Responsible Disclosure",
        stages: [
            {
                id: 1,
                title: "🎓 Foundation",
                titleTh: "พื้นฐาน",
                description: "สร้างรากฐานความรู้ด้านเครือข่ายและระบบปฏิบัติการ",
                items: [
                    { type: "cert", name: "CompTIA Network+", icon: "📜", desc: "ใบรับรองพื้นฐานด้านเครือข่าย ครอบคลุม OSI Model, TCP/IP, Routing & Switching" },
                    { type: "cert", name: "CompTIA Security+", icon: "📜", desc: "ใบรับรองพื้นฐานด้านความปลอดภัย ครอบคลุม CIA Triad, Risk Management, Cryptography" },
                    { type: "skill", name: "Linux Administration", icon: "💻", desc: "ทักษะการจัดการระบบ Linux — CLI, Permission, Service Management สำคัญสำหรับการใช้เครื่องมือ Pentest" },
                    { type: "skill", name: "Networking Fundamentals", icon: "🌐", desc: "ความเข้าใจ TCP/IP, DNS, HTTP/HTTPS, Firewall — พื้นฐานสำคัญในการวิเคราะห์เครือข่าย" }
                ],
                requiredCount: 3
            },
            {
                id: 2,
                title: "⚔️ Intermediate",
                titleTh: "ระดับกลาง",
                description: "พัฒนาทักษะการโจมตีและเครื่องมือ Penetration Testing",
                items: [
                    { type: "cert", name: "CEH (Certified Ethical Hacker)", icon: "📜", desc: "ใบรับรองจาก EC-Council สำหรับ Ethical Hacking ครอบคลุม Footprinting, Scanning, Exploitation" },
                    { type: "skill", name: "Web Application Testing", icon: "🌐", desc: "ทักษะการทดสอบเว็บแอป — OWASP Top 10, SQL Injection, XSS, CSRF" },
                    { type: "skill", name: "Exploit Development", icon: "⚡", desc: "ทักษะการพัฒนา Exploit — Buffer Overflow, Shellcode, Metasploit Framework" },
                    { type: "skill", name: "Social Engineering", icon: "🎭", desc: "ทักษะวิศวกรรมสังคม — Phishing, Pretexting, Physical Security Testing" }
                ],
                requiredCount: 3
            },
            {
                id: 3,
                title: "🏆 Advanced",
                titleTh: "ระดับสูง",
                description: "พิชิตใบรับรองระดับสูงและเชี่ยวชาญเฉพาะทาง",
                items: [
                    { type: "cert", name: "OSCP (Offensive Security Certified Professional)", icon: "📜", desc: "ใบรับรองระดับสูงจาก Offensive Security ต้องสอบปฏิบัติ 24 ชั่วโมง เป็นที่ยอมรับสูงสุดในสาย Pentest" },
                    { type: "cert", name: "GPEN (GIAC Penetration Tester)", icon: "📜", desc: "ใบรับรองจาก SANS/GIAC เน้น Advanced Penetration Testing Methodology" },
                    { type: "skill", name: "Red Team Operations", icon: "🔴", desc: "ทักษะ Red Team — APT Simulation, C2 Framework, Evasion Techniques" },
                    { type: "skill", name: "Report Writing", icon: "📝", desc: "ทักษะการเขียนรายงาน Pentest — Executive Summary, Technical Details, Remediation" }
                ],
                requiredCount: 3
            }
        ]
    },
    {
        id: "soc_analyst",
        title: "SOC Analyst",
        titleTh: "นักวิเคราะห์ศูนย์ปฏิบัติการ",
        icon: "🛡️",
        color: "#00e5ff",
        colorGlow: "rgba(0,229,255,0.4)",
        description: "ผู้เฝ้าระวังและตอบสนองต่อภัยคุกคามไซเบอร์แบบ Real-time ทำงานในศูนย์ SOC ขององค์กร",
        salary: "40,000 - 150,000+ บาท/เดือน",
        demand: "สูงมาก",
        lawNote: "ต้องปฏิบัติตาม พ.ร.บ.การรักษาความมั่นคงปลอดภัยไซเบอร์ พ.ศ. 2562 ในการรายงานเหตุภัยคุกคามต่อ สกมช.",
        ethicsNote: "ต้องรักษาความลับของข้อมูลที่ Monitor ปฏิบัติตาม PDPA ในการจัดเก็บและวิเคราะห์ Log ข้อมูล",
        stages: [
            {
                id: 1,
                title: "🎓 Foundation",
                titleTh: "พื้นฐาน",
                description: "เรียนรู้พื้นฐาน Security Operations และเครื่องมือ Monitoring",
                items: [
                    { type: "cert", name: "CompTIA Security+", icon: "📜", desc: "ใบรับรองพื้นฐานด้านความปลอดภัย ครอบคลุมภัยคุกคาม, Vulnerability, Risk Management" },
                    { type: "cert", name: "CompTIA CySA+", icon: "📜", desc: "ใบรับรองด้าน Cybersecurity Analyst เน้น Threat Detection, Security Monitoring" },
                    { type: "skill", name: "SIEM Operations", icon: "📊", desc: "ทักษะการใช้ SIEM (Splunk, QRadar, ELK) — Log Analysis, Correlation Rules, Dashboard" },
                    { type: "skill", name: "Incident Triage", icon: "🔍", desc: "ทักษะการจัดลำดับความสำคัญของ Incident — True/False Positive, Severity Classification" }
                ],
                requiredCount: 3
            },
            {
                id: 2,
                title: "⚔️ Intermediate",
                titleTh: "ระดับกลาง",
                description: "พัฒนาทักษะ Threat Hunting และ Incident Response",
                items: [
                    { type: "cert", name: "BTL1 (Blue Team Level 1)", icon: "📜", desc: "ใบรับรอง Blue Team เน้น Security Operations, Threat Intelligence, Digital Forensics" },
                    { type: "skill", name: "Threat Hunting", icon: "🎯", desc: "ทักษะการค้นหาภัยคุกคาม — Hypothesis-Driven, IOC/IOA Analysis, MITRE ATT&CK" },
                    { type: "skill", name: "Malware Analysis (Basic)", icon: "🦠", desc: "ทักษะการวิเคราะห์ Malware เบื้องต้น — Static/Dynamic Analysis, Sandboxing" },
                    { type: "skill", name: "Network Forensics", icon: "🌐", desc: "ทักษะการวิเคราะห์ Network Traffic — Packet Analysis, Wireshark, Flow Analysis" }
                ],
                requiredCount: 3
            },
            {
                id: 3,
                title: "🏆 Advanced",
                titleTh: "ระดับสูง",
                description: "เชี่ยวชาญ Incident Response และ SOC Management",
                items: [
                    { type: "cert", name: "GCIH (GIAC Certified Incident Handler)", icon: "📜", desc: "ใบรับรอง SANS/GIAC ด้าน Incident Handling ครอบคลุม Incident Response Process ทั้งหมด" },
                    { type: "cert", name: "ECIH (EC-Council Certified Incident Handler)", icon: "📜", desc: "ใบรับรองจาก EC-Council เน้น Incident Handling & Response Methodology" },
                    { type: "skill", name: "SOAR Automation", icon: "🤖", desc: "ทักษะ Security Orchestration — Playbook Development, Automated Response, Integration" },
                    { type: "skill", name: "Threat Intelligence", icon: "🧠", desc: "ทักษะ Threat Intel — STIX/TAXII, IOC Management, Attribution Analysis" }
                ],
                requiredCount: 3
            }
        ]
    },
    {
        id: "forensics",
        title: "Digital Forensics Analyst",
        titleTh: "นักนิติวิทยาศาสตร์ดิจิทัล",
        icon: "🔬",
        color: "#a855f7",
        colorGlow: "rgba(168,85,247,0.4)",
        description: "ผู้เชี่ยวชาญการรวบรวมและวิเคราะห์หลักฐานดิจิทัล ทำงานร่วมกับหน่วยงานบังคับใช้กฎหมาย",
        salary: "50,000 - 180,000+ บาท/เดือน",
        demand: "สูง",
        lawNote: "ต้องปฏิบัติตาม พ.ร.บ.คอมพิวเตอร์ พ.ศ. 2550 ในการรวบรวมหลักฐาน และ Chain of Custody ตามกระบวนการยุติธรรม",
        ethicsNote: "ต้องรักษาความเป็นกลาง ไม่บิดเบือนหลักฐาน รายงานข้อเท็จจริงตามที่พบ แม้จะไม่เป็นประโยชน์ต่อผู้ว่าจ้าง",
        stages: [
            {
                id: 1,
                title: "🎓 Foundation",
                titleTh: "พื้นฐาน",
                description: "เรียนรู้หลักการนิติวิทยาศาสตร์ดิจิทัลและการรวบรวมหลักฐาน",
                items: [
                    { type: "cert", name: "CompTIA Security+", icon: "📜", desc: "ใบรับรองพื้นฐานด้านความปลอดภัย ปูทางสู่สาย Digital Forensics" },
                    { type: "skill", name: "Evidence Collection", icon: "📦", desc: "ทักษะการเก็บหลักฐานดิจิทัล — Imaging, Write-Blocking, Chain of Custody" },
                    { type: "skill", name: "File System Analysis", icon: "📂", desc: "ทักษะการวิเคราะห์ File System — NTFS, ext4, FAT32, File Recovery, Metadata" },
                    { type: "skill", name: "Windows Forensics", icon: "🪟", desc: "ทักษะ Windows Forensics — Registry, Event Logs, Prefetch, USB Artifacts" }
                ],
                requiredCount: 3
            },
            {
                id: 2,
                title: "⚔️ Intermediate",
                titleTh: "ระดับกลาง",
                description: "พัฒนาทักษะการวิเคราะห์หลักฐานขั้นสูง",
                items: [
                    { type: "cert", name: "CHFI (Computer Hacking Forensic Investigator)", icon: "📜", desc: "ใบรับรองจาก EC-Council ด้าน Computer Forensics Investigation" },
                    { type: "skill", name: "Memory Forensics", icon: "🧠", desc: "ทักษะการวิเคราะห์หน่วยความจำ — Volatility Framework, Process Analysis, Malware Detection" },
                    { type: "skill", name: "Mobile Forensics", icon: "📱", desc: "ทักษะ Mobile Forensics — iOS/Android Acquisition, App Data Analysis, Chat Recovery" },
                    { type: "skill", name: "Timeline Analysis", icon: "⏰", desc: "ทักษะการสร้าง Timeline — Log2Timeline, Event Correlation, Super Timeline" }
                ],
                requiredCount: 3
            },
            {
                id: 3,
                title: "🏆 Advanced",
                titleTh: "ระดับสูง",
                description: "เชี่ยวชาญนิติวิทยาศาสตร์ระดับองค์กรและศาล",
                items: [
                    { type: "cert", name: "GCFE (GIAC Certified Forensic Examiner)", icon: "📜", desc: "ใบรับรอง SANS/GIAC ด้าน Advanced Digital Forensics & Incident Response" },
                    { type: "cert", name: "EnCE (EnCase Certified Examiner)", icon: "📜", desc: "ใบรับรองจาก OpenText สำหรับผู้เชี่ยวชาญเครื่องมือ EnCase" },
                    { type: "skill", name: "Expert Witness", icon: "⚖️", desc: "ทักษะการเป็นพยานผู้เชี่ยวชาญในศาล — นำเสนอหลักฐาน ตอบคำถามทนาย อธิบายทางเทคนิค" },
                    { type: "skill", name: "Malware Reverse Engineering", icon: "🔬", desc: "ทักษะ Reverse Engineering — IDA Pro, Ghidra, Disassembly, Decompilation" }
                ],
                requiredCount: 3
            }
        ]
    },
    {
        id: "cloud_security",
        title: "Cloud Security Engineer",
        titleTh: "วิศวกรความปลอดภัยระบบคลาวด์",
        icon: "☁️",
        color: "#39ff14",
        colorGlow: "rgba(57,255,20,0.4)",
        description: "ผู้เชี่ยวชาญด้านการรักษาความปลอดภัยระบบ Cloud ออกแบบสถาปัตยกรรมที่ปลอดภัยบน AWS, Azure, GCP",
        salary: "70,000 - 250,000+ บาท/เดือน",
        demand: "สูงมาก",
        lawNote: "ต้องปฏิบัติตาม PDPA ในการจัดเก็บข้อมูลบน Cloud รวมถึงข้อกำหนด Data Residency ที่ต้องเก็บข้อมูลในประเทศไทย",
        ethicsNote: "ต้องโปร่งใสในการจัดการข้อมูล ตรวจสอบ Cloud Provider ว่าปฏิบัติตาม Compliance และไม่ละเมิดความเป็นส่วนตัว",
        stages: [
            {
                id: 1,
                title: "🎓 Foundation",
                titleTh: "พื้นฐาน",
                description: "เรียนรู้พื้นฐาน Cloud Computing และ Security",
                items: [
                    { type: "cert", name: "CompTIA Cloud+", icon: "📜", desc: "ใบรับรองพื้นฐาน Cloud Computing ครอบคลุม IaaS, PaaS, SaaS, Virtualization" },
                    { type: "cert", name: "AWS Cloud Practitioner", icon: "📜", desc: "ใบรับรองพื้นฐาน AWS เข้าใจ Cloud Concepts, Security, Billing" },
                    { type: "skill", name: "Cloud Architecture Basics", icon: "🏗️", desc: "ทักษะสถาปัตยกรรม Cloud — VPC, Subnets, IAM, Security Groups" },
                    { type: "skill", name: "Identity & Access Management", icon: "🔑", desc: "ทักษะ IAM — Role-Based Access, MFA, Federation, SSO" }
                ],
                requiredCount: 3
            },
            {
                id: 2,
                title: "⚔️ Intermediate",
                titleTh: "ระดับกลาง",
                description: "เชี่ยวชาญ Cloud Security Architecture",
                items: [
                    { type: "cert", name: "AWS Security Specialty", icon: "📜", desc: "ใบรับรองเฉพาะทาง AWS ด้าน Security ครอบคลุม Data Protection, Incident Response on AWS" },
                    { type: "skill", name: "Container Security", icon: "📦", desc: "ทักษะ Container Security — Docker, Kubernetes Security, Image Scanning, Runtime Protection" },
                    { type: "skill", name: "Infrastructure as Code Security", icon: "📝", desc: "ทักษะ IaC Security — Terraform, CloudFormation, Policy-as-Code, Compliance Scanning" },
                    { type: "skill", name: "Cloud SIEM & Monitoring", icon: "📊", desc: "ทักษะ Cloud Monitoring — CloudTrail, GuardDuty, Azure Sentinel, Cloud-native SIEM" }
                ],
                requiredCount: 3
            },
            {
                id: 3,
                title: "🏆 Advanced",
                titleTh: "ระดับสูง",
                description: "เชี่ยวชาญ Cloud Security Architecture ระดับองค์กร",
                items: [
                    { type: "cert", name: "CCSP (Certified Cloud Security Professional)", icon: "📜", desc: "ใบรับรอง (ISC)² ด้าน Cloud Security ครอบคลุม Cloud Architecture, Design, Operations" },
                    { type: "cert", name: "CCSK (Certificate of Cloud Security Knowledge)", icon: "📜", desc: "ใบรับรองจาก CSA (Cloud Security Alliance) ด้าน Cloud Security Best Practices" },
                    { type: "skill", name: "Zero Trust Architecture", icon: "🛡️", desc: "ทักษะ Zero Trust — Microsegmentation, Least Privilege, Continuous Verification" },
                    { type: "skill", name: "DevSecOps", icon: "🔄", desc: "ทักษะ DevSecOps — CI/CD Security, SAST/DAST, Shift-Left Security, Pipeline Security" }
                ],
                requiredCount: 3
            }
        ]
    },
    {
        id: "ciso",
        title: "CISO",
        titleTh: "ผู้บริหารด้านความปลอดภัยสารสนเทศ",
        icon: "👔",
        color: "#ffd60a",
        colorGlow: "rgba(255,214,10,0.4)",
        description: "Chief Information Security Officer — ผู้บริหารระดับสูงที่ดูแลกลยุทธ์ความปลอดภัยไซเบอร์ทั้งองค์กร",
        salary: "150,000 - 500,000+ บาท/เดือน",
        demand: "สูง (ตำแหน่งจำกัด)",
        lawNote: "ต้องรับผิดชอบการปฏิบัติตาม พ.ร.บ.ไซเบอร์, PDPA, ISO 27001 และ Compliance Framework ทั้งหมดขององค์กร",
        ethicsNote: "ต้องเป็นแบบอย่างด้านจริยธรรม สร้างวัฒนธรรม Security-First ในองค์กร ตัดสินใจบนพื้นฐานความรับผิดชอบต่อผู้มีส่วนได้ส่วนเสีย",
        stages: [
            {
                id: 1,
                title: "🎓 Foundation",
                titleTh: "พื้นฐาน",
                description: "สร้างรากฐาน Security Management และ Governance",
                items: [
                    { type: "cert", name: "CompTIA Security+", icon: "📜", desc: "ใบรับรองพื้นฐานด้านความปลอดภัย สร้างรากฐานก่อนก้าวสู่ Management" },
                    { type: "cert", name: "ISO 27001 Lead Implementer", icon: "📜", desc: "ใบรับรองด้าน Information Security Management System (ISMS) Implementation" },
                    { type: "skill", name: "Risk Assessment", icon: "📊", desc: "ทักษะการประเมินความเสี่ยง — Risk Register, Likelihood/Impact Matrix, Risk Treatment" },
                    { type: "skill", name: "Security Policy Development", icon: "📋", desc: "ทักษะการพัฒนานโยบายความปลอดภัย — Acceptable Use, Incident Response, BCP/DRP" }
                ],
                requiredCount: 3
            },
            {
                id: 2,
                title: "⚔️ Intermediate",
                titleTh: "ระดับกลาง",
                description: "พัฒนาทักษะ Security Management และ Leadership",
                items: [
                    { type: "cert", name: "CISM (Certified Information Security Manager)", icon: "📜", desc: "ใบรับรองจาก ISACA เน้น Security Management, Risk Management, Governance" },
                    { type: "skill", name: "Budget Management", icon: "💰", desc: "ทักษะการบริหารงบประมาณ Security — ROI, TCO, Cost-Benefit Analysis" },
                    { type: "skill", name: "Compliance Management", icon: "⚖️", desc: "ทักษะการบริหาร Compliance — PDPA, ISO 27001, PCI-DSS, NIST Framework" },
                    { type: "skill", name: "Team Leadership", icon: "👥", desc: "ทักษะการเป็นผู้นำ — Building Security Teams, Mentoring, Cross-department Communication" }
                ],
                requiredCount: 3
            },
            {
                id: 3,
                title: "🏆 Advanced",
                titleTh: "ระดับสูง",
                description: "พิชิตใบรับรองระดับ Executive และ Strategic Leadership",
                items: [
                    { type: "cert", name: "CISSP (Certified Information Systems Security Professional)", icon: "📜", desc: "ใบรับรอง (ISC)² ระดับ Gold Standard ครอบคลุม 8 โดเมน ต้องมีประสบการณ์ 5 ปี" },
                    { type: "cert", name: "CISA (Certified Information Systems Auditor)", icon: "📜", desc: "ใบรับรองจาก ISACA ด้าน IS Audit เสริมมุมมอง Governance & Assurance" },
                    { type: "skill", name: "Board Communication", icon: "🎤", desc: "ทักษะการนำเสนอต่อ Board of Directors — Translate Tech to Business, Risk Reporting" },
                    { type: "skill", name: "Strategic Planning", icon: "🗺️", desc: "ทักษะ Strategic Planning — 3-5 Year Security Roadmap, Cyber Insurance, M&A Security" }
                ],
                requiredCount: 3
            }
        ]
    }
];
