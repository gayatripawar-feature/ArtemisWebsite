


import React,{ useState } from "react";


import DirectorDesk from "../components/TeamPage/DirectorDesk";
import styles from "./TeamPage.module.css";
import { teamMembers } from "../components/TeamPage/data/teamData";
import TeamCard from "../components/TeamPage/TeamCard";
import TeamModal from "../components/TeamPage/TeamModal";
import OrgChart from "../components/TeamPage/OrgChart/OrgChart";
import PageBanner from '../components/PageBanner';

const TeamPage = () => {
 const [selectedMember, setSelectedMember] = useState(null);
 const breadcrumbs = [
		{ label: 'Home' },
		{ label: 'Our Team' }
	];
  return (
    <>
{/*
      <PageBanner
				title="Our Team"
				breadcrumbs={breadcrumbs}
				bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop&crop=center"
			/> */}
      <DirectorDesk />
      <OrgChart />
      <main className={styles.teamSection}>
        <header className={styles.teamHeader}>
          <p className={styles.teamEyebrow}>Our People</p>
          <h1 className={styles.teamTitle}>
            Meet the <span>Minds</span> Behind Artemis
          </h1>
        </header>
         <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={setSelectedMember}

            />
          ))}
        </div>
      </main>
       {selectedMember && (
        <TeamModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
};

export default TeamPage;