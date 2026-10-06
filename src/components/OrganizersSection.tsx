import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Building2, ShieldCheck, HeartHandshake } from "lucide-react";

export const OrganizersSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ai.scu.club@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-block" id="organizers">
      <div className="section-container">
        {/* 章節標籤與標題 */}
        <div className="section-title-header">
          <span className="section-overline">09 / ORGANIZERS</span>
          <h2 className="section-heading">指導與主辦單位</h2>
          <p className="section-subheading">
            產學研多方跨域聯手 · 提供學子最頂尖的法律科技研發資源與支持
          </p>
        </div>

        {/* 單位卡片三欄展示 */}
        <div className="organizers-three-col-grid">
          {/* 主辦單位 */}
          <div className="organizer-role-card">
            <div className="role-icon-box">
              <Building2 size={28} className="text-cyan-400" />
            </div>
            <span className="role-badge cyan">主辦單位</span>
            <h3 className="role-name">東吳大學 人工智慧應用社</h3>
            <p className="role-desc">
              深耕校園 AI 科技推廣、黑客松賽事籌辦與無程式碼工具教學，致力打造跨域青年技術聚落。
            </p>
          </div>

          {/* 指導單位 */}
          <div className="organizer-role-card">
            <div className="role-icon-box">
              <ShieldCheck size={28} className="text-purple-400" />
            </div>
            <span className="role-badge purple">指導單位</span>
            <h3 className="role-name">東吳大學 人本AI研究中心</h3>
            <p className="role-name-sub">台灣法學基金會</p>
            <p className="role-desc">
              引領台灣人本人工智慧與前瞻法學科技治理研究，提供賽事最頂尖之學術理論與法律實務指導。
            </p>
          </div>

          {/* 協辦單位 */}
          <div className="organizer-role-card">
            <div className="role-icon-box">
              <HeartHandshake size={28} className="text-blue-400" />
            </div>
            <span className="role-badge blue">協辦單位</span>
            <h3 className="role-name">產學夥伴持續募集中</h3>
            <p className="role-desc">
              誠摯邀請律師事務所、法科新創公司、雲端平台夥伴共襄盛舉，提供賽事獎金與技術資源贊助。
            </p>
          </div>
        </div>

        {/* 聯絡資訊綜合卡片 */}
        <div className="contact-summary-card">
          <div className="contact-summary-left">
            <h4 className="contact-box-title">競賽秘書處 諮詢與合作洽詢</h4>
            <p className="contact-box-desc">
              對於報名流程、企劃撰寫或贊助合作有任何疑問，歡迎隨時與主辦單位聯絡。
            </p>
          </div>

          <div className="contact-action-pills">
            <div className="contact-pill-item">
              <Mail size={18} className="text-cyan-400 flex-shrink-0" />
              <a href="mailto:ai.scu.club@gmail.com" className="contact-pill-text">
                ai.scu.club@gmail.com
              </a>
              <button
                className="copy-btn"
                onClick={handleCopyEmail}
                title="複製信箱"
                aria-label="複製信箱"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="contact-pill-item">
              <Phone size={18} className="text-blue-400 flex-shrink-0" />
              <a href="tel:0906831267" className="contact-pill-text">
                0906-831-267
              </a>
            </div>

            <div className="contact-pill-item">
              <MapPin size={18} className="text-purple-400 flex-shrink-0" />
              <span className="contact-pill-text">台北市中正區貴陽街一段 56 號</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
